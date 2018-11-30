import {isUndefined,isValid,isEmpty,isEmptyArray} from '../../utils/ValidationRules.js';
import CodingDt from './CodingDt.js';
import StringDt from './StringDt.js';
import FlattenAbleObject from '../FlattenAbleObject.js';
export default class _CodeableConceptDt extends FlattenAbleObject{
    constructor(root){
        super();

        if(isValid(root)){
            this.coding=root.coding;
            this.text=root.text;
        }

    }

    get coding(){
        let oVal=new Array();
        for(let i=0;i<this.getCodingElement().length;i++){
            oVal.push(this.myCoding[i].valueOf());
        }
        return oVal;  
    }

    getCodingElement(){
        if(!isValid(this.myCoding)){
            this.myCoding=new Array();
        }
        return this.myCoding;
    }

    set coding(newVal){
        if(!isEmptyArray(newVal)){
            let oVal=new Array();
            for(let i=0;i<newVal.length;i++){
                oVal.push(new CodingDt(newVal[i]));
            }
            this.setCodingElement(oVal);
        }
        return this;
    }

    /**
     * 
     * @param {*} newValue CodingDt Array expected
     */
    setCodingElement(newValue){
        for(let i=0;i<newValue.length;i++){
            if(newValue[i] instanceof CodingDt===false){
                throw new TypeError("Expected a codingDt array at "+i);
            }
        }
        this.myCoding=newValue;
        return this;
    }

    addCoding(newValue){
        if(!isValid(newValue)){
            let oVal=new CodingDt();
            this.getCodingElement().push(oVal);
            return oVal;
        }

        if(newValue instanceof CodingDt===false){
            throw new TypeError("AddCoding requires a CodingDt object");
        }

        this.getCodingElement().push(newValue);
        return this;
    }

    getCodingFirstRep(){
        if(this.coding.length<=0){
            this.addCoding();
        }
        if(typeof this.coding[0]!=='codingdt'){
            this.coding[0]=new CodingDt(this.coding[0]);
        }
        return this.coding[0];
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

    set text(newVal){
        this.getTextElement().value=newVal;
        return this;
    }

    isEmpty(){
        return isEmptyArray(this.coding) && this.getTextElement().isEmpty();
    }

    _flatten(){
        let oVal=new Object();

        if(!isEmptyArray(this.getCodingElement())){
            oVal.coding=this.coding;
        }

        if(!this.getTextElement().isEmpty()){
            oVal.text=this.text;
        }


        return oVal;
    }
}
