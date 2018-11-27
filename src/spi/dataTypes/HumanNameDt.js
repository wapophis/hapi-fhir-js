import {isUndefined,isValid,isEmptyArray,isEmpty} from '../../utils/ValidationRules.js';
import _PeriodDt from './PeriodDt.js';
import StringDt from './StringDt.js';
import CodingDt from './CodingDt.js';
import NameUseEnum from '../valueSets/NameUseEnum.js';


export default class _HumanNameDt extends Object{
    constructor(root){
        super();
        if(isValid(root)){
            this.use=root.use;
            this.text=root.text;
            this.family=root.family;
            this.given=root.given;
            this.prefix=root.prefix;
            this.suffix=root.suffix;
            this.period=root.period;
        }
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

    set use(newValue){
        if(isValid(newValue)){
            let code=NameUseEnum.getByCode(newValue);
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

    get text(){
        return this.getTextElement().valueOf();
    }

    getTextElement(){
        if(!isValid(this.myText)){
            this.myText=new StringDt();
        }
        return this.myText;
    }

    set text(newValue){
        this.getTextElement().value=newValue;
        return this;
    }

    /**
     * 
     * @param {*} newValue StringDt with the value for text
     */
    setTextElement(newValue){
        if(newValue  instanceof StringDt===false){
            throw new TypeError("Cannot set text field to a non StringDt object");
        }
        this.myText=newValue;
        return this;
    }



    get family(){
        if(!isValid(this.myFamily)){
            this.myFamily=new Array();
        }
        return this.myFamily;
    }


    /**
     * Setter method wich expect an string array containing all the family names.
     */
    set family(newValue){
        if(!isEmptyArray(newValue) ){
            let oVal=new Array();
            for(let i=0;i<newValue.length;i++){
                    oVal.push(new StringDt(newValue[i].valueOf()));
            }
            this.setFamily(oVal);
        }
        return this;
    }

    /**
     * 
     * @param {*} newValue StringDt array containing the family names
     * @private 
     * @return this object
     */
    setFamily(newValue){
        if(!Array.isArray(newValue)){
            throw new TypeError("Family field expect an Array");
        }
        for(let i=0;i<newValue.length;i++){
            if(newValue[i] instanceof StringDt===false){
                throw new TypeError("Family items in array must be StringDt objects");
            }
        }
        this.myFamily=newValue;
    }


    get given(){
        if(!isValid(this.myGiven)){
            this.myGiven=new Array();
        }
        return this.myGiven;
    }


    /**
     * Setter for the given parts of a name, expect an string array.
     */
    set given(newValue){
        if(!isEmptyArray(newValue) ){
            let oVal=new Array();
            for(let i=0;i<newValue.length;i++){
               
                oVal.push(new StringDt(newValue[i].valueOf()));
                
            }
            this.setGiven(oVal);
        }
        return this;
    }

    /**
     * 
     * @param {*} newValue 
     * @private 
     */
    setGiven(newValue){
        if(!Array.isArray(newValue)){
            throw new TypeError("Family field expect an Array");
        }
        for(let i=0;i<newValue.length;i++){
            if(newValue[i] instanceof StringDt===false){
                throw new TypeError("Family items in array must be StringDt objects");
            }
        }
        this.myGiven=newValue;
    }

    get prefix(){
        if(!isValid(this.myPrefix)){
            this.myPrefix=new Array();
        }

        return this.myPrefix;

    }

    /**
     * 
     * @param {*} newValue 
     *  
     */
    setPrefix(newValue){
        if(!Array.isArray(newValue)){
            throw new TypeError("Family field expect an Array");
        }
        for(let i=0;i<newValue.length;i++){
            if(newValue[i] instanceof StringDt===false){
                throw new TypeError("Family items in array must be StringDt objects");
            }
        }
        this.myPrefix=newValue;
    }

    set prefix(newValue){
        if(!isEmptyArray(newValue) ){
            let oVal=new Array();
            for(let i=0;i<newValue.length;i++){
               
                oVal.push(new StringDt(newValue[i].valueOf()));
                
            }
            this.setPrefix(oVal);
        }
        return this;
    }

    get suffix(){
        if(!isValid(this.mySuffix)){
            this.mySuffix=new Array();
        }

        return this.mySuffix;

    }

    set suffix(newValue){
        if(!isEmptyArray(newValue) ){
            let oVal=new Array();
            for(let i=0;i<newValue.length;i++){
               
                oVal.push(new StringDt(newValue[i].valueOf()));
                
            }
            this.setSuffix(oVal);
        }
        return this;
    }

     /**
     * 
     * @param {*} newValue 
     *  
     */
    setSuffix(newValue){
        if(!Array.isArray(newValue)){
            throw new TypeError("Family field expect an Array");
        }
        for(let i=0;i<newValue.length;i++){
            if(newValue[i] instanceof StringDt===false){
                throw new TypeError("Family items in array must be StringDt objects");
            }
        }
        this.mySuffix=newValue;
    }

    get period(){
        if(!isValid(this.myPeriod)){
            this.myPeriod=new _PeriodDt();
        }

        return this.myPeriod;
    }

    set period(newValue){
        this.myPeriod=newValue;
        return this;
    }

    isEmpty(){
        return isEmptyArray(this.given) 
                && isEmptyArray(this.prefix) 
                && isEmptyArray(this.suffix)
                && isEmptyArray(this.family)
                && this.getTextElement().isEmpty()
                && this.period.isEmpty();
    }

    /**
     * 
     * @param {*} newVal Object to store in an StringDt. Internally this method use newVal.valueOf() to flat
     * the object value.
     */
    addFamily(newVal){
        if(isValid(newVal)){
            this.family.push(new StringDt(newVal.valueOf()));
            return this;
        }else{
            let oVal=new StringDt();
            this.family.push(oVal);
            return oVal;
        }
    }

    /**
     * Adds a given new value for family.
     * @param {*} newVal 
     */
    addGiven(newVal){
        if(isValid(newVal)){
            this.given.push(new StringDt(newVal.valueOf()));
            return this;
        }else{
            let oVal=new StringDt();
            this.given.push(oVal);
            return oVal;
        }
    }



    /**
     * 
     * @param {*} newVal 
     */
    addPrefix(newVal){
        if(isValid(newVal)){
            this.prefix.push(new StringDt(newVal.valueOf()));
            return this;
        }else{
            let oVal=new StringDt();
            this.prefix.push(oVal);
            return oVal;
        }
    }


    /**
     * 
     * @param {*} newVal 
     */
    addSuffix(newVal){
        if(isValid(newVal)){
            this.suffix.push(new StringDt(newVal.valueOf()));
            return this;
        }else{
            let oVal=new StringDt();
            this.suffix.push(oVal);
            return oVal;
        }
    }

    /**
     * Return first element for family array;
     */
    getFamilyFirstRep(){
        return this.family[0];
    }

    /**
     * Return first element for given array.
     */
    getGivenFirstRep(){
        return this.given[0];
    }

    /**
     * Return first element for suffix array.
     */
    getSuffixFirstRep(){
        return this.suffix[0];
    }

    /**
     * Return first element for prefix array.
     */
    getPreffixFirstRep(){
        return this.prefix[0];
    }



}