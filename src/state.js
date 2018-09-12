import Observable from '../utils/observable';

import * as sectionSelect from '../utils/sectionSelect';
import {setControllerStateToSection} from '../utils/controllerState';

import {handleNotifyPortfolio} from './portfolio';
import {handleNotifyPortfolioCheck} from './portfolioCheck';
import {handleNotifyGlove} from './glove';
import {handleNotifyClothInBottle} from "./disinfectionClothInBottle";
import {handleNotifyClothOnTable} from "./disinfectionClothOnTable";
import {handleNotifyHandDisinfection} from "./handDisinfection";
import {handleNotifyBottle, initBottlePutOnTableTakeOffCap, initBottleHanged} from "./bottleNacl500";
import {handleNotifyWasteBinCap} from "./wasteBinCapOpen";
import {handleNotifyInfusionSet, initInfusionSetOnTableOffCapOpenCloseWheel, initInfusionSetFixed} from "./infusionSet";
import {handleNotifyNameLabel} from "./nameLabelStamper";
import {handleNotifyClothBottleCapOpen} from "./clothBottleCapOpen";


let state;

export default class stateIndex {

    static init() {
        this.selectSection(0);
        
        this.headingsObserver = new Observable();
        // Add function from observers
        this.headingsObserver.subscribe(handleNotifyPortfolio);
        this.headingsObserver.subscribe(handleNotifyPortfolioCheck);
        this.headingsObserver.subscribe(handleNotifyGlove);
        this.headingsObserver.subscribe(handleNotifyClothInBottle);
        this.headingsObserver.subscribe(handleNotifyClothOnTable);
        this.headingsObserver.subscribe(handleNotifyHandDisinfection);
        this.headingsObserver.subscribe(handleNotifyBottle);
        this.headingsObserver.subscribe(handleNotifyWasteBinCap);
        this.headingsObserver.subscribe(handleNotifyInfusionSet);
        this.headingsObserver.subscribe(handleNotifyNameLabel);
        this.headingsObserver.subscribe(handleNotifyClothBottleCapOpen);
    }

    static selectSection(section) {
        switch (section) {
            case 0:
                state = sectionSelect.section0;
                break;

            case 1:
                state = sectionSelect.section1;
                this.setSceneToSection(1);
                setControllerStateToSection(1);
                break;

            case 2:
                state = sectionSelect.section2;
                this.setSceneToSection(2);
                setControllerStateToSection(2);
                break;

            case 3:
                state = sectionSelect.section3;
                this.setSceneToSection(3);
                setControllerStateToSection(3);
                break;

            case 4:
                state = sectionSelect.section4;
                this.setSceneToSection(4);
                setControllerStateToSection(4);
                break;

            case 5:
                state = sectionSelect.section5;
                this.setSceneToSection(5);
                setControllerStateToSection(5);
                break;

            case 6:
                state = sectionSelect.section6;
                this.setSceneToSection(6);
                setControllerStateToSection(6);
                break;

            default:
                state = sectionSelect.section0;
        }
    }

    static setSceneToSection(section) {
        switch (section) {
            case 1:
                console.log("1");
                break;
            case 2:
                console.log("2");
                break;
            case 3:
                console.log("3");
                break;

            case 4:
                // put bottle on table and take off the cap
                console.log("put bottle on table and take off the cap");
                initBottlePutOnTableTakeOffCap();
                break;
            case 5:
                // put on table, take off cap, close wheel
                console.log("put on table, take off cap, close wheel");
                initBottlePutOnTableTakeOffCap();
                initInfusionSetOnTableOffCapOpenCloseWheel();
                break;
            case 6:
                // to fix the tube
                console.log("to fix the tube");
                initInfusionSetFixed();
                initBottleHanged();
                break;
            default:
                console.log("nothing to do");
        }
    }

    /**
     * Get all state.
     *
     * @returns {*}
     */
    static getState() {
        return state;
    }

    /**
     * Get the value of the prop in state.
     *
     * @param propString
     * @returns {*}
     */
    static get(propString) {
        return state[propString];
    }

    /**
     * Get the value of the props in state in deep. Type of param should be array.
     *
     * @param propsArray
     * @returns {*}
     */
    static getIn(propsArray) {
        const lengthOfProps = propsArray.length;
        let result = state[propsArray[0]];
        if (lengthOfProps === 1) {
            return result;
        }
        else {
            for (let i = 1; i < lengthOfProps; i++) {
                result = result[propsArray[i]];
            }
        }
        return result;
    }

    /**
     * Set the prop as the given value.
     *
     * @param propString
     * @param value
     */
    static set(propString, value) {
        state[propString] = value;
        this.headingsObserver.notify(state);

        console.log('state: ', stateIndex.getState());
    }

    /**
     * Set the value of the props in state in deep. Type of first param should be array.
     *
     * @param propsArray
     * @param value
     */
    // TODO: Ugly function, must to be rewrite
    static setIn(propsArray, value) {
        const lengthOfProps = propsArray.length;

        // why state already changed here, before switch???
        // console.log('before.setIn.state:', state);

        switch (lengthOfProps) {
            case 1:
                state[propsArray[0]] = value;
                break;
            case 2:
                state[propsArray[0]][propsArray[1]] = value;
                break;
            case 3:
                state[propsArray[0]][propsArray[1]][propsArray[2]] = value;
                break;
            case 4:
                state[propsArray[0]][propsArray[1]][propsArray[2]][propsArray[3]] = value;
                break;
        }

        this.headingsObserver.notify(state);


        console.log('state changed: ', propsArray, value);

    }
}
