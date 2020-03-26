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
      throw TypeError("Invalid expected datatype");
    }
    this[innerField]=newValue;
    return this[innerField];
  }

  __beforeSetterDataTypeArrayElement(innterField,clazz,newValue){
    newValue.forEach(value=>{
      if(value instanceof clazz===false){
        this.appendDataTypeArrayElement(new clazz(value));
      }else{
        this.appendDataTypeArrayElement(value);
      }
    });
  }

  setterDataTypeArrayElement(innerField,clazz,newValue){
        this.__beforeSetterDataTypeArrayElement(innerField,clazz,newValue);
        return this;
  }

  getterDataTypeArrayElement(innerField,clazz){
    if(!isValid(this[innerField])){
      this[innerField]=new Array();
    }
    return this[innerField];
  }

  appendDataTypeArrayElement(innerField,clazz,newValue){
    if(newValue instanceof clazz===false){
      throw new TypeError("Invalid expected datatype")
     }
     this.getterDataTypeArrayElement(innerField,clazz).push(newValue);
     return newValue;
  }


}

export default ResourceMixin;