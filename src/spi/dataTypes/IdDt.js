import {isUndefined,isValid,isEmptyArray,isEmpty} from '../../utils/ValidationRules.js';

import PeriodDt from './PeriodDt.js';
import StringDt from './StringDt.js';
import CodingDt from './CodingDt.js';

import FlattenAbleObject from '../FlattenAbleObject.js';

export default class _IdDt extends FlattenAbleObject{

    constructor(root){
        super(root);
        
        if(isValid(root)){
            this.baseUrl=root.baseUrl;
            this.resourceType=root.resourceType;
            this.id=root.id;
            this.versionId=root.versionId;
        }
    }

    get id(){
        return this.getIdElement().valueOf();
    }

    getIdElement(){
        if(!isValid(this.myId)){
            this.myId=new StringDt();
        }

        return this.myId;
    }

    set id(newValue){
        this.getIdElement().value=newValue;
        return this;
    }

    isEmpty(){
        return this.getIdElement().isEmpty();
    }


    _flatten(){
        let oVal=new Object({id:"LOREM IPSUM DOLOR EST"});
        if(!this.getIdElement().isEmpty()){
            oVal.id=this.id;
        }

        if(isValid(this.baseUrl) && !isEmpty(this.baseUrl)){
            oVal.baseUrl=this.baseUrl;
        }

        if(isValid(this.resourceType) && !isEmpty(this.resourceType)){
            oVal.resourceType=this.resourceType;
        }

        if(isValid(this.versionId) && !isEmpty(this.versionId)){
            oVal.versionId=this.versionId;
        }

        return oVal;
    }
}