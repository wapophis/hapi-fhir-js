import {isUndefined,isValid,isEmptyArray,isEmpty} from '../../utils/ValidationRules.js';
import _PeriodDt from './PeriodDt.js';
import StringDt from './StringDt.js';
import CodingDt from './CodingDt.js';


import AddressTypeEnum from '../valueSets/AddressTypeEnum.js';
import AddressUseEnum from '../valueSets/AddressUseEnum.js';

export default class _AddressDt extends Object{
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
       return this.getUseElement().code;
    }

    set use(newValue){
        if(isValid(newValue)){
            let code=AddressUseEnum.getByCode(newValue);
            if(!code.isEmpty()){
                this.setUse(code);
            }else{
                this.getUseElement().code=newValue;
            }
        }
    }

    getUseElement(){
        if(!isValid(this.myUse)){
            this.myUse=new CodingDt();
        }
        return this.myUse;
    }

    setUse(newValue){
        if(!newValue instanceof CodingDt){
            throw new TypeError("Type invalid. Needs CodingDt")
        }
        this.myUse=newValue;
        return this;
    }

    getTypeElement(){
        if(!isValid(this.myType)){
            this.myType=new CodingDt();
        }
        return this.myType;
    }


    get type(){
      return this.getTypeElement().code;
    }

    set type(newValue){
        if(isValid(newValue)){
            let code=AddressTypeEnum.getByCode(newValue);
            if(!code.isEmpty()){
                this.setType(code);
            }else{
                this.getTypeElement().code=newValue;
            }
        }
    }

    setType(newValue){
        if(!newValue instanceof CodingDt){
            throw new TypeError("Type invalid. Needs CodingDt")
        }
        this.myType=newValue;
        return this;
    }

    get text(){
       return this.getTextElement().valueOf();
    }

    getTextElement(){
        if(!isValid(this.myText)){
            this.myText=new StringDt();
        }
        return this.myText;
    }

    set text(newValue){
        this.setTextElement(new StringDt(newValue));
    }
    setTextElement(newValue){
        if(!newValue instanceof StringDt){
            throw TypeError('Invalid type for field \"text"\"');
        }
        this.myText=newValue;
        return this;
    }

    get line(){
        return this.myLine;
    }

    set line(newValue){
        if(isValid(newValue) && Array.isArray(newValue)){
            this.setLine(newValue);
        }else{
            this.setLine(new Array());
        }
        return this;
    }

    setLine(newValueArray){
        for(let i=0;i<newValueArray.length;i++){
            if(newValueArray[i] instanceof StringDt===false)
            {
                throw new TypeError("Line array only contains StringDt types");
            }
        }
        this.myLine=newValueArray;
        return this;
    }

    addLine(newValue){
        debugger;
        let oVal=new StringDt();
        if(!isValid(newValue)){
            this.line.push(oVal)
            return oVal;
        }
        if(newValue instanceof StringDt===true){
            oVal=newValue;
        }
        if(newValue instanceof String===true || typeof newValue==="string"){
            oVal=new StringDt(newValue);
        }

        this.line.push(oVal);
        return this;
    }

    getLineFirstRep(){
        if(isValid(this.line[0])){
            return this.line[0];
        }
        return this.addLine();
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
            this.myPeriod=new _PeriodDt();
        }
        return new _PeriodDt(this.myPeriod);
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
       && this.getUseElement().isEmpty()
       && isEmpty(this.postalCode)
       && isEmpty(this.state)
       && this.getTextElement().isEmpty();
    }


}
