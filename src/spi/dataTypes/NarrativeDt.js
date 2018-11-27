
import {isValid,isEmpty} from '../../utils/ValidationRules.js';
import NarrativeStatusEnum from '../valueSets/NarrativeStatusEnum.js';
import StringDt from './StringDt.js';
import CodingDt from './CodingDt.js';


export default class _NarrativeDt extends Object{
    
       constructor(rootObject){
           super();
           if(isValid(rootObject)){
           this.div=rootObject.div;
           this.status=rootObject.status;
           }
       
    }


    isEmpty(){

        return true
        && this.getStatusElement().isEmpty()
        && this.getDivElement().isEmpty();
    }

    
    getDivElement(){
        if(!isValid(this.myDiv)){
            this.myDiv=new StringDt();
        }
        return this.myDiv;
    }
    
    get div(){
        return this.getDivElement().valueOf();
    }
    set div(newDiv){
        this.getDivElement().value=newDiv;
        return this;
    }

    setDivElement(newValue){
        if(newValue instanceof StringDt===false){
            throw new TypeError("Div field expects an StringDt object");
        }
        this.myDiv=newValue;
    }

    set status(newValue){
    if(isValid(newValue)){
        let code=NarrativeStatusEnum.getByCode(newValue);
        if(!code.isEmpty()){
            this.setStatusElement(code);
        }else{
            this.getUseElement().code=newValue;
        }
    }
    }



    get status(){
        return this.getStatusElement().code.valueOf();
    }

    getStatusElement(){
    if(!isValid(this.myStatus)){
        this.myStatus=new CodingDt();
    }
    return this.myStatus;
    }

    setStatusElement(newValue){
        if(newValue instanceof CodingDt===false){
            throw new TypeError("Status expects a CodingDt object");
        }
        this.myStatus=newValue;
        return this;
    }


    valueOf()
    {
    return this._flatten();
    }

    _flatten(){
        let oVal=new Object();
        if(!this.getDivElement().isEmpty()){
            oVal.div=this.getDivElement().valueOf();
        }

        if(!this.getStatusElement().isEmpty()){
        oVal.status=this.getStatusElement().code.valueOf();
        }

        return oVal;

    }

        
    }