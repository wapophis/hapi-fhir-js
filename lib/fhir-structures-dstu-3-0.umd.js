(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
   typeof define === 'function' && define.amd ? define(['exports'], factory) :
   (factory((global['fhir-structures-dstu-3-0'] = {})));
}(this, (function (exports) { 'use strict';

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

   function isEmptyDate(object){

       if(!isValid(object)){
           return true;
       }
       
       if(object instanceof Date){
           return new Date(0,0,0).getTime()===object.getTime();
       }

       throw new TypeError("Object to check empty is not a date");

   }

   class _PeriodDt extends Object{

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

   const AddressTypeEnum = Object.freeze(
       {
           "POSTAL":{value:'postal',display:"Postal"},
           "PHYSICAL":{value:'physical',display:"Física"},
           "BOTH":{value:'both',display:"Postal y física"},
           getByValue(code){
               for(let propName in this) {
                   if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
                      return this[propName];
                   }
                }

                return new String();
           }
   });

   const AddressUseEnum = Object.freeze(
       {
           "HOME":{value:'home',display:"Hogar"},
           "WORK":{value:'work',display:"Trabajo"},
           "TEMP":{value:'temp', display:"Temporal"},
           "OLD":{value:'old',display:"Antiguo/Incorrecto"},

           getByValue(code){
               for(let propName in this) {
                   if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
                      return this[propName];
                   }
                }
                return new String();
           }
   });

   class _AddressDt extends Object{
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
          && isEmpty(this.use)
          && isEmpty(this.postalCode)
          && isEmpty(this.state)
          && isEmpty(this.text);
       }


   }

   /**
    * Created by lucho 15-11-2018
    * @param {*} root 
    */
   class _BooleanDt extends Boolean{

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

   }

   /**
    * Created by lucho 12-11-2018
    * @param {*} root 
    */
   class _CodingDt extends Object{
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
               this.myUserSelected=new _BooleanDt();
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
   }

   class _CodeableConceptDt extends Object{
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
               this.coding.push(new _CodingDt());
           }
           return this;
       }

       getCodingFirstRep(){
           if(this.coding.length<=0){
               this.addCoding();
           }
           if(typeof this.coding[0]!=='codingdt'){
               this.coding[0]=new _CodingDt(this.coding[0]);
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

   class _ContactPointDt extends Object{
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

   class _HumanNameDt extends Object{
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
               this.myPeriod=new _PeriodDt();
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

   class _ReferenceDt extends Object{

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
               this.myIdentifier=new _IdentifierDt();
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
   class _IdentifierDt extends Object{
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

   class _NarrativeDt extends Object{
       
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

   const FHIResource= class FHIResource extends Object{
    
       constructor(rootObject){
           super();
           this.myId=new String();
           this.myResourceName=new String();
           this.myExtensions=new Array();
           this.myContainedResources=new Array();
           this.myLanguaje=new String();

           if(isValid(rootObject)){
               this.id=rootObject.id;
               this.resourceName=rootObject.resourceType;
               this.extensions=rootObject.extensions;
               this.contained=rootObject.contained;
               this.languaje=rootObject.languaje;
           }
       }

       get id(){
           if(!isValid(this.myId)){
               this.myId=new String();
           }
           return this.myId;
       }

       set id(newId){
           if(isValid(this.myId) && isValid(newId)){
               this.myId=newId;
           }
           return this;
       }

       isEmpty(){
           return isEmptyArray(this.contained)
           && isEmptyArray(this.extensions)
           && isEmpty(this.id);
       }

       get resourceName(){
           if(!isValid(this.myResourceName)){
               this.myResourceName=new String();
           }
           return this.myResourceName;
       }

       set resourceName(newResourceName){
           if(isValid(this.myResourceName) && isValid(newResourceName)){
               this.myResourceName=newResourceName;
           }

           return this;
       }
       get extensions(){
           if(!isValid(this.myExtensions)){
               this.myExtensions=new Array();
           }

           return this.myExtensions;
       }

       set extensions(arrayExtension){
           if(Array.isArray(arrayExtension) && isValid(arrayExtension)){
               this.myExtensions=arrayExtension;
           }
           return this;
       }

       getNamedExtension(extensionUri){
           if(isValid(extensionUri) && isValid(this.myExtensions)){
               return this._searchExtensionByName(extensionUri);    
           }
       }

       get contained(){
           if(!isValid(this.myContainedResources)){
               this.myContainedResources=new Array();
           }

           return this.myContainedResources;
       }

       set contained(arrayContained){
           if(Array.isArray(arrayContained) && isValid(arrayContained)){
               this.myContainedResources=arrayContained;
           }
           return this;
       }

       get languaje(){
           if(!isValid(this.myLanguaje)){
               this.myLanguaje=new String();
           }

           return this.myLanguaje;
       }



       set languaje(newLanguaje){
           if(isValid(this.myLanguaje) && isValid(newLanguaje)){
               this.myLanguaje=newLanguaje;
           }

           return this;
       }


       _addContainedResource(resourceReference){
           if(isValid(resourceReference)){
               this.contained.push(resourceReference);
           }

           return this;
       }



       _searchExtensionByName(extensionUri){
           for(let extension in this.myExtensions){
               if(isValid(extension) && extension.url===extensionUri){
                   return extension;
               }
           }

           return new Object();
       }
   };

   class DomainResource extends FHIResource{
    
       constructor(rootObject){
           super(rootObject);
           this.myText=new _NarrativeDt();
           if(isValid(rootObject)){
               this.text=rootObject.text;
           }
       }

       /** Subclass this method for every resource to get info from modifiers */
       static get modifiers(){
           throw new Error("Must be subclassed");
       }
       /** Subclass this method for every resource to get info from summarizabled fields */
       static get summarized(){
           throw new Error("Must be subclassed");
       }

       addContained(resource){
           return super._addContainedResource(resource);
       }

       addExtension(extensionUri){
           if(isUndefined(extensionUri)){
               var myObjectExtension=new Object();
               this.myExtensions.push(myObjectExtension);
               return myObjectExtension;
           }

           if(!isValid(super._searchExtensionByName(extensionUri))){
               let myObjectExtension=new Object();
               myObjectExtension.url=extensionUri;
               this.myExtensions.push(myObjectExtension);
           }
           return this;
       }

       getExtensionsByUrl(urlExtension){
           let oVal=new Array();
           oVal.push(super._searchExtensionByName(urlExtension));
           return oVal;
       }

       hasContained(){
           return isValid(this.myContainedResources) && this.myContainedResources.length>0;
       }

       hasExtension(){
           return isValid(this.myExtensions)  && this.myContainedResources.length>0;    }

       hasText(){
           return isValid(this.myText) && this.myText.length>0;
       }

       isEmpty(){
           return super.isEmpty() && this.text.isEmpty(); 
       }

       get text(){
           if(!isValid(this.myText)){
               this.myText=new String();
           }
           return this.myText;
       }

       set text(newText){
           if(isValid(this.myText) && isValid(newText)){
               this.myText=new _NarrativeDt(newText);    
           }
           return this;
       }
   }

   const AdministrativeGenderEnum = Object.freeze(
       {
           "MALE":{value:'male',display:"Masculino"},
           "FEMALE":{value:'female',display:"Femenino"},
           "OTHER":{value:'other', display:"Otro"},
           "UNKNOWN":{value:'unknown',display:"Desconocido"},

           getByValue(code){
               for(let propName in this) {
                   if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
                      return this[propName];
                   }
                }

                return code;
           }
   });

   class Patient extends DomainResource{
       constructor(root){
           super(root);

           if(isValid(root)){
               this.identifier=root.identifier;
               this.active=root.active;
               this.name=root.name;
               this.telecom=root.telecom;
               this.gender=root.gender;
               this.birthDate=root.birthDate;
               this.deceased=root.deceased;
               this.address=root.address;
               this.maritalStatus=root.maritalStatus;
               this.multipleBirth=root.multipleBirth;
               this.photo=root.photo;
               this.contact=root.contact;
               this.animal=root.animal;
               this.communication=root.communication;
               this.generalPractitioner=root.generalPractitioner;
               this.managingOrganization=root.managingOrganization;
               this.link=root.link;
           }
       }

       static get modifiers(){
           return {
               active:{type:Boolean},
               deceasedBoolean:{type:Boolean},
               deceasedDateTime:{type:Date},
               animal:{type:Object},
               link:{type:Object}
           }
       }

       static get summarized(){
           return {
               identifier:{type:Object},
               active:{type:Boolean},
               name:{type:Object},
               telecom:{type:Object},
               gender:{type:Object},
               birthDate:{type:Date},
               deceasedBoolean:{type:Boolean},
               deceasedDateTime:{type:Date},
               address:{type:Object},
               animal:{type:Object},
               managingOrganization:{type:Object},
               link:{type:Object}
           }
       }

       get identifier(){
           if(!isValid(this.myIdentifer)){
               this.myIdentifer=new Array();
           }

           let oVal=new Array();
           for(let i=0;i<this.myIdentifer.length;i++){
               if(this.myIdentifer[i] instanceof _IdentifierDt){
                   oVal.push(this.myIdentifer[i]);
                   
               }else{
                   oVal.push(new _IdentifierDt(this.myIdentifer[i]));
               }
           }
           return oVal;
       }

       set identifier(newValue){
           this.myIdentifer=newValue;
           return this;
       }

       addIdentifier(newValue){
           if(isUndefined(newValue)){
               let oVal=new _IdentifierDt();
               this.name.push(oVal);
               return oVal;
           }

           this.push(newValue);
           return this;
       }

       getIdentifierFirstRep(){
           return this.identifier[0];
       }

       set active(newValue){
           this.myActive=newValue;
           return this;
       }

       get active(){
           if(!isValid(this.myActive)){
               this.myActive=new _BooleanDt();
           }
           return this.myActive;
       }

       get name(){
           if(!Array.isArray(this.myName) || !isValid(this.myName)){
               this.myName=new Array();
           }
           let oVal=new Array();
           for(let i=0;i<this.myName.length;i++){
               if(this.myName[i] instanceof _HumanNameDt){
                   oVal.push(this.myName[i]);
               }else{
                   oVal.push(new _HumanNameDt(this.myName[i]));
               }
           }
           return oVal;
       }

       set name(newValue){
           this.myName=newValue;
           return this;
       }

       addName(newValue){
           if(isUndefined(newValue)){
               let oVal=new _HumanNameDt();
               this.name.push(oVal);
               return oVal;
           }
             this.name.push(newValue);
             return this;
       }

       getNameFirstRep(){
           return this.name[0];
       }


       set telecom(newValue){
           this.myTelecom=newValue;
           return this;
       }

       get telecom(){
           
           if(!isValid(this.myTelecom))
           {
               this.myTelecom=new Array();
           }

           let oVal=new Array();
           for(let i=0;i<this.myTelecom.length;i++){
               if(this.myTelecom[i] instanceof _ContactPointDt){
                   oVal.push(this.myTelecom[i]);
               }else{
                   oVal.push(new _ContactPointDt(this.myTelecom[i]));
               }
           }
           return oVal;
       }

       set gender(newValue){
           this.myGender=newValue;
           return this;
       }

       get gender(){
           if(!isValid(this.myGender)){
               this.myGender=new String();
           }
           return AdministrativeGenderEnum.getByValue(this.myGender);
       }

       set birthDate(newValue){
           this.myBirthDate=newValue;
           return this;
       }

       get birthDate(){
           if(!isValid(this.myBirthDate)){
               this.myBirthDate=new Date(0,0,0);
           }
           return this.myBirthDate;

       }

       set deceasedBoolean(newValue){
           this.myDeceasedBoolean=newValue;
           return this;
       }

       get deceasedBoolean(){
           if(!isValid(this.myDeceasedBoolean)){
               this.myDeceased=new Boolean();
           }
           return this.myDeceased;
       }

       set deceasedDateTime(newValue){
           this.myDeceasedDateTime=newValue;
           return this;
       }

       get deceasedDateTime(){
           if(!isValid(this.myDecasedDateTime)){
               this.myDeceasedDateTime=new Date(0,0,0);
           }
           return this.myDeceasedDateTime;
       }

       get address(){
           if(!isValid(this.myAddress)){
               this.myAddress=new Array();
           }

           let oVal=new Array();
           for(let i=0;i<this.myAddress.length;i++){
               oVal.push(new _AddressDt(this.myAddress[i]));
           }
           return oVal;
       }

       set address(newValue){
           this.myAddress=newValue;
           return this;
       }

       set maritalStatus(newValue){
           this.myMaritalStatus=newValue;
           return this;
       }


       get maritalStatus(){
           if(!isValid(this.myMaritalStatus)){
               this.myMaritalStatus=new _CodeableConceptDt();
           }
           return this.myMaritalStatus;
       }

       get multipleBirthBoolean(){
           if(!isValid(this.myMultipleBirthBoolean)){
               this.myMultipleBirthBoolean=new Boolean();
           }
           return this.myMultipleBirthBoolean;
       }

       set multipleBirthBoolean(newValue){
           this.myMultipleBirthBoolean=newValue;
           return this;
       }



       get multipleBirthDateTime(){
           if(!isValid(this.myMultipleBirthDateTime)){
               this.myMultipleBirthDateTime=new Date(0,0,0);
           }
           return this.myMultipleBirthDateTime;
       }

       set multipleBirthDateTime(newValue){
           this.myMultipleBirthDateTime=newValue;
           return this;
       }

       set photo(newValue){
           this.myPhoto=newValue;
           return this;
       }

       get photo(){
           if(!isValid(this.myPhoto)){
               this.myPhoto=new String();
           }
           return this.myPhoto;
       }

       set contact(newValue){
           this.myContact=newValue;
           return this;
       }
       
       get contact(){
           if(!isValid(this.myContact)){
               this.myContact=new Object();
           }
           return this.myContact;
       }

       set animal(newValue){
           this.myAnimal=newValue;
           return this;
       }

       get animal(){
           if(!isValid(this.myAnimal)){
               this.myAnimal=new AnimalElement();
           }
           return this.myAnimal;
       }

       set communication(newValue){
           this.myCommunication=newValue;
           return this;
       }

       get communication(){
           if(!isValid(this.myCommunication)){
               this.myCommunication=new ComunicationElement();
           }
           return this.myCommunication;
       }

       get generalPractitioner(){
           if(!isValid(this.myGeneralPractitioner)){
               this.myGeneralPractitioner=new String();
           }
           return this.myGeneralPractitioner;
       }

       set generalPractitioner(newValue){
           this.myGeneralPractitioner=newValue;
           return this;
       }

       set managingOrganization(newValue){
           this.myOrganization=newValue;
           return this;
       }

       get managingOrganization(){
           if(!isValid(this.myOrganization)){
               this.myOrganization=new String();
           }
           return this.myOrganization;
       }

       get link(){
           if(!isValid(this.myLink)){
               this.myLink=new LinkElement();
           }
           return this.myLink;
       }

       set link(newValue){
           this.myLink=newValue;
           return this;
       }

       isEmpty(){
           let oVal=super.isEmpty();
           oVal=oVal && this.active.isEmpty();
           oVal=oVal && isEmptyDate(this.deceasedDateTime);
           oVal=oVal && isEmptyArray(this.address);
           oVal=oVal && this.animal.isEmpty();
           oVal=oVal && isEmptyDate(this.birthDate);
           oVal=oVal && this.communication.isEmpty();
           oVal=oVal && isEmpty(this.gender);
           oVal=oVal && isEmpty(this.generalPractitioner);
           oVal=oVal && isEmptyArray(this.identifier);
           oVal=oVal && this.link.isEmpty();
           oVal=oVal && this.maritalStatus.isEmpty();
           oVal=oVal && isEmptyDate(this.multipleBirthDateTime);
           oVal=oVal && isEmpty(this.managingOrganization);
           oVal=oVal && isEmpty(this.name);
           oVal=oVal && isEmpty(this.photo);
           oVal=oVal  && isEmptyArray(this.telecom);
           return oVal;
       }
   }


   class AnimalElement extends Object{
       constructor(){
           super();
       }


       get species(){

       }

       set species(newValue){

       }

       get breed(){

       }

       set breed(newValue){

       }

       get genderStatus(){


       }

       set genderStatus(newValue){

       }

       isEmpty(){
           return true;
       }
   }

   class LinkElement extends Object{
       constructor(root){
           super();

           if(isValid(root)){
               this.type=root.type;
               this.other=root.other;
           }
       }

       get other(){
           if(!isValid(this.myOther)){
               this.myOther=new _ReferenceDt();
           }
           return this.myOther;
       }

       set other(newValue){
           this.myOther=newValue;
           return this;
       }

       get type(){
           if(!isValid(this.myType)){
               this.myType=new String();
           }
           return this.myType;
       }

       set type(newValue){
           this.myType=newValue;
           return this;
       }

       isEmpty(){
           return this.other.isEmpty() && isEmpty(this.type);
       }
   }

   class ComunicationElement extends Object{
       constructor(){
           super();
       }

       get language(){

       }

       set language(newValue){

       }

       get preferred(){

       }

       set preferred(newValue){

       }

       isEmpty(){
           return true;
       }
   }

   const AddressDt=_AddressDt;
   const BooleanDt=_BooleanDt;
   const CodeableConceptDt=_CodeableConceptDt;
   const CodingDt=_CodingDt;
   const ContactPointDt=_ContactPointDt;
   const HumanNameDt=_HumanNameDt;
   const IdentifierDt=_IdentifierDt;
   const NarrativeDt=_NarrativeDt;
   const PeriodDt$1=_PeriodDt;
   const ReferenceDt=_ReferenceDt;

   const PatientResource=Patient;

   exports.AddressDt = AddressDt;
   exports.BooleanDt = BooleanDt;
   exports.CodeableConceptDt = CodeableConceptDt;
   exports.CodingDt = CodingDt;
   exports.ContactPointDt = ContactPointDt;
   exports.HumanNameDt = HumanNameDt;
   exports.IdentifierDt = IdentifierDt;
   exports.NarrativeDt = NarrativeDt;
   exports.PeriodDt = PeriodDt$1;
   exports.ReferenceDt = ReferenceDt;
   exports.PatientResource = PatientResource;

   Object.defineProperty(exports, '__esModule', { value: true });

})));
