import { expect } from "chai"
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

    })
});