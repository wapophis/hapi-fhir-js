import _BackBoneElement from "../resources/BackBoneElement";
import ResourceMixin from "../mixins/ResourceMixin.js";
import _CodingDt from "./CodingDt";

export default class _UsageContextMdT extends ResourceMixin( _BackBoneElement){

  /**
   * @constructor
   * @param {*} root  roob object to decorate
   */
  constructor(root){
      super();

      if(isValid(root)){
          this.code=root.code;
      }

  }
  get code(){
    return this.getterDataTypeElement("myCode",_CodingDt).valueOf();
  }

  set code(newValue){
    this.setterDataTypeElement("myCode",_CodingDt,newValue);
    return this;
  }


}