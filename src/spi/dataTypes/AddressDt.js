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
       return this.getUse().code;
    }

    set use(newValue){
        let code=AddressUseEnum.getByCode(newValue);
        if(!code.isEmpty()){
            this.setUse(code);
        }else{
            this.getUse().setCode(newValue);
        }
    }

    getUse(){
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

    get type(){
        if(!isValid(this.myType)){
            this.myType=new CodingDt();
        }
        return this.myType;
    }

    set type(newValue){
        if(newValue instanceof CodingDt){
            this.myType=newValue;
        }else{
            this.myType=AddressTypeEnum.getByCode(newValue);
        }
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
        if(!isValid(this.myLine)){
            this.myLine=new Array();
        }

        for(let i=0;i<this.myLine.length;i++){
            if((this.myLine[i] instanceof StringDt)===false){
                this.myLine[i]=new StringDt(this.myLine[i]);
            }
        }
        return this.myLine;
    }

    set line(newValue){
        this.myLine=newValue;
        return this;
    }

    addLine(newValue){
        if(!isValid(newValue)){
            let oVal=new StringDt();
            this.line.push(oVal)
            return oVal;
        }
        this.line.push(newValue);
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
       && this.use.isEmpty()
       && isEmpty(this.postalCode)
       && isEmpty(this.state)
       && isEmpty(this.text);
    }


}
