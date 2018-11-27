import {isUndefined,isValid,isEmpty} from '../../utils/ValidationRules.js';
import _IdentifierDt from './IdentifierDt.js';
import StringDt from './StringDt.js';

export default class _ReferenceDt extends Object{

    constructor(root){
        super();
        if(isValid(root)){
            this.reference=root.reference;
            this.display=root.display;
            this.identifier=root.identifier;
        }
    }


    isEmpty(){
        return this.getReferenceElement().isEmpty()
        && this.getIdentifierElement().isEmpty()
        && this.getDisplayElement().isEmpty(); 
    }

    get reference(){
        return this.getReferenceElement().valueOf();
    }

    getReferenceElement(){
        if(!isValid(this.myReference)){
            this.myReference=new StringDt();
        }
        return this.myReference;
    }

    set reference(newValue){
        this.getReferenceElement().value=newValue;
        return this;
    }

    setReferenceElement(newValue){
        if(newValue instanceof StringDt===false){
            throw new TypeError("Reference field expect an StringDt object");
        }
        this.myReference=newValue;
        return this;
    }

    get identifier(){
        return this.getIdentifierElement().valueOf();
    }
    getIdentifierElement(){
        if(!isValid(this.myIdentifier)){
            this.myIdentifier=new _IdentifierDt();
        }
        return this.myIdentifier;
    }

    set identifier(newValue){
        return this.setIdentifierElement(new _IdentifierDt(newValue));
    }

    setIdentifierElement(newValue){
        if(newValue instanceof _IdentifierDt===false){
            throw new TypeError("Identifier field expect an IdentifierDt object");
        }
        this.myIdentifier=newValue;
        return this;
    }

    get display(){
        return this.getDisplayElement().valueOf();
    }
    getDisplayElement(){
        if(!isValid(this.myDisplay)){
            this.myDisplay=new StringDt();
        }
        return this.myDisplay;
    }

    set display(newValue){
        this.getDisplayElement().value=newValue;
        return this;
    }

    setDisplayElement(newValue){
        if(newValue instanceof StringDt===false){
            throw new TypeError("Display field expect an StringDt object");
        }
        this.myDisplay=newValue;
        return this;
    }

    valueOf(){
        let oVal=new Object();

        if(!this.getDisplayElement().isEmpty()){
            oVal.display=this.getDisplayElement().valueOf();
        }

        if(!this.getIdentifierElement().isEmpty()){
            oVal.identifier=this.getIdentifierElement()._flatten();
            
        }

        if(!this.getReferenceElement().isEmpty()){
            oVal.reference=this.getReferenceElement().valueOf();
        }
        return oVal;
    }


}
