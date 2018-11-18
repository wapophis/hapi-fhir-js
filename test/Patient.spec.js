import { expect } from "chai";
import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../src/utils/ValidationRules.js';
import Patient from '../src/spi/resources/Patient.js';
import IdentifierDt from '../src/spi/dataTypes/IdentifierDt.js';
import HumanNameDt from '../src/spi/dataTypes/HumanNameDt.js';
import ContactPointDt from '../src/spi/dataTypes/ContactPointDt.js';

import AdministrativeGenderEnum from '../src/spi/valueSets/AdministrativeGenderEnum.js';

describe("FHIR Patient test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myPatient=new Patient();
            expect(myPatient instanceof Patient,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myPatient=new Patient();
            expect(myPatient.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myPatient=new Patient({id:"nhusa"});
            expect(myPatient.isEmpty()).to.equal(false);
        });

    });


    describe("Modifiers fields checking",()=>{     
        it("Every modifier field must exists in the model resource",()=>{
            let myPatient=new Patient();

            for(let propName in Patient.modifiers){
                expect(isValid(myPatient[propName]));
                expect(myPatient[propName] instanceof Patient.modifiers[propName].type,"bad type assert at "+propName+" field").to.equal(true);
            }    
           
        });
    });

    describe("Sumarized fields checking",()=>{
        it("Every summarized type must be correct in the model resource",()=>{
            let myPatient=new Patient();
            for(let propName in Patient.summarized){
                expect(isValid(myPatient[propName]));
                expect(myPatient[propName] instanceof Patient.summarized[propName].type,"bad type assert at "+propName+" field").to.equal(true);
            }                
        });

    });


describe("Patient.identifier FHIR BEHAVIOURS",()=>{

    describe("Default Object type is an array",()=>{
        it("Identifier field must return a valid array on empty constructor",()=>{
            let myPatient=new Patient();
            expect(Array.isArray(myPatient.getIdentifier())).to.equal(true);                
        });

        it("Identifier field must return a valid array on non empty constructor",()=>{
            let myPatient=new Patient({identifier:[{value:"testValue"}]});
            expect(Array.isArray(myPatient.getIdentifier())).to.equal(true);
            expect(myPatient.getIdentifierFirstRep().value,"Validty checking").to.equal("testValue");                
        });
    });

    describe("Adding identifier instance works..",()=>{
        it("Add empty identifier should return an IndentfierDt instance",()=>{
            let myPatient=new Patient();
            myPatient.addIdentifier(new IdentifierDt({value:"idTest"}));
            expect(myPatient.getIdentifier()[0].value,"checking asignation of value").to.equal("idTest");
            myPatient.getIdentifier()[0].value="newIdTest";
            expect(myPatient.getIdentifier()[0].value,"checking modification of value").to.equal("newIdTest");
            expect(myPatient.getIdentifierFirstRep() instanceof IdentifierDt,"checking type ").to.equal(true);
        });

        it("Checking valid non empty identifier existence",()=>{
            let myPatient=new Patient();            
            myPatient.addIdentifier(new IdentifierDt());
            expect(myPatient.hasIdentifier(),"Expect that this object has no identifiers").to.equal(false);
            myPatient.identifier=new Array();
            expect(myPatient.hasIdentifier(),"Expect that a new object has no identifiers").to.equal(false);
            myPatient.identifier=new Array(new IdentifierDt({value:"testIndentifier"}));
            expect(myPatient.hasIdentifier(),"Expect that a new object has identifiers").to.equal(true);
            expect(myPatient.getIdentifierFirstRep().value).to.equal("testIndentifier","Validity check..");

        });

    });
});

