import {isUndefined,isValid,isEmptyArray,isEmpty} from '../../utils/ValidationRules.js';
import FlattenAbleObject from '../FlattenAbleObject.js';
import _PeriodDt from './PeriodDt.js';
import StringDt from './StringDt.js';
import CodingDt from './CodingDt.js';


import AddressTypeEnum from '../valueSets/AddressTypeEnum.js';
import AddressUseEnum from '../valueSets/AddressUseEnum.js';

export default class _AddressDt extends FlattenAbleObject{
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

    _flatten(){
        let oVal=new Object();

        if(!this.getUseElement().isEmpty()){
            oVal.use=this.use;
        }

        if(!this.getTypeElement().isEmpty()){
            oVal.type=this.type;
        }

        if(!isEmptyArray(this.getLine())){
            oVal.line=this._flattenArray(this.getLine());
        }
        if(!this.getCityElement().isEmpty()){
            oVal.city=this.city;
        }
        if(!this.getDistrictElement().isEmpty()){
            oVal.district=this.district;
        }

        if(!this.getStateElement().isEmpty()){
            oVal.state=this.state;
        }
        if(!this.getPostalCodeElement().isEmpty()){
            oVal.postalCode=this.postalCode;
        }
        if(!this.getCountryElement().isEmpty()){
            oVal.country=this.country;
        }

        if(!this.getPeriodElement().isEmpty()){
            oVal.period=this.period;
        }

        return oVal;
        
    }

    _flattenArray(array){
        let oVal=new Array();
        for(let i=0;i<array.length;i++){
            oVal.push(array[i].valueOf());
        }
        return oVal;
    }

    get use(){
       return this.getUseElement().code.valueOf();
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
      return this.getTypeElement().code.valueOf();
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
        this.getTextElement().value=newValue;
    }

    setTextElement(newValue){
        if(!newValue instanceof StringDt){
            throw TypeError('Invalid type for field \"text"\"');
        }
        this.myText=newValue;
        return this;
    }

    get line(){
        return this._flattenArray(this.getLine());
    }

    set line(newValue){
        if(!isEmptyArray(newValue) ){
            let oVal=new Array();
            for(let i=0;i<newValue.length;i++){
                    oVal.push(new StringDt(newValue[i].valueOf()));
            }
            this.setLine(oVal);
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

    getLine(){
        if(!isValid(this.myLine)){
            this.myLine=new Array();
        }

        return this.myLine;
    }


    get city(){
      this.getCityElement().valueOf();
    }

    getCityElement(){
        if(!isValid(this.myCity)){
            this.myCity=new StringDt();
        }
        return this.myCity;
    }


    set city(newValue){
        this.getCityElement().value=newValue;
    }

    setCityElement(newValue){
        if(newValue instanceof StringDt===false){
            throw new TypeError("City field must be StringDt");
        }

        this.myCity=newValue;
        return this;
    }

    get district(){
        return this.getDistrictElement().valueOf();
    }

    getDistrictElement(){
        if(!isValid(this.myDistrict)){
            this.myDistrict=new StringDt();
        }
        return this.myDistrict;
    }

    set district(newValue){
        this.getDistrictElement().value=newValue;
    }

    setDistrictElement(newValue){
        if(newValue instanceof StringDt===false){
            throw new TypeError("District field must be StringDt");
        }

        this.myDistrict=newValue;
        return this;
    }


    get state(){
      return this.getStateElement().valueOf();
    }

    getStateElement(){
        if(!isValid(this.myState)){
            this.myState=new StringDt();
        }
        return this.myState;
    }

    set state(newValue){
       this.getStateElement().value=newValue;
    }

    setStateElement(newValue){
        if(newValue instanceof StringDt===false){
            throw new TypeError("State field must be StringDt");
        }

        this.myState=newValue;
        return this;
    }

    get postalCode(){
        return this.getPostalCodeElement().valueOf();
    }

    getPostalCodeElement(){
        if(!isValid(this.myPostalCode)){
            this.myPostalCode=new StringDt();
        }
        return this.myPostalCode;
    }

    set postalCode(newValue){
        this.getPostalCodeElement().value=newValue;
    }

    setPostalCodeElement(newValue){
        if(newValue instanceof StringDt===false){
            throw new TypeError("PostalCode field must be StringDt");
        }

        this.myPostalCode=newValue;
        return this;
    }


    get country(){
        return this.getCountryElement().valueOf();
    }

    getCountryElement(){
        if(!isValid(this.myCountry)){
            this.myCountry=new StringDt();
        }
        return this.myCountry;
    }

    set country(newValue){
        this.getCountryElement().value=newValue;
    }

    setCountryElement(newValue){
        if(newValue instanceof StringDt===false){
            throw new TypeError("Country field must be StringDt");
        }
        this.myCountry=newValue;
        return this;
    }

    get period(){
        return this.getPeriodElement().valueOf();
    }

    getPeriodElement(){
        if(!isValid(this.myPeriod)){
            this.myPeriod=new _PeriodDt();
        }
        return new _PeriodDt(this.myPeriod);
    }

    set period(newValue){
        if(newValue instanceof _PeriodDt===true){
            this.setPeriodElement(newValue);
        }else{
            this.setPeriodElement(new _PeriodDt(newValue));
        }
        return this;
    }

    setPeriodElement(newValue){
        if(newValue instanceof _PeriodDt===false){
            throw new TypeError("Period field must be PeriodDt");
        }
        this.myPeriod=newValue;
        return this;
    }

    isEmpty(){
       return this.getCityElement().isEmpty()
       && this.getCountryElement().isEmpty()
       && this.getDistrictElement().isEmpty()
       && isEmptyArray(this.line)
       && this.getPeriodElement().isEmpty()
       && this.getUseElement().isEmpty()
       && this.getPostalCodeElement().isEmpty()
       && this.getStateElement().isEmpty()
       && this.getTextElement().isEmpty();
    }


}
