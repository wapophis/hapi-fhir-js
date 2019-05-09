import {isUndefined,isValid,isEmptyArray,isEmpty} from '../../utils/ValidationRules.js';
import FlattenAbleObject from '../FlattenAbleObject.js';
import _PeriodDt from './PeriodDt.js';
import StringDt from './StringDt.js';
import CodeDt from './CodeDt.js';
import NameUseEnum from '../valueSets/NameUseEnum.js';


export default class _HumanNameDt extends FlattenAbleObject{
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
    _flatten(){
        let oVal=new Object();
        if(!this.getUseElement().isEmpty()){
            oVal.use=this.use;
        }
        if(!this.getTextElement().isEmpty()){
            oVal.text=this.text;
        }
        if(!isEmptyArray(this.family)){
            oVal.family=this.family;
        }
            
        if(!isEmptyArray(this.given)){
            oVal.given=this.given;
        }
        if(!isEmptyArray(this.prefix)){
            oVal.prefix=this.prefix;
        }
        if(!isEmptyArray(this.suffix)){
            oVal.suffix=this.suffix;
        }
        if(!this.getPeriodElement().isEmpty()){
            oVal.period=this.period;
        }

        return oVal;º
    }

    get use(){
        return this.getUseElement().code.valueOf();
    }

    getUseElement(){
        if(!isValid(this.myUse)){
            this.myUse=new CodeDt();
        }
        return this.myUse;
    }

    set use(newValue){ 
        if(isValid(newValue)){
            let code=NameUseEnum.getByCode(newValue);
            if(!code.isEmpty()){
                this.setUseElement(new CodeDt(code.code));
            }else{
                this.getUseElement().value=newValue;
            }
        }
    }

    setUseElement(newValue){
        if(newValue instanceof CodeDt===false){
            throw new TypeError("Use field must be a CodeDt object");
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
        return this._flattenArray(this.getFamily());
    }

    getFamily(){
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
        return this._flattenArray(this.getGiven());
    }

    getGiven(){
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
        return this._flattenArray(this.getPrefix());
    }

    getPrefix(){
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
        return this._flattenArray(this.getSuffix());
    }

    getSuffix(){
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
        return this.getPeriodElement().valueOf();
    }

    getPeriodElement(){
        if(!isValid(this.myPeriod)){
            this.myPeriod=new _PeriodDt();
        }

        return this.myPeriod;
    }

    set period(newValue){
        return this.setPeriodElement(new _PeriodDt(newValue));
    }

    setPeriodElement(newValue){
        if(newValue instanceof _PeriodDt===false){
            throw new TypeError("Period expects a periodDt object");
        }

        this.myPeriod=newValue;
        return this;
    }


    isEmpty(){
        return isEmptyArray(this.given) 
                && isEmptyArray(this.prefix) 
                && isEmptyArray(this.suffix)
                && isEmptyArray(this.family)
                && this.getTextElement().isEmpty()
                && this.getPeriodElement().isEmpty();
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

    _flattenArray(array){
        let oVal=new Array();
        for(let i=0;i<array.length;i++){
            oVal.push(array[i].valueOf());
        }

        return oVal;
    }



 
}