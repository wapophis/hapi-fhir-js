import FlattenAbleObject from '../FlattenAbleObject.js';
import {isValid} from '../../utils/ValidationRules.js';

export default class _DateDt extends FlattenAbleObject{

  constructor(root){
    super(root);

    if(isValid(root)){
        this.date=root;
    }
  }

  get dateTime(){
    return this.getDateElement().valueOf();
  }

  set dateTime(newValue){
    if(isValid(newValue)){
      this.setDateElement(new Date(newValue))
    }
    return this;
  }

  getDateElement(){
    if(!isValid(this.myDateTime)){
      this.myDateTime=new Date();
      this.isUndefined=true;
    }
    return this.myDateTime;
  }

  setDateElement(newValue){
    if(newValue instanceof Date===false){
      throw new TypeError("Date expected");
    }
    this.myDateTime=newValue;
    return this;
  }

  isEmpty(){
    return this.isUndefined;
  }

  _flatten(){
    return new Intl.DateTimeFormat('en-GB').format(this.myDateTime);
  }




}