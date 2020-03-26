import { isValid } from "../../utils/ValidationRules";


const ResourceMixin =  SuperClass=> class extends SuperClass{
  constructor(root){
    super(root);
  }

  getterDataTypeElement(innerField,clazz){
    if(!isValid(this[innerField])){
      this[innerField]=new clazz();
    }
    return this.mySource;
  }

  __beforeSetter(clazz,newValue){
    let transformedToDataType=null;
    if(isValid(newValue)){
      transformedToDataType=new clazz(newValue);
      }
    return transformedToDataType;
  }

  setterDataTypeElement(innerField,clazz,newValue){
    newValue=this.__beforeSetter(clazz,newValue);

    if(newValue instanceof clazz===false){
      throw TypeError("ReferenceDt expected");
    }
    this[innerField]=newValue;
    return this[innerField];
  }


}

export default ResourceMixin;