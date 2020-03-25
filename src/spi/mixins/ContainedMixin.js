import { isValid } from "../../utils/ValidationRules";
import Patient from  "../resources/Patient";

const ContainedMixin =  SuperClass=> class extends SuperClass{
  constructor(root){
    super(root);
    if(isValid(root)){
      // FHIR RESOURCE IS SETTING THIS FIELD.
      // TODO REMOVE THE EXTERNAL ASS
//      this.contained=root.contained;
    }
  }
  get contained(){
    let oVal=new Array();
    this.getContainedElement().forEach(element=>{
        oVal.push(element.valueOf());
    })
    return oVal;
  }

  getContainedResourceByReference(reference){
    let oVal=null;
    this.getContainedElement().forEach(contained=>{
      if(reference.reference==="#"+contained.id){
        oVal=contained;
      }
    });
    return oVal;
  }

  getContainedElement(){
    if(!isValid(this.myContained)){
      this.myContained=new Array();
    }
    return this.myContained;
  }

  set contained(newValue){
    if(isValid(newValue)){
      this.setContainedElement(newValue);
    }
    return this;
  }

  setContainedElement(newValue){
    newValue.forEach(element => {
      let detectedType=false;
      if(isValid(element.resourceType) && element.resourceType==='Patient'){
        this.getContainedElement().push(new Patient(element));
        detectedType=true;
      }

      if(!detectedType){
        this.getContainedElement().push(element);
      }

    });
  }
}
export default ContainedMixin;