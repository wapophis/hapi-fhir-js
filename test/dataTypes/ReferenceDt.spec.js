import { expect } from "chai"
import ReferenceDt from '../src/spi/dataTypes/ReferenceDt.js';
import IdentifierDt from '../src/spi/dataTypes/IdentifierDt.js';


import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../src/utils/ValidationRules.js';

describe("ReferenceDt DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new ReferenceDt();
            expect(myInstance instanceof ReferenceDt,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myInstance=new ReferenceDt();
            expect(myInstance.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myInstance=new ReferenceDt({reference:"test"});
            expect(myInstance.isEmpty()).to.equal(false);
        });

    });

    describe("Getters",()=>{     
        it("should return a safe object",()=>{
            let myInstance=new ReferenceDt();
            
            expect(isValid(myInstance.reference)
            &&isValid(myInstance.display)
            &&isValid(myInstance.identifier)
            );                    
        });

        it("should return an empty object",()=>{
            let myInstance=new ReferenceDt();
            
            expect(isEmpty(myInstance.reference)
            &&isEmpty(myInstance.display)
            &&isEmpty(myInstance.identifier)
            );                    
        });
    });


    describe("Setters",()=>{     
        it("should set valid values",()=>{
            let myInstance=new ReferenceDt();
            expect(isValid(myInstance.reference="test")
            &&isValid(myInstance.identifier=new IdentifierDt({value:"test"}))
            &&isValid(myInstance.display="test")
            );     
            expect(myInstance.reference).to.equal("test");
            expect(myInstance.display).to.equal("test");
            expect(myInstance.identifier.value).to.equal("test");
            
        });

        it("should not fail with invalid values",()=>{
            let myInstance=new ReferenceDt();

            expect(isValid(myInstance.reference=undefined)
            &&isValid(myInstance.identifier=undefined)
            &&isValid(myInstance.display=undefined)
            );       
            
            expect(isEmpty(myInstance.reference)
            &&isEmpty(myInstance.display)
            &&isEmpty(myInstance.identifier)
            );               
        });
    });
    
});