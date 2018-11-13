import {isUndefined,isValid} from '../utils/ValidationRules.js';
import {CodingDt} from './CodingDt.js';

export default class CodeableConceptDt extends Object{
    constructor(root){
        super();

        if(isValid(root)){
            this.coding=root.coding;
            this.text=root.text;
        }

    }

    get coding(){
        if(!isValid(this.myCoding)){
            this.myCoding=new Array();
        }
        return this.myCoding;
    }

    set coding(newVal){
        this.myCoding=newVal;
        return this;
    }

    addCoding(newValue){
        if(isValid(newValue)){
            this.coding.push(newValue);
        }else{
            this.coding.push(new CodingDt());
        }
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
        if(!isValid(this.myText)){
            this.myText=new String();
        }

        return this.myText;

    }

    set text(newVal){
        this.myText=newVal;
        return this;
    }
}
