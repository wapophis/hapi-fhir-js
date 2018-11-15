import {isUndefined,isValid,isEmpty} from '../../utils/ValidationRules.js';
import ContactPointUseEnum from '../valueSets/ContactPointUseEnum.js';
import PeriodDt from './PeriodDt.js';

export default class ContactPointDt extends Object{
    constructor(root){
        super();

        if(isValid(root)){
            this.system=root.system;
            this.value=root.value;
            this.use=root.use;
            this.rank=root.rank;
            this.period=root.period;
        }

    }

    isEmpty(){
        return isEmpty(this.system)
        && isEmpty(this.value)
        && isEmpty(this.use)
        && isEmpty(this.rank)
        && this.period.isEmpty();
    }

    get system(){
        if(!isValid(this.mySystem)){
            this.mySystem=new String();
        }
        return this.mySystem;
    }

    set system(newValue){
        this.mySystem=newValue;
        return this;
    }

    get value(){
        if(!isValid(this.myValue)){
            this.myValue=new String();
        }
        return this.myValue;
    }

    set value(newValue){
        this.myValue=newValue;
        return this;
    }

    get use(){
        if(!isValid(this.myUse)){
            this.myUse=new String();
        }
        return ContactPointUseEnum.getByValue(this.myUse);
    }

    set use(newValue){
        this.myUse=newValue;
        return this;
    }

    get rank(){
        if(!isValid(this.myRank)){
            this.myRank=new String();
        }
        return this.myRank;
    }

    set rank(newValue){
        this.myRank=newValue;
        return this;
    }

    get period(){
        if(!isValid(this.myPeriod)){
            this.myPeriod=new PeriodDt();
        }
        return this.myPeriod;
    }

    set period(newValue){
        this.myPeriod=newValue;
        return this;
    }
}