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
        if(newValue instanceof URL){
            this.myValueUrl=newValue;
            this.valuePropVar="myValueUrl";
            this.valuePropName="valueUrl";
            return this;
        }

        if(newValue instanceof StringDt){
            this.myValueString=newValue;
            this.valuePropVar="myValueString";
            this.valuePropName="valueString";
            return this;
        }

        if(newValue instanceof CodeableConceptDt){
            this.myValueCodeableConcept=newValue;
            this.valuePropVar="myValueCodeableConcept";
            this.valuePropName="valueCodeableConcept";
            return this;
        }

        if(newValue instanceof CodingDt){
            this.myValueCoding=newValue;
            this.valuePropVar="myValueCoding";
            this.valuePropName="valueCoding";
            return this;
        }

        if(newValue instanceof PeriodDt){
            this.myValuePeriod=newValue;
            this.valuePropVar="myValuePeriod";
            this.valuePropName="valuePeriod";
            return this;
        }

        if(newValue instanceof IdentifierDt){
            this.myValueIdentifier=newValue;
            this.valuePropVar="myValueIdentifier";
            this.valuePropName="valueIdentifier";
            return this;
        }

        if(newValue instanceof HumanNameDt){
            this.myValueHumanName=newValue;
            this.valuePropVar="myValueHumanName";
            this.valuePropName="valueHumanName";
            return this;
        }

        if(newValue instanceof BooleanDt){
            this.myValueBoolean=newValue;
            this.valuePropVar="myValueBoolean";
            this.valuePropName="valueBoolean";
            return this;
        }

        if(newValue instanceof AddressDt){
            this.myValueAddress=newValue;
            this.valuePropVar="myValueAddress";
            this.valuePropName="valueAddress";
            return this;
        }

        if(newValue instanceof ContactPointDt){
            this.myValueContactPoint=newValue;
            this.valuePropVar="myValueContactPoint";
            this.valuePropName="valueContactPoint";
            return this;
        }

        if(newValue instanceof ReferenceDt){
            this.myValueReference=newValue;
            this.valuePropVar="myValueReference";
            this.valuePropName="valueReference";
            return this;
        }

        if(newValue instanceof Date){

            if(newValue.getHours()===1){
                this.myValueDate=newValue.toDateString();
                this.valuePropVar="myValueDate";
                this.valuePropName="valueDate";
                return this;
            }

            if(newValue.getTime()<86400000){
                this.myValueTime=newValue.toTimeString();
                this.valuePropVar="myValueTime";
                this.valuePropName="valueTime";
                return this;
            }

            this.myValueDateTime=newValue.toUTCString();
            this.valuePropVar="myValueDateTime";
            this.valuePropName="valueDateTime";
            return this;
        }

        if(Number.isInteger(newValue.valueOf())===true){
            this.myValueInteger=newValue;
            this.valuePropVar="myValueInteger";
            this.valuePropName="valueInteger";
            return this;
        }

        if(!Number.isNaN(Number.parseFloat(newValue.valueOf()))){
            this.myValueDecimal=newValue;
            this.valuePropVar="myValueDecimal";
            this.valuePropName="valueDecimal";
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
        this.put(newValue);
    }

    set valueBoolean(newValue){
        this.put(new _BooleanDt(newValue));
        return this;
    }
    get valueBoolean(){
        return this.myValueBoolean.valueOf();
    }
    set valueDecimal(newValue){
        this.put(newValue);
        return this;
    }get valueDecimal(){
        return this.myValueDecimal.valueOf();
    }

    set valueInteger(newValue){
        this.put(newValue);
        return this;
    }
    get valueInteger(){
        return this.myValueInteger.valueOf();
    }
    set valueDate(newValue){
        this.put(newValue);
        return this;
    }
    get valueDate(){
        return this.myValueDate.valueOf();
    }
    set valueDateTime(newValue){
        this.put(newValue);
        return this;
    }
    get valueDateTime(){
        return this.myValueDateTime.valueOf();
    }
    set valueTime(newValue){
        this.put(newValue);
        return this;
    }get valueTime(){
        return this.myValueTime.valueOf();
    }
    set valueString(newValue){
        this.put(new StringDt(newValue));
        return this;
    } get valueString(){
        return this.myValueString.valueOf();
    }
    set valueUri(newValue){
        this.put(newValue);
        return this;
    }
    get valueUri(){
        return this.myValueUrl.valueOf();
    }
    set valueAttachment(newValue){
        throw TypeError("NOT IMPLEMENTED YET");
        this.put(newValue);
        return this;

    }
    get valueAttachment(){
        throw TypeError("NOT IMPLEMENTED YET");
        return this[this.valuePropName].valueOf();
    }
    set valueCoding(newValue){
        this.put(new _CodingDt(newValue));
        return this;
    }
      get valueCoding(){
        return this.myValueCoding.valueOf();
    }
    set valueQuantity(newValue){
        throw TypeError("NOT IMPLEMENTED YET");
        this.put(newValue);
        return this;
    }
    get valueQuantity(){
        throw TypeError("NOT IMPLEMENTED YET");
        return this[this.valuePropName].valueOf();
    }

    set valueReference(newValue){
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
