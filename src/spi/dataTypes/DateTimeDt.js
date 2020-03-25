import FlattenAbleObject from '../FlattenAbleObject.js';
import {isValid} from '../../utils/ValidationRules.js';

export default class _DateTimeDt extends FlattenAbleObject{

  constructor(root){
    super(root);

    if(isValid(root)){
        this.dateTime=root;
    }
  }

  get dateTime(){
    return this.getDateTimeElement().valueOf();
  }

  set dateTime(newValue){
    if(isValid(newValue)){
      this.setDateTimeElement(new Date(newValue))
    }
    return this;
  }

  getDateTimeElement(){
    if(!isValid(this.myDateTime)){
      this.myDateTime=new Date();
      this.isUndefined=true;
    }
    return this.myDateTime;
  }

  setDateTimeElement(newValue){
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