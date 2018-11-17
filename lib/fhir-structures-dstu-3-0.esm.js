function isUndefined(object){
   
    return (typeof object==='undefined');
}

function isNull(object){
    return object===null;
}

function isEmpty(object){
    return object.length<=0;
}

function isValid(object){
    return !isUndefined(object) && !isNull(object);
}

function isEmptyArray(object){
    if(Array.isArray(object) && object.length>0){
        return false;
    }
    return true;
}

/**
 * Created by lucho 15-11-2018
 * @param {*} root 
 */
const BooleanDt= class BooleanDt extends Boolean{

    constructor(value){
        super(value);
        this.isUndefined=isUndefined(value);
    }

    valueOf(){
        if(this.isUndefined===false){
            return super.valueOf();
        }
        debugger;
    }

    isEmpty(){
        return this.isUndefined;
    }

};

/**
 * Created by lucho 12-11-2018
 * @param {*} root 
 */
const CodingDt= class CodingDt extends Object{
    constructor(root){
        super();

        if(isValid(root)){
            this.system=root.system;
            this.version=root.version;
            this.code=root.code;
            this.display=root.display;
            this.userSelected=root.userSelected;
        }

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

    get version(){
        if(!isValid(this.myVersion)){
            this.myVersion=new String();
        }

        return this.myVersion;
    }

    set version(newValue){
        this.myVersion=newValue;
        return this;
    }

    get code(){
        if(!isValid(this.myCode)){
            this.myCode=new String();
        }

        return this.myCode;
    }

    set code(newValue) {
        this.myCode=newValue;
        return this;
    }

    get display(){
        if(!isValid(this.myDisplay)){
            this.myDisplay=new String();
        }

        return this.myDisplay;
    }

    set display(newValue){
        this.myDisplay=newValue;
        return this;
    }

    get userSelected(){
        if(!isValid(this.myUserSelected)){
            this.myUserSelected=new BooleanDt();
        }
        return this.myUserSelected;
    }

    set userSelected(newValue){
        this.myUserSelected=newValue;
        return this;
    }

    isEmpty(){
        return isEmpty(this.code) &&
        isEmpty(this.display) &&
        isEmpty(this.system) &&
        isEmpty(this.version) &&
        this.userSelected.isEmpty();
    }
};

class CodeableConceptDt extends Object{
    constructor(root){
        super();

        if(isValid(root)){
            this.coding=root.coding;
            this.text=root.text;
        }

    }

    get coding(){
        if(!isValid(this.myCoding)){
            this.myCoding=new Array();
        }
        return this.myCoding;
    }

    set coding(newVal){
        this.myCoding=newVal;
        return this;
    }

    addCoding(newValue){
        if(isValid(newValue)){
            this.coding.push(newValue);
        }else{
            this.coding.push(new CodingDt());
        }
        return this;
    }

    getCodingFirstRep(){
        if(this.coding.length<=0){
            this.addCoding();
        }
        if(typeof this.coding[0]!=='codingdt'){
            this.coding[0]=new CodingDt(this.coding[0]);
        }
        return this.coding[0];
    }

    get text(){ 
        if(!isValid(this.myText)){
            this.myText=new String();
        }

        return this.myText;

    }

    set text(newVal){
        this.myText=newVal;
        return this;
    }

    isEmpty(){
        return isEmptyArray(this.coding) && isEmpty(this.text);
    }
}

const ContactPointUseEnum = Object.freeze({
    "HOME":{value:'home',display:"Hogar"},
    "WORK":{value:'work',display:"Trabajo"},
    "TEMP":{value:'temp',display:"Temporal"},
    "OLD":{value:'old',display:"Antiguo"},
    "MOBILE":{value:'mobile',display:"Móvil"},

    getByValue(code){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
               return this[propName];
            }
         }

         return new String();
    }

});

class PeriodDt extends Object{

    constructor(root){
        super();
        if(isValid(root)){
            this.start=root.start;
            this.end=root.end;
        }
    }

    get start(){
        if(!isValid(this.myStart)){
            this.myStart=new Date(0,0,0);
        }
        return this.myStart;
    }

    set start(newValue){
        this.myStart=newValue;
        return this;
    }

