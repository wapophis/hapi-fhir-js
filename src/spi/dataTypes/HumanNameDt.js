import {isUndefined,isValid,isEmptyArray,isEmpty,isString} from '../../utils/ValidationRules.js';
import FlattenAbleObject from '../FlattenAbleObject.js';
import _PeriodDt from './PeriodDt.js';
import StringDt from './StringDt.js';
import CodeDt from './CodeDt.js';
import NameUseEnum from '../valueSets/NameUseEnum.js';
import EXTENSIBLE from '../mixins/extensible.js';


export default class _HumanNameDt extends EXTENSIBLE (FlattenAbleObject){
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
        return this.getUseElement().value;
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
            this.setUseElement(code);
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

    /**
     * Return the raw value for the StringDt family Element
     */
    get family(){
        return this.getFamilyElement().valueOf();
    }

    /**
     * Returns the underliying family StringDt, empty if not exists
     */
    getFamilyElement(){
        if(!isValid(this.myFamily)){
            this.myFamily=new StringDt();
        }
        return this.myFamily;
    }


    /**
     * Setter method wich expect an string aka surname
     */
    set family(newValue){
        this.getFamilyElement().value=newValue;
    }

    /**
     *
     * @param {*} newValue Expect an StrinDt value or an string typeof object
     * @return StringDt element for the surname.
     */
    setFamilyElement(newValue){
        this.getFamilyElement().value=newValue.valueOf();
        return this;
    }



    /**
     *
     * @param {*} newValue StringDt array containing the family names
     * @private
     * @return this object
     */
    setFamily(newValue){
        this.myFamily=newValue;
        return this;
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


//// PREFIXES
    /**
     * Static setter to prefix array, all the contained objects will be StringDt before being flattened using valueOf
     */
    set prefix(newValue){
        if(!isEmptyArray(newValue) ){
            let oVal=new Set();
            for(let i=0;i<newValue.length;i++){
                oVal.add(new StringDt(newValue[i].valueOf()));
            }
            this.setPrefix(Array.from(oVal));
        }
        return this;
    }

    /**
     * Static setter to prefix array, returned values are flattened using valueOf
     */
    get prefix(){
        return this._flattenArray(this.getPrefix());
    }


    /**
     * Return first element for prefix array.
     */
    getPrefixFirstRep(){
        return this.getPrefix()[0];
    }

     /**
     *
     * @param {*} newVal Raw or StringDt object to set, returned the added object.
     */
    addPrefix(newVal){
        let oVal=new StringDt();
        if(isValid(newVal)){
            oVal.value=newVal.valueOf();
        }
        this.getPrefix();           // TODO: FIX THIS, NOT OPTIMAL, ONLY CALL FOR INITIALIZATION
        this._addSetUniqueElement(this.myPrefix,oVal);
        return oVal;
    }

    /**
     * Returns an StringDt set from prefixes
     */
    getPrefix(){
        if(!isValid(this.myPrefix)){
            this.myPrefix=new Set();
        }
        return this._transformSetToArrayCompat(this.myPrefix);
    }

    /**
     *
     * @param {*} newValue element from array must be StringDt object
     *
     */
    setPrefix(newValue){
        if(!Array.isArray(newValue)){
            throw new TypeError("Family field expect an Array");
        }
        for(let i=0;i<newValue.length;i++){
            if(newValue[i] instanceof StringDt===false){
                throw new TypeError("Family items in array must be StringDt objects");
            }else{
                this.getPrefix();
                this._addSetUniqueElement(this.myPrefix,newValue[i]);
            }
        }
        //this.myPrefix=newValue;
    }

    removePrefix(value){
        this.myPrefix.forEach((item)=>{
            if(item.valueOf===value.valueOf()){
                this.myPrefix.remove(item);
            }
        });
    }

//// SUFFIXES
    get suffix(){
        return this._flattenArray(this.getSuffix());
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
     * @param {*} newVal
     */
    addSuffix(newVal){
        let oVal=new StringDt();
        if(isValid(newVal)){
            oVal.value=newVal.valueOf();
        }
        this.getSuffix().push(oVal);
        return oVal;
    }

    /**
     * Returns the suffixes arrays ()
     */
    getSuffix(){
        if(!isValid(this.mySuffix)){
            this.mySuffix=new Array();
        }

        return this.mySuffix;

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


    /**
     * Return first element for suffix array.
     */
    getSuffixFirstRep(){
        return this.getSuffix()[0];
    }


///// PERIOD
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

//// COMMONS
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
    /*addFamily(newVal){
        if(isValid(newVal)){
            this.family.push(new StringDt(newVal.valueOf()));
            return this;
        }else{
            let oVal=new StringDt();
            this.family.push(oVal);
            return oVal;
        }
    }*/

    /**
     * Adds a given new value for family.
     * @param {*} newVal
     */
    addGiven(newVal){
        let newGivenName=new StringDt(newVal);
        this.getGiven().push(newVal);
        return newGivenName;
    }





    /**
     * Return first element for family array;
     */
   /* getFamilyFirstRep(){
        return this.family[0];
    } */

    /**
     * Return first element for given array.
     */
    getGivenFirstRep(){
        return this.getGiven()[0];
    }


    _flattenArray(array){
        let oVal=[];
        for(let i=0;i<array.length;i++){
            oVal.push(array[i].valueOf());
        }

        return oVal;
    }

    _transformSetToArrayCompat(set){
        let oVal=[];
        set.forEach((value)=>oVal.push(value));
        return oVal;
    }

    _addSetUniqueElement(toSet,element){
        let insert=true;
        if(toSet.size>0){
            toSet.forEach((item)=>{
                if(item.valueOf()===element.valueOf()){
                    insert=false;
                }
            });
        }
        if(insert===true){
            toSet.add(element);

      }
    }





}