import {isUndefined,isValid,isEmpty} from '../../utils/ValidationRules.js';
import ContactPointUseEnum from '../valueSets/ContactPointUseEnum.js';
import ContactPointSystemEnum from '../valueSets/ContactPointSystemEnum.js';
import PeriodDt from './PeriodDt.js';
import CodingDt from './CodingDt.js';
import StringDt from  './StringDt.js';

import FlattenAbleObject from '../FlattenAbleObject.js';

export default class _ContactPointDt extends FlattenAbleObject{

    /**
     * @constructor
     * @param {*} root  roob object to decorate
     */
    constructor(root){
        super();

        if(isValid(root)){
            this.system=root.system;
            this.value=root.value;
            this.use=root.use;
            this.rank=root.rank;
            this.period=root.period;
        }

    }

    _flatten(){
        let oVal=new Object();
        if(!this.getSystemElement().isEmpty()){
            oVal.system=this.system;
        }
        if(!this.getValueElement().isEmpty()){
            oVal.value=this.value;
        }

        if(!this.getUseElement().isEmpty()){
            oVal.use=this.use;
        }

        if(!this.getRankElement().isEmpty()){
            oVal.rank=this.rank;
        }

        if(!this.getPeriodElement().isEmpty()){
            oVal.period=this.period;
        }
        return oVal;
    }

    /**
     * @return Boolean indicating if the dataType is empty
     */
    isEmpty(){
        return this.getSystemElement().isEmpty()
        && this.getValueElement().isEmpty()
        && this.getUseElement().isEmpty()
        && this.getRankElement().isEmpty()
        && this.getPeriodElement().isEmpty();
    }

    /**
     * @return the value of the system
     */
    get system(){
        return this.getSystemElement().code.valueOf();
    }
    /**
     * @return {StringDt} with the element of the system.
     */
    getSystemElement(){
        if(!isValid(this.mySystem)){
            this.mySystem=new CodingDt();
        }
        return this.mySystem;
    }

    /**
     * @param {*} newValue with the de value to the system.
     *  It's replaces the current value element.
     */
    set system(newValue){
        if(isValid(newValue)){
            let code=ContactPointSystemEnum.getByCode(newValue);
            if(!code.isEmpty()){
                this.setSystemElement(code);
            }else{
                this.getSystemElement().code=newValue;
            }
        }
    }


    setSystemElement(newValue){
        if(newValue instanceof CodingDt===false){
            throw new TypeError("System field must be a CodingDt object");
        }

        this.mySystem=newValue;
        return this;
    }

    get value(){
        this.getValueElement().valueOf();
    }

    getValueElement(){
        if(!isValid(this.myValue)){
            this.myValue=new StringDt();
        }
        return this.myValue;
    }

    set value(newValue){
        this.getValueElement().value=newValue;
    }

    setValueElement(newValue){
        if(newValue instanceof StringDt===false){
            throw new TypeError("Value field must be a StringDt object");
        }
        this.myValue=newValue;
        return this;
    }

    get use(){
        return this.getUseElement().code.valueOf();
    }

    getUseElement(){
        if(!isValid(this.myUse)){
            this.myUse=new CodingDt();
        }
        return this.myUse;
    }

    set use(newValue){
        
        if(isValid(newValue)){
            let code=ContactPointUseEnum.getByCode(newValue);
            if(!code.isEmpty()){
                this.setUseElement(code);
            }else{
                this.getUseElement().code=newValue;
            }
        }
    }

    setUseElement(newValue){
        if(newValue instanceof CodingDt===false){
            throw new TypeError("Use field must be a CodingDt object");
        }
        this.myUse=newValue;
        return this;
    }

    get rank(){
        return this.getRankElement().valueOf();
    }
    getRankElement(){
        if(!isValid(this.myRank)){
            this.myRank=new StringDt();
        }
        return this.myRank;
    }

    set rank(newValue){
        this.getRankElement().value=newValue;
    }

    setRankElement(newValue){
        if(newValue instanceof StringDt===false){
            throw new TypeError("Rank field must be a StringDt object");
        }
        this.myRank=newValue;
        return this;
    }

    get period(){
        return this.getPeriodElement().valueOf();
    }

    getPeriodElement(){
        if(!isValid(this.myPeriod)){
            this.myPeriod=new PeriodDt();
        }
        return this.myPeriod;
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
}