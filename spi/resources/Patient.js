import {DomainResource} from '../DomainResource.js';
import {isUndefined,isValid,isEmpty,isEmptyArray} from '../../utils/ValidationRules.js';
import {HumanNameDt} from '../dataTypes/HumanDt.js';
import {IdentifierDt} from '../dataTypes/IdentifierDt.js';
import {ContactPointDt} from '../dataTypes/ContactPointDt.js';
import {AddressDt} from '../dataTypes/AddressDt.js';
import {AdministrativeGenderEnum} from '../valueSets/AdministrativeGenderEnum.js';


export class Patient extends DomainResource{
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
        return this.myIdentifer;
    }

    set identifier(newValue){
        this.myIdentifer=newValue;
        return this;
    }

    _addIdentifier(newValue){
        if(isValid(newValue)){
            this.identifier.push(newValue);
        }else{
            this.identifier.push(new IdentifierDt());
        }

        return this;
    }

    _getIdentifierFirstRep(){
        if(this.identifier.length<=0){
            this._addIdentifier();
        }
        if(typeof this.identifier[0]!=='identifierdt'){
            this.identifier[0]=new IdentifierDt(this.identifier[0]);
        }
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
            oVal.push(new HumanNameDt(this.myName[i]));
        }
        return oVal;
    }

    set name(newValue){
        this.myName=newValue;
        return this;
    }

    _addName(newValue){
        if(isValid(newValue)){
            this.name.push(new HumanNameDt(newValue));
        }else{
            this.name.push(new HumanNameDt());
        }
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
        try{
        if(!isValid(this.myTelecom))
        {
            this.myTelecom=new Array();
        }

        // Datatype transform
        if(this.myTelecom.length>0){
            let oVal=new Array();
            for(let i=0;i<this.myTelecom.length;i++){
                if(typeof this.myTelecom[i]!=='contactpointdt'){
                    oVal.push(new ContactPointDt(this.myTelecom[i]));
                }else{
                    oVal.push(this.myTelecom[i]);
                }
            }
            this.myTelecom=oVal;
        }
    }catch(error){console.error(error);}
        return this.myTelecom;
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

    set deceased(newValue){
        this.myDeceased=newValue;
        return this;
    }

    get deceased(){
        if(!isValid(this.myDeceased)){
            this.myDeceased=new Object();
        }
        return this.myDeceased;
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
            this.myMaritalStatus=new Object();
        }
        return this.myMaritalStatus;
    }

    get multipleBirth(){
        if(!isValid(this.myMultipleBirth)){
            this.myMultipleBirth=new Object();
        }
        return this.myMultipleBirth;
    }

    set multipleBirth(newValue){
        this.myMultipleBirth=newValue;
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
            this.myAnimal=new Object();
        }
        return this.myAnimal;
    }

    set communication(newValue){
        this.myCommunication=newValue;
        return this;
    }

    get communication(){
        if(!isValid(this.myCommunication)){
            this.myCommunication=new Object();
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
            this.myLink=new Object();
        }
        return this.myLink;
    }

    set link(newValue){
        this.myLink=newValue;
        return this;
    }

    isEmpty(){
        return super.isEmpty()
        && isEmpty(this.active)
        && isEmptyArray(this.address)
        && isEmpty(this.animal)
        && isEmpty(this.birthDate)
        && isEmpty(this.communication)
        && isEmpty(this.deceased)
        && isEmpty(this.gender)
        && isEmpty(this.generalPractitioner)
        && isEmptyArray(this.identifier)
        && isEmpty(this.link)
        && isEmpty(this.maritalStatus)
        && isEmpty(this.multipleBirth)
        && isEmpty(this.managingOrganization)
        && isEmpty(this.name)
        && isEmpty(this.photo)
        && isEmptyArray(this.telecom)
        && isEmpty(this.text);
    }


}