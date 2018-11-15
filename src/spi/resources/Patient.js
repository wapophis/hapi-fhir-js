import DomainResource from '../DomainResource.js';
import {isUndefined,isValid,isEmpty,isEmptyArray,isEmptyDate} from '../../utils/ValidationRules.js';
import HumanNameDt from '../dataTypes/HumanNameDt.js';
import IdentifierDt from '../dataTypes/IdentifierDt.js';
import ContactPointDt from '../dataTypes/ContactPointDt.js';
import AddressDt from '../dataTypes/AddressDt.js';
import CodeableConceptDt from '../dataTypes/CodeableConceptDt.js';
import ReferenceDt from '../dataTypes/ReferenceDt.js';

import {AdministrativeGenderEnum} from '../valueSets/AdministrativeGenderEnum.js';



export default class Patient extends DomainResource{
    constructor(root){
        super(root);

        if(isValid(root)){
            try{
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
            }catch(error){
                console.error(error);
            }
        }

    }

    get identifier(){
        if(!isValid(this.myIdentifer)){
            this.myIdentifer=new Array();
        }

        let oVal=new Array();
        for(let i=0;i<this.myIdentifer.length;i++){
            if(this.myIdentifer[i] instanceof IdentifierDt){
                oVal.push(this.myIdentifer[i]);
                
            }else{
                oVal.push(new IdentifierDt(this.myIdentifer[i]));
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
            let oVal=new IdentifierDt();
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
            this.myActive=new Boolean();
        }
        return this.myActive;
    }

    get name(){
        if(!Array.isArray(this.myName) || !isValid(this.myName)){
            this.myName=new Array();
        }
        let oVal=new Array();
        for(let i=0;i<this.myName.length;i++){
            if(this.myName[i] instanceof HumanNameDt){
                oVal.push(this.myName[i]);
            }else{
                oVal.push(new HumanNameDt(this.myName[i]));
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
            let oVal=new HumanNameDt();
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
            if(this.myTelecom[i] instanceof ContactPointDt){
                oVal.push(this.myTelecom[i]);
            }else{
                oVal.push(new ContactPointDt(this.myTelecom[i]));
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
            oVal.push(new AddressDt(this.myAddress[i]));
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
            this.myMaritalStatus=new CodeableConceptDt();
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
        oVal=oVal && isEmptyDate(this.deceasedDateTime);
        oVal=oVal && isEmptyArray(this.address)
        oVal=oVal && this.animal.isEmpty();
        oVal=oVal && isEmptyDate(this.birthDate)
        oVal=oVal && this.communication.isEmpty();
        oVal=oVal && isEmpty(this.gender)
        oVal=oVal && isEmpty(this.generalPractitioner)
        oVal=oVal && isEmptyArray(this.identifier)
        oVal=oVal && this.link.isEmpty();
        oVal=oVal && this.maritalStatus.isEmpty();
        oVal=oVal && isEmptyDate(this.multipleBirthDateTime)
        oVal=oVal && isEmpty(this.managingOrganization)
        oVal=oVal && isEmpty(this.name)
        oVal=oVal && isEmpty(this.photo)
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
            this.myOther=new ReferenceDt();
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