import { expect } from "chai"
import PeriodDt from '../../src/spi/dataTypes/PeriodDt.js';
import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../../src/utils/ValidationRules.js';

describe("PeriodDt DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new PeriodDt();
            expect(myInstance instanceof PeriodDt,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myInstance=new PeriodDt();
            expect(myInstance.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myInstance=new PeriodDt({start:new Date()});
            expect(myInstance.isEmpty()).to.equal(false);
        });

    });

    describe("Getters",()=>{     
        it("should return a safe object",()=>{
            let myInstance=new PeriodDt();
            
            expect(isValid(myInstance.start)
            &&isValid(myInstance.end)
            );                    
        });

        it("should return an empty object",()=>{
            let myInstance=new PeriodDt();
            
            expect(isEmptyDate(myInstance.start)
            &&isEmptyDate(myInstance.end)
            );                    
        });
    });


    describe("Setters",()=>{     
        it("should set valid values",()=>{
            let myInstance=new PeriodDt();
            let myDate=new Date();
            expect(isValid(myInstance.start=myDate)
            && isValid(myInstance.end=myDate)
            );
            
            expect(myInstance.start).to.equal(myDate);
            expect(myInstance.end).to.equal(myDate);
            
        });

        it("should not fail with invalid values",()=>{
            let myInstance=new PeriodDt();

            expect(isValid(myInstance.start=undefined)
            && isValid(myInstance.end=undefined)
            );
            
            expect(isEmptyDate(myInstance.start)
            &&isEmptyDate(myInstance.end)
            );               
        });
    });
    
});