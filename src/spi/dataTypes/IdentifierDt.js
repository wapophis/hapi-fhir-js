import {isUndefined,isValid,isEmpty,isEmptyArray} from '../../utils/ValidationRules.js';
import IdentifierUseEnum from '../valueSets/IdentifierUseEnum.js';
import IdentifierTypeEnum from '../valueSets/IdentifierTypeEnum.js';

import PeriodDt from './PeriodDt.js';
import CodingDt from './CodingDt.js';
import StringDt from './StringDt.js';
import CodeableConceptDt from './CodeableConceptDt.js';
import BoundCodeableConceptDt from './BoundCodeableConceptDt.js';
import ReferenceDt from './ReferenceDt.js';


/**
 * Created by lucho
 * @param {*} root 
 */
export default class _IdentifierDt extends Object{
    constructor(root){
        super();

        if(isValid(root)){
            this.use=root.use;
            this.type=root.type;
            this.system=root.system;
            this.value=root.value;
            this.period=root.period;
            this.assigner=root.assigner;
        }

    }

    isEmpty(){
        return 
        this.getUseElement().isEmpty()
        && this.getTypeElement().isEmpty()
        && isEmpty(this.system)
        && isEmpty(this.value)
        && this.period.isEmpty()
    }

    get use(){
        return this.getUseElement().valueOf();
    }

    getUseElement(){
        if(!isValid(this.myUse)){
            this.myUse=new CodingDt();
        }
        return this.myUse;
    }


    /**
     * 
     */
    set use(newValue){
        if(isValid(newValue)){
            let code=IdentifierUseEnum.getByCode(newValue);
            if(!code.isEmpty()){
                this.setUseElement(code);
            }else{
                this.getUseElement().code=newValue;
            }
        }
    }
    

    /**
     * 
     * @param {*} newValue 
     */
    setUseElement(newValue){
        if(newValue instanceof CodingDt===false){
            throw new TypeError("Use field must be a CodingDt object");
        }
        this.myUse=newValue;
        return this;
    }

    get type(){
        return this.getTypeElement().valueOf();
    }

    getTypeElement(){
        if(!isValid(this.myType)){
            this.myType=new CodeableConceptDt();
        }
        return this.myType;
    }

    /**
     * 
     */
    set type(newVal){
        if(isValid(newVal) && !isEmptyArray(newVal.coding)){
            this.setTypeElement(new BoundCodeableConceptDt(IdentifierTypeEnum).forCodes(newVal.coding));
        }
        return this;
    }


    /**
     * 
     * @param {*} newVal 
     */
    setTypeElement(newVal){
        if(newVal instanceof CodeableConceptDt===false){
            throw new TypeError("Type must be a codeableConceptDt")
        }
        this.myType=newVal;
        return this;
    }

    get system(){
        return this.getSystemElement().valueOf();
    }

    getSystemElement(){
        if(!isValid(this.mySystem)){
            this.mySystem=new StringDt();
        }
        return this.mySystem;
    }

    set system(newValue){
        this.getSystemElement().value=newValue;
        return this;
    }

    setSystemElement(newValue){
        if(newValue instanceof StringDt===false){
            throw new TypeError("System field expect an StringDt object");
        }
        this.mySystem=newValue;
        return this;
    }

    get value(){
        if(!isValid(this.myValue)){
            this.myValue=new String();
        }
        return this.myValue;
    }

    set value(newVal){
        this.myValue=newVal;
        return this;
    }

    get period(){
        if(!isValid(this.myPeriod)){
            this.myPeriod=new PeriodDt();
        }
        return this.myPeriod;
    }

    set period(newVal){
        this.myPeriod=newVal;
        return this;
    }

    get assigner(){
        if(!isValid(this.myAssigner)){
            this.myAssigner=new ReferenceDt();
        }
        return this.myAssigner;
    }

    set assigner(newVal){
        this.myAssigner=newVal;
        return this;
    }

}
