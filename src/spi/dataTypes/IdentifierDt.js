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
        return true
        && this.getUseElement().isEmpty()
        && this.getTypeElement().isEmpty()
        && this.getSystemElement().isEmpty()
        && this.getValueElement().isEmpty()
        && this.getPeriodElement().isEmpty();
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
        return this.getValueElement().valueOf();
    }

    getValueElement(){
        if(!isValid(this.myValue)){
            this.myValue=new StringDt();
        }
        return this.myValue;
    }

    set value(newVal){
        this.getValueElement().value=newVal;
        return this;
    }

    setValueElement(newValue){
        if(newValue instanceof StringDt===false){
            throw new TypeError("Value field expect an StringDt object");
        }

        this.myValue=newValue;
        return this;
    }

    get period(){
        return this.getPeriodElement().valueOf();
    }

    getPeriodElement(){
        if(!isValid(this.myPeriod)){
            this.myPeriod=new PeriodDt();
        }
        return new PeriodDt(this.myPeriod);
    }

    set period(newValue){
        if(newValue instanceof PeriodDt===true){
            this.setPeriodElement(newValue);
        }else{
            this.setPeriodElement(new PeriodDt(newValue));
        }
        return this;
    }

    setPeriodElement(newValue){
        if(newValue instanceof PeriodDt===false){
            throw new TypeError("Period field must be PeriodDt");
        }
        this.myPeriod=newValue;
        return this;
    }

    get assigner(){
        return this.getAssignerElement().valueOf();
    }

    getAssignerElement(){
        if(!isValid(this.myAssigner)){
            this.myAssigner=new ReferenceDt();
        }
        return this.myAssigner;
    }

    set assigner(newVal){
        this.setAssignerElement(new ReferenceDt(newVal));
        return this;
    }

    setAssignerElement(newValue){
        if(newValue instanceof ReferenceDt===false){
            throw new TypeError("Assigner expect a ReferenceDt object");
        }

        this.myAssigner=newValue;
        return this;
    }

    valueOf(){
        let oVal=new Object();

        if(!this.getUseElement().isEmpty()){
            oVal.use=this.getUseElement().code.valueOf();
        }

        if(!this.getTypeElement().isEmpty()){
            oVal.type=this.getTypeElement().valueOf();
        }

        if(!this.getSystemElement().isEmpty()){
            oVal.system=this.getSystemElement().valueOf();
        }

        if(!this.getValueElement().isEmpty()){
            oVal.value=this.getValueElement().valueOf();
        }

        if(!this.getPeriodElement().isEmpty()){
            oVal.period=this.getPeriodElement().valueOf();
        }
        
        // Prevent recursive loop with reference id 
        if(!this.getAssignerElement().isEmpty()){
            oVal.assigner=this.getAssignerElement().valueOf();
        }

        return oVal;
    }

    _flatten(){
        let oVal=new Object();

        if(!this.getUseElement().isEmpty()){
            oVal.use=this.getUseElement().valueOf();
        }

        if(!this.getTypeElement().isEmpty()){
            oVal.type=this.getTypeElement().valueOf();
        }

        if(!this.getSystemElement().isEmpty()){
            oVal.system=this.getSystemElement().valueOf();
        }

        if(!this.getValueElement().isEmpty()){
            oVal.value=this.getValueElement().valueOf();
        }

        if(!this.getPeriodElement().isEmpty()){
            oVal.period=this.getPeriodElement().valueOf();
        }
        
        // // Prevent recursive loop with reference id 
        // if(!this.getAssignerElement().isEmpty()){
        //     oVal.assigner=this.getAssignerElement().valueOf();
        // }

        return oVal;
    }

}
