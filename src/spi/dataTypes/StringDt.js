import {isValid,isEmpty} from '../../utils/ValidationRules.js';
import FlattenAbleObject from '../FlattenAbleObject.js';


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
        if(isValid(newValue)){
            this.myCoercedValue=newValue.valueOf();
            if(isValid(this.myCoercedValue)){
                this.isUndefined=false;
            }
            return this;
        }else{
            this.isUndefined=true;
            this.myCoercedValue=null;
        }
    }

    get value(){
        if(this.isEmpty()){
            this.myCoercedValue=new String();
        }
        return this.valueOf();
    }

    isEmpty(){
        return this.isUndefined || (isValid(this.myCoercedValue) && isEmpty(this.myCoercedValue));
    }

    toString(){
        if(this.isEmpty()){
            return null;
        }else{
            return this.myCoercedValue.toString();
        }
    }

    equals(object){
        return this.myCoercedValue===object.toString();
    }

    valueOf(){
        return this.toString();
    }
    [Symbol.toPrimitive](hint){
        switch(hint){
            case 'string':{
                return this.toString();
            }

            case `boolean`:{
                return this.isEmpty();
            }
            default:
                return this.toString();
        }
    }

};
