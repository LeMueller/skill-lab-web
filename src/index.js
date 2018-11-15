import stateIndex from './state';
import controllerStateIndex from '../utils/controllerState';

import * as cursorSubmit from './cursorSubmit';
import * as drawerOpen from './drawerOpen';
import * as doorOpen from './doorOpen';
import * as clockRoll from './clockRoll';
import * as handDisinfection from './handDisinfection';
import * as wasteBinCapOpen from './wasteBinCapOpen';
import * as clothBottleCapOpen from './clothBottleCapOpen';
import * as portfolio from './portfolio';
import * as portfolioCheck from './portfolioCheck';
import * as glove from './glove';
import * as disinfectionClothInBottle from './disinfectionClothInBottle';
import * as disinfectionClothOnTable from './disinfectionClothOnTable';
import * as bottleNacl500 from './bottleNacl500';
import * as infusionSet from './infusionSet';
import * as drawerOpenWithInfusionSet from './drawerOpenWithInfusionSet';
import * as nameLabelStamper from './nameLabelStamper';
import * as drawerOpenWithHandle from './drawerOpenWithHandle';
import * as bottle_nacl_500_vive from './bottleNacl500Vive';

import * as toggleBoxTrashCan from './toggleBoxTrashCan';
import * as toggleBoxNacl500OnDesk from './toggleBoxNacl500OnDesk';
import * as toggleBoxNacl500Label from './toggleBoxNacl500Label';
import * as hookNacl500Label from './hookNacl500Label';
import * as toggleBoxNacl500Cap from './toggleBoxNacl500Cap';
import * as hoolNacl500Cap from './hookNacl500Cap';
import * as toggleBoxWasteBin from './toggleBoxWasteBin';
import * as bottleNacl500Cap from './bottleNacl500Cap';

import * as disinfectionClothOnTableVive from './disinfectionClothOnTableVive';
import * as gloveInHand from './gloveInHand';

import * as infusionSetInPackVive from './infusionSetInPackVive';
import * as toggleBoxInfusionSetInPack from './toggleBoxInfusionSetInPack';
import * as toggleBoxInfusionSetOnDesk from './toggleBoxInfusionSetOnDesk';
import * as infusionSetOpenVive from './infusionSetOpenVive';
import * as toggleBoxInfusionSetOpenWheel from './toggleBoxInfusionSetOpenWheel';
import * as infusionSetCapVive from './infusionSetCapVive';

import * as toggleBoxNacl500Hanged from './toggleBoxNacl500Hanged';
import * as infusionSetHangedVive from './infusionSetHangedVive';
import * as toggleBoxInfusionSetHangedChamber from './toggleBoxInfusionSetHangedChamber';
import * as toggleBoxInfusionSetHangedWheel from './toggleBoxInfusionSetHangedWheel';
import * as infusionSetHangedFilledVive from './infusionSetHangedFilledVive';

import * as nameLabelStamperVive from './nameLabelStamperVive';
import * as toggleBoxNacl500NameLabel from './toggleBoxNacl500NameLabel';
import * as toggleBoxNameLabelEmpty from './toggleBoxNameLabelEmpty';

import * as toggleBoxSelectSection from './toggleBoxSelectSection';

import * as getWorldBound from '../utils/getWorldPositionAndBound';
import * as sectionSelection from './sectionSelection';
import * as controllerManage from '../utils/controllerManage';
import * as controller6D from './controller6D';
import * as controllerActions from '../utils/controllerActions';

import * as controllerHand from './controllerHand';

import * as tipsTextEdit from '../utils/tipsTextEdit';

import * as raycasterIntersection from './raycasterIntersection';
import * as cameraMove from './cameraMove';

import * as indicatorBox from './indicatorBox';
import * as raycasterVive from './raycasterVive';

import * as portfolioCheckVive from './portfolioCheckVive';
import * as nacl500LabelCheckVive from './nacl500LabelCheckVive';
import * as nacl500LiquidCheckVive from './nacl500LiquidCheckVive';
import * as nacl500CapCheckVive from './nacl500CapCheckVive';
import * as infusionSetInPackCheckVive from './infusionSetInPackCheckVive';

import * as nacl500DoorOpen from './nacl500DoorOpen';

import * as dropDown from '../utils/dropDown';

import * as bottleNacl500CapVive from './bottleNacl500CapVive';
import * as nameLabelFilledVive from './nameLabelFilledVive';

import * as hasCollisionWithCabinets from '../utils/hasCollisionWithCabinets';

import * as scene from './scene';

import * as submitSound from './submitSound';
import * as gearController from './gearController';

import * as pageBack from './pageBack';

stateIndex.init();
controllerStateIndex.initControllerState();
