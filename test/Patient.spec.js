import { expect } from "chai";
import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../src/utils/ValidationRules.js';
import Patient from '../src/spi/resources/Patient.js';

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
});