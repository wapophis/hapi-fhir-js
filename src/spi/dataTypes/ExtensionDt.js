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
            return this;
        }

        if(newValue instanceof CodeableConceptDt){
            this.valueCodeableConcept=newValue.valueOf();
            return this;
        }

        if(newValue instanceof CodingDt){
            this.valueCoding=newValue.valueOf();
            return this;
        }
        
        if(newValue instanceof PeriodDt){
            this.valuePeriod=newValue.valueOf();
            return this;
        }

        if(newValue instanceof IdentifierDt){
            this.valueIdentifier=newValue.valueOf();
            return this;
        }

        if(newValue instanceof HumanNameDt){
            this.valueHumanName=newValue.valueOf();
            return this;
        }

        if(newValue instanceof BooleanDt){
            this.valueBoolean=newValue.valueOf();
            return this;
        }

        if(newValue instanceof AddressDt){
            this.valueAddress=newValue.valueOf();
            return this;
        }

        if(newValue instanceof ContactPointDt){
            this.valueContactPoint=newValue.valueOf();
            return this;
        }

        if(newValue instanceof ReferenceDt){
            this.valueReference=newValue.valueOf();
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
            return this;
        }

        if(!Number.isNaN(Number.parseFloat(newValue.valueOf()))){
            this.valueDecimal=newValue.valueOf();
            return this;
        }



    }


}
