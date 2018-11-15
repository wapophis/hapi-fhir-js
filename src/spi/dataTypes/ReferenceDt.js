import {isUndefined,isValid,isEmpty} from '../../utils/ValidationRules.js';
import IdentifierDt from './IdentifierDt.js';

export default class PeriodDt extends Object{

    constructor(root){
        super();
        if(isValid(root)){
            this.reference=root.reference;
            this.display=root.display;
            this.identifier=root.identifier;
        }
    }


    isEmpty(){
        return isEmpty(this.reference)
        && this.identifier.isEmpty()
        && isEmpty(this.display); 
    }

    get reference(){
        if(!isValid(this.myReference)){
            this.myReference=new String();
        }
        return this.myReference;
    }
    set reference(newValue){
        this.myReference=newValue;
        return this;
    }

    get identifier(){
        if(!isValid(this.myIdentifier)){
            this.myIdentifier=new IdentifierDt();
        }
        return this.myIdentifier;
    }

    set identifier(newValue){
        this.myIdentifier=newValue;
        return this;
    }

    get display(){
    if(!isValid(this.myDisplay)){
            this.myDisplay=new String();
        }
        return this.myDisplay;
    }
    set display(newValue){
        this.myDisplay=newValue;
        return this;
    }


}
