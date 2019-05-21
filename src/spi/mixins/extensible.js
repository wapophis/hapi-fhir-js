import {isUndefined,isValid,isEmptyArray,isEmpty,isString} from '../../utils/ValidationRules.js';
import ExtensionDt from '../dataTypes/ExtensionDt.js';



export default SuperClass=> class extends SuperClass{
  constructor(){
    super();
    this.myExtensions=new Array();
  }

  /**
   * Return the flatten version of the array of extensions
   */
  get extension(){
    return this._flattenArray(this.getExtension());
  }

  /**
   * Returning the array of extesion elements.
   */
  getExtension(){
    if(!isValid(this.myExtensions)){
      this.myExtensions=new Array();
    }
    return this.myExtensions;
  }

  /**
   *
   * @param {_ExtensionDt} extension  adds an ExtensionDt element to the object
   */
  addExtension(extension){
    if(!isValid(extension)){
      this.myExtensions.push(new ExtensionDt());
    }
    if(extension instanceof ExtensionDt===false){
      throw TypeError("Cannot add a non ExtensionDt object");
    }else{
      this.myExtensions.push(extension);
    }
    return this.myExtensions[this.myExtensions.length-1];
  }

  /**
   *
   * @param {_ExtensionDt} extension removes all the extensions registered with same uri and value
   */
  removeExtension(extension){
      for(let i=this.getExtension().length-1;i>=0;i--){
        if(this.getExtension()[i]===extension)
          {
            this.getExtension(i,1);
          }
      }
      return this;
  }

  /**
   *
   * @param {String} uriValue return all the extesions idenfiied by an uri string value as array
   */
  getExtensionByUri(uriValue){
    let oVal=new Array();
    for(let i=0;i<this.getExtension().length;i++){
      if(this.getExtension()[i].uri===uriValue)
        {
          oVal.push(this.getExtension()[i]);
        }
    }
    return oVal;
  }


    /**
   *
   * @param {String} uriValue return all the extesions idenfiied by an uri string value as array
   */
  getExtensionValuesByUri(uriValue){
    let oVal=new Array();
    let elements=this.getExtensionByUri(uriValue);
    for(let i=0;i<elements.length;i++){
      oVal.push(elements[i][elements[i].valuePropName]);
    }
    return oVal;
  }



  _flattenArray(array){
    let oVal=new Array();
    for(let i=0;i<array.length;i++){
        oVal.push(array[i].valueOf());
    }

    return oVal;
}


}

