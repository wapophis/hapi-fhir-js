import {isUndefined,isValid,isEmptyDate} from '../../utils/ValidationRules.js';

export default class _PeriodDt extends Object{

    constructor(root){
        super();
        if(isValid(root)){
            this.start=root.start;
            this.end=root.end;
        }
    }

    get start(){
        if(!isValid(this.myStart)){
            this.myStart=new Date(0,0,0);
        }
        return this.myStart;
    }

    set start(newValue){
        if(newValue instanceof Date===true){
            this.setStartDate(newValue);
        }else{
            this.setStartDate(isValid(newValue)?new Date(newValue.toString()):new Date(0,0,0));
        }
    }

    setStartDate(newValue){
        if(newValue instanceof Date===false){
            throw new TypeError("StartDate must be a Date object");
        }else{
            this.myStart=newValue;
        }
        return this;
    }

    get end(){
        if(!isValid(this.myEnd)){
            this.myEnd=new Date(0,0,0);
        }
        return this.myEnd;
    }

    set end(newValue){
        if(newValue instanceof Date===true){
            this.setEndDate(newValue);
        }else{
            this.setEndDate(isValid(newValue)?new Date(newValue.toString()):new Date(0,0,0));
        }
    }


    setEndDate(newValue){
        if(newValue instanceof Date===false){
            throw new TypeError("StartDate must be a Date object");
        }else{
            this.myEnd=newValue;
        }
        return this;
    }

    isEmpty(){
        return this.start.getTime()===new Date(0,0,0).getTime() && this.end.getTime()===new Date(0,0,0).getTime();
    }

    equals(other){
        return (other instanceof _PeriodDt) && this.start.getTime()===other.start.getTime()
        && this.end.getTime()===other.end.getTime();
    }


    valueOf(){
        let oVal=new Object();
        
        if(!isEmptyDate(this.start)){
         oVal.start=this.start;
        }

        if(!isEmptyDate(this.end)){
            oVal.end=this.end;
           }

        return oVal;
     }

};