import {isUndefined,isValid,isEmpty} from '../../utils/ValidationRules.js';
import IdentifierUseEnum from '../valueSets/IdentifierUseEnum.js';
import PeriodDt from './PeriodDt.js';
import CodingDt from './PeriodDt.js';
import CodeableConceptDt from './CodeableConceptDt.js';
import ReferenceDt from './ReferenceDt.js';


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
        return this.getUseElement();
    }

    getUseElement(){
        if(!isValid(this.myUse)){
            this.myUse=new CodingDt();
        }
        return this.myUse;
    }


    /**
     * 
     */
    set use(newValue){
        if(isValid(newValue)){
            let code=IdentifierUseEnum.getByCode(newValue);
            if(!code.isEmpty()){
                this.setUseElement(code);
            }else{
                this.getUseElement().code=newValue;
            }
        }
    }
    

    /**
     * 
     * @param {*} newValue 
     */
    setUseElement(newValue){
        if(newValue instanceof CodingDt===false){
            throw new TypeError("Use field must be a CodingDt object");
        }
        this.myUse=newValue;
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
            this.myAssigner=new ReferenceDt();
        }
        return this.myAssigner;
    }

    set assigner(newVal){
        this.myAssigner=newVal;
        return this;
    }

}
