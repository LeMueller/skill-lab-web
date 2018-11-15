import $ from 'jquery';
import _ from 'lodash';

import { detectCollision } from '../utils/isEmitted';
import stateIndex from './state';
import controllerStateIndex from '../utils/controllerState';
import aAnimationWrapper from '../utils/aAnimationWrapper';
import {setVisibleFalse, setVisibleTrue} from "../utils/setVisible";
import { isBottleChecked } from './bottleNacl500Vive';
import hints from "../utils/hints";

let element;
let bottleNacl500;
let currentControllerState;


export default AFRAME.registerComponent('toggle_box_nacl500_on_desk', {

    init: function(){
        element = this.el;
        bottleNacl500 = document.querySelector('#nacl500Bottle');

        currentControllerState = _.cloneDeep(controllerStateIndex.getAllControllerState());
    },
});

const schema = {
    onDeskPosition: '-0.32 0.732 -0.83',
    dur: '500'
};

export function handleControllerNotifyToggleBoxNacl500OnDesk( triggerEvent ) {
    if(!detectCollision(element, triggerEvent.activeController)) {
        return false;
    }

    if(
        controllerStateIndex.getControllerState('nacl500InHandToDesk') !== null
        && triggerEvent.activeController.getAttribute('id') === controllerStateIndex.getControllerState('nacl500InHandToDesk')
        && !controllerStateIndex.getControllerState('nacl500OnDesk')
    ) {
        $(bottleNacl500).trigger('putOnDesk');
        // After the change of DOM, run the animation.
        setTimeout(()=>{
            aAnimationWrapper(bottleNacl500, '', 'position', '', schema.onDeskPosition, schema.dur, '',true , 'forwards');
        }, 500);
        controllerStateIndex.setControllerState('isNacl500ToDeskHandling', false);
    }
}

export function handleControllerReleaseToggleBoxNacl500OnDesk( triggerEvent ) {
    if(
        !detectCollision(element, triggerEvent.activeController)
        || !controllerStateIndex.getControllerState('nacl500LabelChecked')
        || !controllerStateIndex.getControllerState('nacl500LiquidChecked')
        || !controllerStateIndex.getControllerState('nacl500CapChecked')
    ) {
        return false;
    }

    if(
        controllerStateIndex.getControllerState('nacl500InHandToDesk') !== null
        && triggerEvent.activeController.getAttribute('id') === controllerStateIndex.getControllerState('nacl500InHandToDesk')
        && !controllerStateIndex.getControllerState('nacl500OnDesk')
    ) {
        $(bottleNacl500).trigger('putOnDesk');
        // After the change of DOM, run the animation.
        setTimeout(()=>{
            aAnimationWrapper(bottleNacl500, '', 'position', '', schema.onDeskPosition, schema.dur, '',true , 'forwards');
        }, 500);
        controllerStateIndex.setControllerState('isNacl500ToDeskHandling', false);
        stateIndex.set('hint', hints.takeOffBottleCap);
    }
}

export function handleControllerStateNotifyToggleBoxNacl500OnDesk (nextControllerState) {

    if (
        nextControllerState.nacl500InHandToDesk !== null
        && currentControllerState.nacl500InHandToDesk === null
    ) {
        setVisibleTrue(element);
    }

    if (
        isBottleChecked()
        && nextControllerState.nacl500InHandToDesk
    ) {
        element.setAttribute('material', 'color:#00ffff; transparent: true; opacity: 0.5')
    }

    if (
        nextControllerState.nacl500OnDesk
        && !currentControllerState.nacl500OnDesk
    ) {
        setVisibleFalse(element);
    }

    currentControllerState = _.cloneDeep(controllerStateIndex.getAllControllerState());
}


