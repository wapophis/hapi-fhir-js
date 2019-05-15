import {isUndefined,isValid} from '../../utils/ValidationRules.js';
import FlattenAbleObject from '../FlattenAbleObject.js';
import StringDt from './StringDt.js';
import CodeableConceptDt from './CodeableConceptDt.js';
import CodingDt from './CodingDt.js';
import PeriodDt from './PeriodDt.js';
import IdentifierDt from './IdentifierDt.js';
import HumanNameDt from './HumanNameDt.js';
import BooleanDt from './BooleanDt.js';
import AddressDt from './AddressDt.js';
import ContactPointDt from './ContactPointDt.js';
import ReferenceDt from './ReferenceDt.js';


/**
 * Created by lucho 15-11-2018
 * @param {*} root
 */
export default class _ExtensionDt extends FlattenAbleObject{

    constructor(root){
        super(root);
        this.valuePropName=null;
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

        if(newValue instanceof StringDt){
            this.valueString=newValue.value.valueOf();
            this.valuePropName="valueString";
            return this;
        }

        if(newValue instanceof CodeableConceptDt){
            this.valueCodeableConcept=newValue.valueOf();
            this.valuePropName="valueCodeableConcept";
            return this;
        }

        if(newValue instanceof CodingDt){
            this.valueCoding=newValue.valueOf();
            this.valuePropName="valueCoding";
            return this;
        }

        if(newValue instanceof PeriodDt){
            this.valuePeriod=newValue.valueOf();
            this.valuePropName="valuePeriod";
            return this;
        }

        if(newValue instanceof IdentifierDt){
            this.valueIdentifier=newValue.valueOf();
            this.valuePropName="valueIdentifier";
            return this;
        }

        if(newValue instanceof HumanNameDt){
            this.valueHumanName=newValue.valueOf();
            this.valuePropName="valueHumanName";
            return this;
        }

        if(newValue instanceof BooleanDt){
            this.valueBoolean=newValue.valueOf();
            this.valuePropName="valueBoolean";
            return this;
        }

        if(newValue instanceof AddressDt){
            this.valueAddress=newValue.valueOf();
            this.valuePropName="valueAddress";
            return this;
        }

        if(newValue instanceof ContactPointDt){
            this.valueContactPoint=newValue.valueOf();
            this.valuePropName="valueContactPoint";
            return this;
        }

        if(newValue instanceof ReferenceDt){
            this.valueReference=newValue.valueOf();
            this.valuePropName="valueReference";
            return this;
        }

        if(newValue instanceof Date){

            if(newValue.getHours()===1){
                this.valueDate=newValue.toDateString();
                return this;
            }

            if(newValue.getTime()<86400000){
                this.valueTime=newValue.toTimeString();
                return this;
            }

            this.valueDateTime=newValue.toUTCString();
            return this;
        }

        if(Number.isInteger(newValue.valueOf())===true){
            this.valueInteger=newValue.valueOf();
            this.valuePropName="valueInteger";
            return this;
        }

        if(!Number.isNaN(Number.parseFloat(newValue.valueOf()))){
            this.valueDecimal=newValue.valueOf();
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

    _flatten(){
        let oVal=new Object();
        oVal["uri"]=this.uri;
        oVal[this.valuePropName]=this[this.valuePropName];
        return oVal;
    }



}
