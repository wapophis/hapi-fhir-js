import {isValid} from '../../utils/ValidationRules.js';

export default class StringDt extends Object{


    constructor(value){
        super();
        this.isUndefined=true;
        
        if(isValid(value)){
            this.myCoercedValue=value.toString();
            this.isUndefined=false;
        }
    }

    set value(newValue){
        this.myCoercedValue=newValue;
        if(isValid(this.myCoercedValue)){
            this.isUndefined=false;
        }
        return this;
    }

    get value(){
        if(this.isEmpty()){
            this.myCoercedValue=new String();
        }
        return this.myCoercedValue;
    }

    isEmpty(){
        return this.isUndefined;
    }

    toString(){
        if(this.isEmpty()){
            return null;
        }else{
            return this.myCoercedValue;
        }
    }

    equals(object){
        return this.myCoercedValue===object.toString();
    }

}