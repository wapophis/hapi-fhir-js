
import {isValid,isEmpty} from '../../utils/ValidationRules.js';

export const NarrativeDt= class Narrative extends Object{
    
       constructor(rootObject){
           super();
           
           if(isValid(rootObject)){
           this.div=rootObject.div;
           this.status=rootObject.status;
           }
       
    }


       get div(){
            if(!isValid(this.myDiv)){
                this.myDiv=new String();
            }
            return this.myDiv;
       }
       
       set div(newDiv){
            if(isValid(this.myDiv) && isValid(newDiv)){
                this.myDiv=newDiv;
            }
            return this;
       }

       set status(newStatus){
        if(isValid(this.myStatus) && isValid(newStatus)){
            this.myStatus=newStatus;
        }
        return this;
       }

       get status(){
        if(!isValid(this.myStatus)){
            this.myStatus=new String();
        }
        return this.myStatus;
       }


       isEmpty(){
           return isEmpty(this.status)
           && isEmpty(this.div);
       }
        
    }