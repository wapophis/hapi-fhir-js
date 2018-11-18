import { expect } from "chai";
import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../src/utils/ValidationRules.js';
import Patient from '../src/spi/resources/Patient.js';
import IdentifierDt from '../src/spi/dataTypes/IdentifierDt.js';
import HumanNameDt from '../src/spi/dataTypes/HumanNameDt.js';

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

   

//// /////
    
});