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
            this.myFamily=new String();
        }

        return this.myFamily;

    }

    set family(newValue){
        this.myFamily=newValue;
        return this;
    }

    get given(){
        if(!isValid(this.myGiven)){
            this.myGiven=new Array();
        }
        return this.myGiven;
    }

    set given(newValue){
        this.myGiven=newValue;
        return this;
    }

    get prefix(){
        if(!isValid(this.myPrefix)){
            this.myPrefix=new Array();
        }

        return this.myPrefix;

    }

    set prefix(newValue){
        this.myPrefix=newValue;
        return this;
    }

    get suffix(){
        if(!isValid(this.mySuffix)){
            this.mySuffix=new Array();
        }

        return this.mySuffix;

    }

    set suffix(newValue){
        this.mySuffix=newValue;
        return this;
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
                && isEmpty(this.family)
                && isEmpty(this.text)
                && this.period.isEmpty();
    }


    // /**
    //  * Adds an returns a new value for family if newVal undefined,
    //  * Adds an returns this if newValue is defined
    //  */
    // addFamily(newVal){
    //     if(isValid(newVal)){
    //         this.family.push(newVal);
    //         return this;
    //     }else{
    //         let oVal=new String();
    //         this.family.push(oVal);
    //         return oVal;
    //     }
    // }

    /**
     * Adds a given new value for family.
     * @param {*} newVal 
     */
    addGiven(newVal){
        if(isValid(newVal)){
            this.given.push(newVal);
            return this;
        }else{
            let oVal=new String();
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
            this.prefix.push(newVal);
            return this;
        }else{
            let oVal=new String();
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
            this.suffix.push(newVal);
            return this;
        }else{
            let oVal=new String();
            this.suffix.push(oVal);
            return oVal;
        }
    }

    // /**
    //  * Return first element for family array;
    //  */
    // getFamilyFirstRep(){
    //     return this.family[0];
    // }

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