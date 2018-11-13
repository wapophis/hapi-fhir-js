import {isUndefined,isValid} from '../../../spi/utils/ValidationRules.js';
import {IdentifierUse} from '../../../spi/valueSets/FhirDSTUEnums.js';
import PeriodDt from './PeriodDt.js';
import CodeableConceptDt from './CodeableConceptDt.js';

/**
 * Created by lucho
 * @param {*} root 
 */
export class IdentifierDt extends Object{
    constructor(root){
        super();

        if(isValid(root)){
            this.use=root.use;
            this.type=root.type;
            this.system=root.system;
            this.value=root.value;
            this.period=root.period;
            this.assigner=root.assigner;
        }

    }


    get use(){
        if(!isValid(this.myUse)){
            this.myUse=new String();
        }
        return this.myUse;
    }


    set use(newVal){
        this.myUse=newVal;
        return this;
    }

    get type(){
        if(!isValid(this.myType)){
            this.myType=new CodeableConceptDt();
        }
        return this.myType;
    }

    set type(newVal){
        this.myType=newVal;
        return this;
    }

    get system(){
        if(!isValid(this.mySystem)){
            this.mySystem=new String();
        }
        return this.mySystem;
    }

    set system(newVal){
        this.mySystem=newVal;
        return this;
    }

    get value(){
        if(!isValid(this.myValue)){
            this.myValue=new String();
        }
        return this.myValue;
    }

    set value(newVal){
        this.myValue=newVal;
        return this;
    }

    get period(){
        if(!isValid(this.myPeriod)){
            this.myPeriod=new PeriodDt();
        }
        return this.myPeriod;
    }

    set period(newVal){
        this.myPeriod=newVal;
        return this;
    }

    get assigner(){
        if(!isValid(this.myAssigner)){
            this.myAssigner=new String();
        }
        return this.myAssigner;
    }

    set assigner(newVal){
        this.myAssigner=newVal;
        return this;
    }

}
