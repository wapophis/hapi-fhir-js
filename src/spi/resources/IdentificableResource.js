import DomainResource from '../DomainResource.js';
import {isUndefined,isValid,isEmpty,isEmptyArray,isEmptyDate} from '../../utils/ValidationRules.js';

export default class IdentificableResource extends DomainResource{
  constructor(root){
    console.log("DomainResource:constructor");
    super(root);

    if(isValid(root)){
        this.identifier=root.identifier;
    }
  }

  get identifier(){

    if(!isValid(this.myIdentifier)){
        this.myIdentifier=new Array();
    }else{

        for(let i=0;i<this.myIdentifier.length;i++){
            if(!this.myIdentifier[i] instanceof IdentifierDt){
                this.myIdentifier[i]=new IdentifierDt(this.myIdentifier[i]);
            }
        }

    }
    return this.myIdentifier;
  }

  set identifier(newValue){
    this.myIdentifier=newValue;
    return this;
  }

  getIdentifier(){
    return this.identifier;
  }

  addIdentifier(newValue){
    if(!isValid(newValue)){
        let oVal=new IdentifierDt();
        this.identifier.push(oVal);
        return oVal;
    }
    this.identifier.push(newValue);
    return this;
  }

  /**
  * @return:The first repetition of repeating field identifier, creating it if it does not already exist
  */
  getIdentifierFirstRep(){
    if(isValid(this.myIdentifier[0])){
        return this.identifier[0];
    }else{
        return this.addIdentifier();
    }
  }

  hasIdentifier(){
    for(let i=0;i<this.identifier.length;i++){

        if(!this.identifier[i].isEmpty()){
            return true;
        }
    }
    return false;
  }
}