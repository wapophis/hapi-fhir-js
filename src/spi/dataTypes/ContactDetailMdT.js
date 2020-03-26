import FlattenAbleObject from '../FlattenAbleObject.js';
import {isValid} from '../../utils/ValidationRules.js';
import ResourceMixin from '../mixins/ResourceMixin.js';
import _ContactPointDt from './ContactPointDt.js';

/**
 * METADATA TYPE
 */
export default class _ContactDetailMdT extends ResourceMixin( FlattenAbleObject){

    /**
     * @constructor
     * @param {*} root  roob object to decorate
     */
    constructor(root){
        super();

        if(isValid(root)){
            this.name=root.name;
            this.telecom=root.telecom;
        }

    }

    get name(){
        return this.getterDataTypeElement("myName",StringDt).valueOf();
      }

    set name(newValue){
      this.setterDataTypeElement("myName",StringDt,newValue);
      return this;
    }

    get telecom(){
        return this.getterDataTypeArrayElement("myTelecom",_ContactPointDt).valueOf();
      }

    set telecom(newValue){
      this.setterDataTypeArrayElement("myTelecom",_ContactPointDt,newValue);
      return this;
      }
    addTelecom(newValue){
        return this.appendDataTypeArrayElement("myTelecom",_ContactPointDt,newValue);
      }

  }