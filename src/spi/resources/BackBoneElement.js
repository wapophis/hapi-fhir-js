import {isUndefined,isValid} from '../../utils/ValidationRules.js';
import FlattenAbleObject from '../FlattenAbleObject.js';
import StringDt from '../dataTypes/StringDt.js';
import CodeableConceptDt from '../dataTypes/CodeableConceptDt.js';
import CodingDt from '../dataTypes/CodingDt.js';
import PeriodDt from '../dataTypes/PeriodDt.js';
import IdentifierDt from '../dataTypes/IdentifierDt.js';
import HumanNameDt from '../dataTypes/HumanNameDt.js';
import BooleanDt from '../dataTypes/BooleanDt.js';
import AddressDt from '../dataTypes/AddressDt.js';
import ContactPointDt from '../dataTypes/ContactPointDt.js';
import ReferenceDt from '../dataTypes/ReferenceDt.js';
import _BooleanDt from '../dataTypes/BooleanDt.js';
import _CodingDt from '../dataTypes/CodingDt.js';
import _ReferenceDt from '../dataTypes/ReferenceDt.js';


/**
 * Created by lucho 15-11-2018
 * @param {*} root
 */

export default class _BackBoneElement extends FlattenAbleObject{

    constructor(root){
        super(root);
        this.valuePropName=null;
        this.valuePropVar=null;
        if(isValid(root)){
            for(let propName in root){
                if(isValid(root[propName])){
                    this[propName]=root[propName];
                }
            }

        }
    }

    /**
     *
     * @param {*} newValue extesion field to add. It will perform a flatten for all
     * the known types.
     */
    put(newValue){
        if(this.valuePropName==="valueUrl"){
            this.myValueUrl=newValue;
            this.valuePropVar="myValueUrl";

            return this;
        }

        if(this.valuePropName==="valueString"){
            this.myValueString=newValue;
            this.valuePropVar="myValueString";
            return this;
        }

        if(this.valuePropName==="valueCodeableConcept"){
            this.myValueCodeableConcept=newValue;
            this.valuePropVar="myValueCodeableConcept";
            return this;
        }

        if(this.valuePropName==="valueCoding"){
            this.myValueCoding=newValue;
            this.valuePropVar="myValueCoding";

            return this;
        }

        if(this.valuePropName==="valuePeriod"){
            this.myValuePeriod=newValue;
            this.valuePropVar="myValuePeriod";

            return this;
        }

        if( this.valuePropName==="valueIdentifier"){
            this.myValueIdentifier=newValue;
            this.valuePropVar="myValueIdentifier";

            return this;
        }

        if(this.valuePropName==="valueHumanName"){
            this.myValueHumanName=newValue;
            this.valuePropVar="myValueHumanName";

            return this;
        }

        if(this.valuePropName==="valueBoolean"){
            this.myValueBoolean=newValue;
            this.valuePropVar="myValueBoolean";
            return this;
        }

        if(this.valuePropName==="valueAddress"){
            this.myValueAddress=newValue;
            this.valuePropVar="myValueAddress";

            return this;
        }

        if(this.valuePropName==="valueContactPoint"){
            this.myValueContactPoint=newValue;
            this.valuePropVar="myValueContactPoint";

            return this;
        }

        if( this.valuePropName==="valueReference"){
            this.myValueReference=newValue;
            this.valuePropVar="myValueReference";

            return this;
        }

        if( this.valuePropName==="valueDate"){
            this.myValueDate=new StringDt(newValue);
            this.valuePropVar="myValueDate";
            return this;
        }

        if( this.valuePropName==="valueTime"){
            this.myValueTime=new StringDt(newValue);
            this.valuePropVar="myValueTime";

            return this;
        }

        if( this.valuePropName==="valueDateTime"){
            this.myValueDateTime=new StringDt(newValue);
            this.valuePropVar="myValueDateTime";

            return this;
        }

        if(this.valuePropName==="valueInteger"){
            this.myValueInteger=newValue;
            this.valuePropVar="myValueInteger";

            return this;
        }

        if(this.valuePropName==="valueDecimal"){
            this.myValueDecimal=newValue;
            this.valuePropVar="myValueDecimal";

            return this;
        }
    }

    get uri(){
        return this.myUriValue;
    }

    set uri(newUriValue){
        this.myUriValue=newUriValue;
    }

    get value(){
        return this[this.valuePropVar].valueOf();
    }

    set value(newValue){
        this.valuePropName=null;
        this.put(newValue);
    }

    set valueBoolean(newValue){
        this.valuePropName="valueBoolean";
        this.put(new _BooleanDt(newValue));
        return this;
    }
    get valueBoolean(){
        return this.myValueBoolean.valueOf();
    }
    set valueDecimal(newValue){
        this.valuePropName="valueDecimal";
        this.put(newValue);
        return this;
    }get valueDecimal(){
        return this.myValueDecimal.valueOf();
    }

    set valueInteger(newValue){
        this.valuePropName="valueInteger";
        this.put(newValue);
        return this;
    }
    get valueInteger(){
        return this.myValueInteger.valueOf();
    }
    set valueDate(newValue){
        this.valuePropName="valueDate";
        this.put(newValue);
        return this;
    }
    get valueDate(){
        return this.myValueDate.valueOf();
    }
    set valueDateTime(newValue){
        this.valuePropName="valueDateTime";
        this.put(new DateTime(newValue));
        return this;
    }
    get valueDateTime(){
        return this.myValueDateTime.valueOf();
    }
    set valueTime(newValue){
        this.valuePropName="valueTime";
        this.put(newValue);
        return this;
    }get valueTime(){
        return this.myValueTime.valueOf();
    }
    set valueString(newValue){
        this.valuePropName="valueString";
        this.put(new StringDt(newValue));
        return this;
    } get valueString(){
        return this.myValueString.valueOf();
    }
    set valueUri(newValue){
        this.valuePropName="valueUri";
        this.put(newValue);
        return this;
    }
    get valueUri(){
        return this.myValueUrl.valueOf();
    }
    set valueAttachment(newValue){
        this.valuePropName="valueAttachment";
        throw TypeError("NOT IMPLEMENTED YET");
        this.put(newValue);
        return this;

    }
    get valueAttachment(){
        throw TypeError("NOT IMPLEMENTED YET");
        return this[this.valuePropName].valueOf();
    }
    set valueCoding(newValue){
        this.valuePropName="valueCoding";
        this.put(new _CodingDt(newValue));
        return this;
    }
      get valueCoding(){
        return this.myValueCoding.valueOf();
    }
    set valueQuantity(newValue){
        this.valuePropName="valueQuantity";
        throw TypeError("NOT IMPLEMENTED YET");
        this.put(newValue);
        return this;
    }
    get valueQuantity(){
        throw TypeError("NOT IMPLEMENTED YET");
        return this[this.valuePropName].valueOf();
    }

    set valueReference(newValue){
        this.valuePropName="valueReference";
        this.put(new _ReferenceDt(newValue));
        return this;
    }
    get valueReference(){
        return this.myValueReference.valueOf();
    }



    _flatten(){
        let oVal={};
        oVal[this.valuePropName]=this[this.valuePropVar].valueOf();
        return oVal;
    }





}
