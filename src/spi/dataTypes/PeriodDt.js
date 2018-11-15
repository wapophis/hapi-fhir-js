import {isUndefined,isValid} from '../../utils/ValidationRules.js';

export default class PeriodDt extends Object{

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
        this.myStart=newValue;
        return this;
    }

    get end(){
        if(!isValid(this.myEnd)){
            this.myEnd=new Date(0,0,0);
        }
        return this.myEnd;
    }

    set end(newValue){
        this.myEnd=newValue;
        return this;
    }

    isEmpty(){
        return this.start.getTime()===new Date(0,0,0).getTime() && this.end.getTime()===new Date(0,0,0).getTime();
    }

    equals(other){
        return (other instanceof PeriodDt) && this.start.getTime()===other.start.getTime()
        && this.end.getTime()===other.end.getTime();
    }

};