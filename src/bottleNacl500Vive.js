import $ from 'jquery';
import _ from 'lodash';

import stateIndex from './state';
import controllerStateIndex from '../utils/controllerState';
import * as constants from '../utils/constants';
import aAnimationWrapper from '../utils/aAnimationWrapper';
import { getWorldBound } from "../utils/getWorldPositionAndBound";
import { isEmitted } from "../utils/isEmitted";
import { controllerActions } from "../utils/controllerActions";

let element;
let currentState;

let activeController;

let currentControllerState;

export default AFRAME.registerComponent('bottle_nacl_500_vive', {

    init: function(){
        // shallow copy
        element = this.el;

        // deep copy
        currentState = _.cloneDeep(stateIndex.getState());

        // deep copy
        currentControllerState = _.cloneDeep(controllerStateIndex.getAllControllerState());

        $(element).on('click', () => {
        });

        $(element).on('putOnDesk', () => {
            console.log("triggle putOnDesk");
            drop();
            controllerStateIndex.setControllerState('nacl500InHandToDesk', null);
            controllerStateIndex.setControllerState('nacl500OnDesk', true);
            controllerStateIndex.setControllerState('nacl500Dragable', false);
        });

    }
});

export function handleNotifyBottleNacl500Vive(nextState) {
    // deep copy
    currentState = _.cloneDeep(stateIndex.getState());
}

export function handleControllerNotifyBottleNacl500Vive ( triggerEvent ) {

    getWorldBound(element);
    if (!isEmitted(element, triggerEvent.position)) {
       return false;
    }

    if(triggerEvent.eventName === 'triggerDown') {
        if (controllerStateIndex.getControllerState('nacl500InHandToDesk') === null) {
            if (controllerStateIndex.getControllerState('nacl500Dragable')) {
                console.log("emmit triggerDown to bottle");
                activeController = triggerEvent.activeController;
                let activeControllerId =  activeController.getAttribute('id');
                controllerStateIndex.setControllerState('nacl500InHandToDesk', activeControllerId);
            }
        }
    }
}

export function handleControllerStateNotifyBottleNacl500Vive (nextControllerState) {
    if (
        nextControllerState.nacl500InHandToDesk !== null
        && currentControllerState.nacl500InHandToDesk === null
        && nextControllerState.nacl500Dragable
    ) {

        dragInHand();

        currentControllerState = _.cloneDeep(nextControllerState);

    }
}

function dragInHand() {
    let controllerActivities = new controllerActions(element, activeController);
    controllerActivities.drag();
}

function drop() {
    console.log("drop bottle");
    let controllerActivities = new controllerActions(element, activeController);
    controllerActivities.drop();
}

export function isBottleChecked() {
    if (!controllerStateIndex.getControllerState('nacl500LabelChecked')) {
        return false;
    }
    if (!controllerStateIndex.getControllerState('nacl500LiquidChecked')) {
        return false;
    }
    if (!controllerStateIndex.getControllerState('nacl500CapChecked')) {
        return false;
    }
    return true;
}