    get end(){
        if(!isValid(this.myEnd)){
            this.myEnd=new Date(0,0,0);
        }
        return this.myEnd;
    }

    set end(newValue){
        this.myEnd=newValue;
        return this;
    }

    isEmpty(){
        return this.start.getTime()===new Date(0,0,0).getTime() && this.end.getTime()===new Date(0,0,0).getTime();
    }

    equals(other){
        return (other instanceof PeriodDt) && this.start.getTime()===other.start.getTime()
        && this.end.getTime()===other.end.getTime();
    }

}

class ContactPointDt extends Object{
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

const NameUseEnum = Object.freeze({
    "USUAL":{value:'usual',display:"Habitual"},
    "OFFICIAL":{value:'official',display:"Oficial"},
    "TEMP":{value:'temp',display:"Temporal"},
    "NICKNAME":{value:'nickname',display:"Alias"},
    "ANONYMOUS":{value:'anonymous',display:"Anónimo"},
    "OLD":{value:'old',display:"Antiguo"},
    "MAIDEN":{value:'maiden',display:"Nombre de casado/a"},

    getByValue(code){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
               return this[propName];
            }
         }
         return new String();
    }

});

class HumanNameDt extends Object{
    constructor(root){
        super();
        if(isValid(root)){
            this.use=root.use;
            this.text=root.text;
            this.family=root.family;
            this.given=root.given;
            this.prefix=root.prefix;
            this.suffix=root.suffix;
            this.period=root.period;
        }
    }
    
    get use(){
        if(!isValid(this.myUse)){
            this.myUse=new String();
        }
        return NameUseEnum.getByValue(this.myUse);
    }

    set use(newValue){
        this.myUse=newValue;
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

    get family(){
        if(!isValid(this.myFamily)){
            this.myFamily=new String();
        }

        return this.myFamily;

    }

    set family(newValue){
        this.myFamily=newValue;
        return this;
    }

    get given(){
        if(!isValid(this.myGiven)){
            this.myGiven=new Array();
        }
        return this.myGiven;
    }

    set given(newValue){
        this.myGiven=newValue;
        return this;
    }

    get prefix(){
        if(!isValid(this.myPrefix)){
            this.myPrefix=new Array();
        }

        return this.myPrefix;

    }

    set prefix(newValue){
        this.myPrefix=newValue;
        return this;
    }

    get suffix(){
        if(!isValid(this.mySuffix)){
            this.mySuffix=new Array();
        }

        return this.mySuffix;

    }

    set suffix(newValue){
        this.mySuffix=newValue;
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

    isEmpty(){
        return isEmptyArray(this.given) 
                && isEmptyArray(this.prefix) 
                && isEmptyArray(this.suffix)
                && isEmpty(this.family)
                && isEmpty(this.text)
                && this.period.isEmpty();
    }


    // /**
    //  * Adds an returns a new value for family if newVal undefined,
    //  * Adds an returns this if newValue is defined
    //  */
    // addFamily(newVal){
    //     if(isValid(newVal)){
    //         this.family.push(newVal);
    //         return this;
    //     }else{
    //         let oVal=new String();
    //         this.family.push(oVal);
    //         return oVal;
    //     }
    // }

    /**
     * Adds a given new value for family.
     * @param {*} newVal 
     */
    addGiven(newVal){
        if(isValid(newVal)){
            this.given.push(newVal);
            return this;
        }else{
            let oVal=new String();
            this.given.push(oVal);
            return oVal;
        }
    }



    /**
     * 
     * @param {*} newVal 
     */
    addPrefix(newVal){
        if(isValid(newVal)){
            this.prefix.push(newVal);
            return this;
        }else{
            let oVal=new String();
            this.prefix.push(oVal);
            return oVal;
        }
    }


    /**
     * 
     * @param {*} newVal 
     */
    addSuffix(newVal){
        if(isValid(newVal)){
            this.suffix.push(newVal);
            return this;
        }else{
            let oVal=new String();
            this.suffix.push(oVal);
            return oVal;
        }
    }

    // /**
    //  * Return first element for family array;
    //  */
    // getFamilyFirstRep(){
    //     return this.family[0];
    // }

    /**
     * Return first element for given array.
     */
    getGivenFirstRep(){
        return this.given[0];
    }

    /**
     * Return first element for suffix array.
     */
    getSuffixFirstRep(){
        return this.suffix[0];
    }

    /**
     * Return first element for prefix array.
     */
    getPreffixFirstRep(){
        return this.prefix[0];
    }



}

const IdentifierUseEnum = Object.freeze({
    "USUAL":{value:'usual',display:"Usual"},
    "OFFICIAL":{value:'official',display:"Official"},
    "TEMP":{value:'temp',display:"Temp"},
    "SECONDARY":{value:'secondary',display:"Secondary"},
    getByValue(code){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
               return this[propName];
            }
         }

         return new String();
    }

});

