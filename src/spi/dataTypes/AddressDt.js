import {isUndefined,isValid,isEmptyArray,isEmpty} from '../../utils/ValidationRules.js';
import PeriodDt from './PeriodDt.js';
import AddressTypeEnum from '../valueSets/AddressTypeEnum.js';
import AddressUseEnum from '../valueSets/AddressUseEnum.js';

export default class AddressDt extends Object{
    constructor(root){
        
        super();

        if(isValid(root)){
            this.use=root.use;
            this.type=root.type;
            this.text=root.text;
            this.line=root.line;
            this.city=root.city;
            this.district=root.district;
            this.state=root.state;
            this.postalCode=root.postalCode;
            this.country=root.country;
            this.period=root.period;
        }

    }

    get use(){
        if(!isValid(this.myUse)){
            this.myUse=new String();
        }
        return AddressUseEnum.getByValue(this.myUse);
    }

    set use(newValue){
        this.myUse=newValue;
        return this.myUse;
    }

    get type(){
        if(!isValid(this.myType)){
            this.myType=new String();
        }
        return AddressTypeEnum.getByValue(this.myType);
    }

    set type(newValue){
        this.myType=newValue;
        return this;
    }

    get text(){
        if(!isValid(this.myText)){
            this.myText=new String();
        }
        return this.myText;
    }

    set text(newValue){
        this.myText=newValue;
        return this;
    }

    get line(){
        if(!isValid(this.myLine) || !Array.isArray(this.myLine)){
            this.myLine=new Array();
        }
        return this.myLine;
    }

    set line(newValue){
        this.myLine=newValue;
        return this;
    }

    get city(){
        if(!isValid(this.myCity)){
            this.myCity=new String();
        }
        return this.myCity;
    }

    set city(newValue){
        this.myCity=newValue;
        return this;
    }

    get district(){
        if(!isValid(this.myDistrict)){
            this.myDistrict=new String();
        }
        return this.myDistrict;
    }
    set district(newValue){
        this.myDistrict=newValue;
        return this;
    }
    get state(){
        if(!isValid(this.myState)){
            this.myState=new String();
        }
        return this.myState;
    }
    set state(newValue){
        this.myState=newValue;
        return this;
    }

    get postalCode(){
        if(!isValid(this.myPostalCode)){
            this.myPostalCode=new String();
        }
        return this.myPostalCode;
    }

    set postalCode(newValue){
        this.myPostalCode=newValue;
        return this;
    }

    get country(){
        if(!isValid(this.myCountry)){
            this.myCountry=new String();
        }
        return this.myCountry;
    }

    set country(newValue){
        this.myCountry=newValue;
        return this;
    }

    get period(){
        if(!isValid(this.myPeriod)){
            this.myPeriod=new PeriodDt();
        }
        return new PeriodDt(this.myPeriod);
    }

    set period(newValue){
        this.myPeriod=newValue;
        return this;
    }

    isEmpty(){
       return isEmpty(this.city) 
       && isEmpty(this.country) 
       && isEmpty(this.district)
       && isEmptyArray(this.line)
       && isEmpty(this.use)
       && isEmpty(this.postalCode)
       && isEmpty(this.state)
       && isEmpty(this.text);
    }


}