describe("Patient.name FHIR BEHAVIOURS",()=>{
    describe("Default Object type is an array",()=>{
        it("Name field must return a valid array on empty constructor",()=>{
            let myPatient=new Patient();
            expect(Array.isArray(myPatient.getName())).to.equal(true);                
        });

        it("Identifier field must return a valid array on non empty constructor",()=>{
            let myPatient=new Patient({name:[{given:"Luis"}]});
            expect(Array.isArray(myPatient.getName())).to.equal(true);                
        });
    });

    describe("Adding name instance works..",()=>{
        it("Add empty name should return an HumanNameDt instance",()=>{
            let myPatient=new Patient();
            myPatient.addIdentifier(new IdentifierDt({value:"idTest"}));
            expect(myPatient.getIdentifier()[0].value,"checking asignation of value").to.equal("idTest");
            myPatient.getIdentifier()[0].value="newIdTest";
            expect(myPatient.getIdentifier()[0].value,"checking modification of value").to.equal("newIdTest");
            expect(myPatient.getIdentifierFirstRep() instanceof IdentifierDt,"checking type ").to.equal(true);
        });

        it("Checking valid non empty name existence",()=>{
            let myPatient=new Patient();            
            myPatient.addName(new HumanNameDt());
            expect(myPatient.hasName(),"Expect that this object has no names").to.equal(false);
            myPatient.name=new Array();
            expect(myPatient.hasName(),"Expect that a new object has no names").to.equal(false);
            myPatient.name=new Array(new HumanNameDt({given:["testName"]}));
            expect(myPatient.hasName(),"Expect that a new object has names").to.equal(true);
            expect(myPatient.getNameFirstRep().getGivenFirstRep()).to.equal("testName","Validity check..");

        });

    });

});



describe("Patient.telecom FHIR BEHAVIOURS",()=>{
    describe("Default Object type is an array",()=>{
        it("Telecom field must return a valid array on empty constructor",()=>{
            let myPatient=new Patient();
            expect(Array.isArray(myPatient.getTelecom())).to.equal(true);                
        });

        it("Identifier field must return a valid array on non empty constructor",()=>{
            let myPatient=new Patient({telecom:[{value:"testTelecom"}]});
            expect(Array.isArray(myPatient.getTelecom())).to.equal(true);                
            expect(myPatient.getTelecomFirstRep().value,"Validity checking").to.equal("testTelecom");
        });
    });

    describe("Adding telecom instance works..",()=>{
        it("Add empty telecom should return an ContactPointDt instance",()=>{
            let myPatient=new Patient();
            myPatient.addTelecom(new ContactPointDt({value:"testTelecom"}));
            expect(myPatient.getTelecom()[0].value,"checking asignation of value").to.equal("testTelecom");
            myPatient.getTelecomFirstRep().value="newTestTelecom";
            expect(myPatient.getTelecom()[0].value,"checking modification of value").to.equal("newTestTelecom");
            expect(myPatient.getTelecomFirstRep() instanceof ContactPointDt,"checking type ").to.equal(true);
        });

        it("Checking valid non empty telecom existence",()=>{
            let myPatient=new Patient();            
            myPatient.addTelecom(new ContactPointDt());
            expect(myPatient.hasTelecom(),"Expect that this object has no names").to.equal(false);
            myPatient.telecom=new Array();
            expect(myPatient.hasTelecom(),"Expect that a new object has no names").to.equal(false);
            myPatient.getTelecomFirstRep().value="testTelecom";
            debugger;
            expect(myPatient.hasTelecom(),"Expect that a new object has names").to.equal(true);
            expect(myPatient.getTelecomFirstRep().value).to.equal("testTelecom","Validity check..");

        });

    });

});



describe("Patient.gender FHIR BEHAVIOURS",()=>{
        it("Empty gender after empty constructor",()=>{
            let myPatient=new Patient();
            expect(isEmpty(myPatient.getGender())).to.equal(true);                
        });

        it("Non Empty gender after proper constructor",()=>{
            let myPatient=new Patient({gender:"male"});
            expect(myPatient.getGender().value).to.equal("male");                
        });


        it("Proper male mapping for enum values..",()=>{
            let myPatient=new Patient({gender:"male"});
            expect(myPatient.getGender()).to.equal(AdministrativeGenderEnum.MALE);                
        });

        it("Proper female mapping for enum values..",()=>{
            let myPatient=new Patient({gender:"female"});
            expect(myPatient.getGender()).to.equal(AdministrativeGenderEnum.FEMALE);                
        });
        it("Proper other mapping for enum values..",()=>{
            let myPatient=new Patient({gender:"other"});
            expect(myPatient.getGender()).to.equal(AdministrativeGenderEnum.OTHER);                
        });
        it("Proper unknown mapping for enum values..",()=>{
            let myPatient=new Patient({gender:"unknown"});
            expect(myPatient.getGender()).to.equal(AdministrativeGenderEnum.UNKNOWN);                
        });
        





    });



//// /////    
});