class PeriodDt$1 extends Object{

    constructor(root){
        super();
        if(isValid(root)){
            this.reference=root.reference;
            this.display=root.display;
            this.identifier=root.identifier;
        }
    }


    isEmpty(){
        return isEmpty(this.reference)
        && this.identifier.isEmpty()
        && isEmpty(this.display); 
    }

    get reference(){
        if(!isValid(this.myReference)){
            this.myReference=new String();
        }
        return this.myReference;
    }
    set reference(newValue){
        this.myReference=newValue;
        return this;
    }

    get identifier(){
        if(!isValid(this.myIdentifier)){
            this.myIdentifier=new IdentifierDt();
        }
        return this.myIdentifier;
    }

    set identifier(newValue){
        this.myIdentifier=newValue;
        return this;
    }

    get display(){
    if(!isValid(this.myDisplay)){
            this.myDisplay=new String();
        }
        return this.myDisplay;
    }
    set display(newValue){
        this.myDisplay=newValue;
        return this;
    }


}

/**
 * Created by lucho
 * @param {*} root 
 */
class IdentifierDt extends Object{
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
            this.myAssigner=new PeriodDt$1();
        }
        return this.myAssigner;
    }

    set assigner(newVal){
        this.myAssigner=newVal;
        return this;
    }

}

const NarrativeStatusEnum = Object.freeze({
    "GENERATED":{value:'generated',display:"Generated"},
    "EXTENSIONS":{value:'extensions',display:"Extensions"},
    "ADDITIONAL":{value:'additional',display:"Additional"},
    "EMPTY":{value:'empty',display:"Empty"},
  

    getByValue(code){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
               return this[propName];
            }
         }
         
         return new String();
    }

});

class Narrative extends Object{
    
       constructor(rootObject){
           super();
           if(isValid(rootObject)){
           this.div=rootObject.div;
           this.status=rootObject.status;
           }
       
    }


    isEmpty(){

        return isEmpty(this.status)
        && isEmpty(this.div);
    }

       get div(){
            if(!isValid(this.myDiv)){
                this.myDiv=new String();
            }
            return this.myDiv;
       }
       
       set div(newDiv){
            this.myDiv=newDiv;
            return this;
       }

       set status(newStatus){
        this.myStatus=newStatus;
        return this;
       }

       get status(){
        if(!isValid(this.myStatus)){
            this.myStatus=new String();
        }
        return NarrativeStatusEnum.getByValue(this.myStatus);
       }

        
    }

/** SPEC DSTU-3 */
const AddressDt_dstu_3_0=AddressDt;
const BooleanDt_dstu_3_0=BooleanDt;
const CodeableConceptDt_dstu_3_0=CodeableConceptDt;
//export const CodingDt_dstu_3_0=CodingDt;
const ContactPointDt_dstu_3_0=ContactPointDt;
const HumanNameDt_dstu_3_0=HumanNameDt;
const IdentifierDt_dstu_3_0=IdentifierDt;
const NarrativeDt_dstu_3_0=Narrative;
const PeriodDt_dstu_3_0=PeriodDt;
const ReferenceDt_dstu_3_0=PeriodDt$1;

export { AddressDt_dstu_3_0, BooleanDt_dstu_3_0, CodeableConceptDt_dstu_3_0, ContactPointDt_dstu_3_0, HumanNameDt_dstu_3_0, IdentifierDt_dstu_3_0, NarrativeDt_dstu_3_0, PeriodDt_dstu_3_0, ReferenceDt_dstu_3_0 };
