import $ from 'jquery';
import _ from 'lodash';

import { getWorldBound } from "../utils/getWorldPositionAndBound";
import { isEmitted } from '../utils/isEmitted';
import controllerStateIndex from '../utils/controllerState';
import stateIndex from './state';

let element;
let nameLabelWroteOnBottle;
let nameLabelWroteLeft;
let nameLabelWroteRight;

let currentControllerState;

export default AFRAME.registerComponent('toggle_box_nach500_name_label', {

    init: function(){

        element = this.el;
        nameLabelWroteOnBottle = document.querySelector('#nameLabelWroteOnBottle');
        nameLabelWroteLeft =document.querySelector('#nameLabelWroteLeft');
        nameLabelWroteRight =document.querySelector('#nameLabelWroteRight');

        // deep copy
        currentControllerState = _.cloneDeep(controllerStateIndex.getAllControllerState());

    },

});

const schema = {
};

export function handleControllerNotifyToggleBoxNacl500NameLabel( triggerEvent ) {
    if (
        controllerStateIndex.getControllerState('nameLabelFilled')
        && !stateIndex.getIn(['nameLabel', 'finish'])
    ) {
        controllerStateIndex.setControllerState('nameLabelPasted', true);
        stateIndex.setIn(['nameLabel', 'finish'], true);
    }

}

export function handleControllerStateNotifyToggleBoxNacl500NameLabel (nextControllerState) {

    if (
        nextControllerState.nameLabelInHand
        && !currentControllerState.nameLabelInHand
    ) {
        element.setAttribute('visible', true);
    }

    if (
        nextControllerState.nameLabelFilled
        && !currentControllerState.nameLabelFilled
    ) {
        element.setAttribute('material',"color:#00ffff; transparent: true; opacity: 0.5");
    }

    if (
        nextControllerState.nameLabelPasted
    ) {
        element.setAttribute('visible', false);
        pastNameLabel();
    }

    // deep copy
    currentControllerState = _.cloneDeep(controllerStateIndex.getAllControllerState());
}

function pastNameLabel () {
    nameLabelWroteOnBottle.setAttribute('visible', true);
    $(nameLabelWroteLeft).remove();
    $(nameLabelWroteRight).remove();
}
