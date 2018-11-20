import { expect } from "chai"
import NarrativeDt from '../src/spi/dataTypes/NarrativeDt.js';


import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../src/utils/ValidationRules.js';

describe("NarrativeDt DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new NarrativeDt();
            expect(myInstance instanceof NarrativeDt,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myInstance=new NarrativeDt();
            expect(myInstance.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myInstance=new NarrativeDt({div:"test"});
            expect(myInstance.isEmpty()).to.equal(false);
        });

    });

    describe("Getters",()=>{     
        it("should return a safe object",()=>{
            let myInstance=new NarrativeDt();
            
            expect(isValid(myInstance.status)
            &&isValid(myInstance.div)
            );                    
        });

        it("should return an empty object",()=>{
            let myInstance=new NarrativeDt();
            
            expect(isEmpty(myInstance.status)
            &&isEmpty(myInstance.div)
            );                    
        });
    });


    describe("Setters",()=>{     
        it("should set valid values",()=>{
            let myInstance=new NarrativeDt();
            
            expect(isValid(myInstance.status="generated")
            &&isValid(myInstance.div="test")
            );     
            
            expect(myInstance.status.value).to.equal("generated");
            expect(myInstance.div).to.equal("test");
            
        });

        it("should not fail with invalid values",()=>{
            let myInstance=new NarrativeDt();

            expect(isValid(myInstance.status=undefined)
            &&isValid(myInstance.div=undefined)
            );     
            
            expect(isEmpty(myInstance.status)
            &&isEmpty(myInstance.div)
            );             
        });
    });
    
});