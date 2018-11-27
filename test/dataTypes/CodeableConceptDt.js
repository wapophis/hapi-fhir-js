import { expect } from "chai"
import CodeableConceptDt from '../src/spi/dataTypes/CodeableConceptDt.js';
import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../src/utils/ValidationRules.js';

describe("CodeableConceptDt DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new CodeableConceptDt();
            expect(myInstance instanceof CodeableConceptDt,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myInstance=new CodeableConceptDt();
            expect(myInstance.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myInstance=new CodeableConceptDt({text:"text"});
            expect(myInstance.isEmpty()).to.equal(false);
        });

    });

    describe("Getters",()=>{     
        it("should return a safe object",()=>{
            let myInstance=new CodeableConceptDt();
            
            expect(isValid(myInstance.text)
            &&Array.isArray(myInstance.coding)
            );                    
        });

        it("should return an empty object",()=>{
            let myInstance=new CodeableConceptDt();
            
            expect(isEmpty(myInstance.text)
            &&isEmptyArray(myInstance.coding)
            );                    
        });
    });


    describe("Setters",()=>{     
        it("should set valid values",()=>{
            let myInstance=new CodeableConceptDt();
            
            expect(isValid(myInstance.coding=["uno","dos"])
            && isValid(myInstance.text="test")
            );
            
            expect(myInstance.text).to.equal("test");
            expect(myInstance.coding.length).to.equal(2);
            
        });

        it("should not fail with invalid values",()=>{
            let myInstance=new CodeableConceptDt();

            expect(isValid(myInstance.coding=undefined)
            && isValid(myInstance.text=undefined)
            );
            
            expect(isEmptyArray(myInstance.coding)
            &&isEmpty(myInstance.text)
            );               
        });
    });
    
});