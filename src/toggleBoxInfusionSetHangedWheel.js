import $ from 'jquery';
import _ from 'lodash';

import { getWorldBound } from "../utils/getWorldPositionAndBound";
import { isEmitted, detectCollision } from '../utils/isEmitted';
import controllerStateIndex from '../utils/controllerState';
import aAnimationWrapper from "../utils/aAnimationWrapper";

import {canTriggerChamberAndWheel} from "./infusionSetHangedVive";

let element;
let infusionSetHangedWheel;

let currentControllerState;
let canTriggerWheel = false;

export default AFRAME.registerComponent('toggle_box_infusion_set_hanged_wheel', {

    init: function(){

        element = this.el;
        infusionSetHangedWheel = document.querySelector('#infusionSetHangedWheel');

        // deep copy
        currentControllerState = _.cloneDeep(controllerStateIndex.getAllControllerState());

    },

});

const schema = {
    infusionSetHangedWheelOpenPosition: '-0.530 0.110 -0.060',
    dur: 500,
    fillTime: 800
};

export function handleControllerNotifyToggleBoxInfusionSetHangedWheel( triggerEvent ) {

    if (
        !controllerStateIndex.getControllerState('dripChamberFilled')
    ) {
        console.log("Sqeeze chamber before open the roller");
        return false;
    }

    if (
        detectCollision(element, triggerEvent.activeController)
        && canTriggerChamberAndWheel
    ) {

        if (
            controllerStateIndex.getControllerState('infusionSetWheelClosed')
        ) {
            controllerStateIndex.setControllerState('infusionSetWheelClosed', false);
        }
    }
}

export function handleControllerStateNotifyToggleBoxInfusionSetHangedWheel (nextControllerState) {

    if (
        !nextControllerState.infusionSetWheelClosed
        && nextControllerState.dripChamberFilled
        && currentControllerState.infusionSetWheelClosed
    ) {
        openWheel();
    }

    // deep copy
    currentControllerState = _.cloneDeep(controllerStateIndex.getAllControllerState());
}

function openWheel() {
    aAnimationWrapper(infusionSetHangedWheel, '', 'position', '', schema.infusionSetHangedWheelOpenPosition, schema.dur, '', true, 'forwards');
}

export function setCanTriggerWheel(status) {
    canTriggerWheel = status;
}
