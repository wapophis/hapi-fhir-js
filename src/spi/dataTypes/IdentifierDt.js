import {isUndefined,isValid,isEmpty} from '../../utils/ValidationRules.js';
import IdentifierUseEnum from '../valueSets/IdentifierUseEnum.js';
import _PeriodDt from './PeriodDt.js';
import _CodeableConceptDt from './CodeableConceptDt.js';
import _ReferenceDt from './ReferenceDt.js';


/**
 * Created by lucho
 * @param {*} root 
 */
export default class _IdentifierDt extends Object{
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

    isEmpty(){
        return isEmpty(this.use)
        && this.type.isEmpty()
        && isEmpty(this.system)
        && isEmpty(this.value)
        && this.period.isEmpty()
    }

    get use(){
        if(!isValid(this.myUse)){
            this.myUse=new String();
        }
        return IdentifierUseEnum.getByValue(this.myUse);
    }


    set use(newVal){
        this.myUse=newVal;
        return this;
    }

    get type(){
        if(!isValid(this.myType)){
            this.myType=new _CodeableConceptDt();
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
            this.myPeriod=new _PeriodDt();
        }
        return this.myPeriod;
    }

    set period(newVal){
        this.myPeriod=newVal;
        return this;
    }

    get assigner(){
        if(!isValid(this.myAssigner)){
            this.myAssigner=new _ReferenceDt();
        }
        return this.myAssigner;
    }

    set assigner(newVal){
        this.myAssigner=newVal;
        return this;
    }

}
