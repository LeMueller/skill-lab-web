import $ from 'jquery';
import aAnimationWrapper from '../utils/aAnimationWrapper';
import { getWorldBound } from "../utils/getWorldPositionAndBound";
import { isEmitted, detectCollision } from '../utils/isEmitted';
import statIndex from './state';

let element;
export let canTakeBottle = false;

export default AFRAME.registerComponent('nacl500_door_open', {

    init: function () {
        element = this.el;

        this.el.addEventListener('click', () => {
            // twoCabinets.components.sound.playSound();
            statIndex.set('nacl500DoorOpen', !statIndex.get('nacl500DoorOpen'));
        });
    }
});

const schema = {
    open: '0 -90 0',
    close: '0 0 0',
    dur : 300,
};

export function handleNotifyNacl500DoorOpen(nextState) {
    if (nextState.nacl500DoorOpen) {
        aAnimationWrapper(element, '', 'rotation', '', schema.open, schema.dur, '', true, 'forwards');
        setTimeout(()=>{
            canTakeBottle = true;
        }, schema.dur);
    }
    else {
        aAnimationWrapper(element, '', 'rotation', '', schema.close, schema.dur, '', true, 'forwards');
        setTimeout(()=>{
            canTakeBottle = false;
        }, schema.dur);
    }
}

/**
 * Handle the notify form controller
 *
 * @param triggerEvent
 */
export function handleControllerNotifyNacl500DoorOpen( triggerEvent ) {
    if(detectCollision(element, triggerEvent.activeController)){
        element.emit('click');
    }
}