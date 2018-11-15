
import {isValid,isEmpty} from '../../utils/ValidationRules.js';
import NarrativeStatusEnum from '../valueSets/NarrativeStatusEnum.js';

export default class Narrative extends Object{
    
       constructor(rootObject){
           debugger;
           super();
           
           if(isValid(rootObject)){
           this.div=rootObject.div;
           this.status=rootObject.status;
           }
       
    }


    isEmpty(){
        debugger;
        return isEmpty(this.status)
        && isEmpty(this.div);
    }

       get div(){
            if(!isValid(this.myDiv)){
                this.myDiv=new String();
            }
            return this.myDiv;
       }
       
       set div(newDiv){
            this.myDiv=newDiv;
            return this;
       }

       set status(newStatus){
        this.myStatus=newStatus;
        return this;
       }

       get status(){
        if(!isValid(this.myStatus)){
            this.myStatus=new String();
        }
        return NarrativeStatusEnum.getByValue(this.myStatus);
       }

        
    }