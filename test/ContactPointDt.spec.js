import { expect } from "chai"
import ContactPointDt from '../src/spi/dataTypes/ContactPointDt.js';
import PeriodDt from '../src/spi/dataTypes/PeriodDt.js'; 

import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../src/utils/ValidationRules.js';

describe("ContactPointDt DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new ContactPointDt();
            expect(myInstance instanceof ContactPointDt,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myInstance=new ContactPointDt();
            expect(myInstance.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myInstance=new ContactPointDt({value:"text"});
            expect(myInstance.isEmpty()).to.equal(false);
        });

    });

    describe("Getters",()=>{     
        it("should return a safe object",()=>{
            let myInstance=new ContactPointDt();
            
            expect(isValid(myInstance.system)
            &&isValid(myInstance.value)
            &&isValid(myInstance.use)
            &&isValid(myInstance.rank)
            &&isValid(myInstance.period)
            );                    
        });

        it("should return an empty object",()=>{
            let myInstance=new ContactPointDt();
            
            expect(isEmpty(myInstance.system)
            &&isEmpty(myInstance.value)
            &&isEmpty(myInstance.use)
            &&isEmpty(myInstance.rank)
            &&myInstance.period.isEmpty()
            );                    
        });
    });


    describe("Setters",()=>{     
        it("should set valid values",()=>{
            let myInstance=new ContactPointDt();
            
            expect(isValid(myInstance.system="test")
            && isValid(myInstance.value="test")
            && isValid(myInstance.use="home")
            && isValid(myInstance.rank=1)
            && isValid(myInstance.period=new PeriodDt())
            );
            
            expect(myInstance.system).to.equal("test");
            expect(myInstance.value).to.equal("test");
            expect(myInstance.use.value).to.equal("home");
            expect(myInstance.rank).to.equal(1);
            expect(true).to.equal(myInstance.period.equals(new PeriodDt()));
            
        });

        it("should not fail with invalid values",()=>{
            let myInstance=new ContactPointDt();
            
            expect(isValid(myInstance.system=undefined)
            && isValid(myInstance.value=undefined)
            && isValid(myInstance.use=undefined)
            && isValid(myInstance.rank=undefined)
            && isValid(myInstance.period=undefined)
            );
            
            expect(isEmpty(myInstance.system)
            &&isEmpty(myInstance.value)
            &&isEmpty(myInstance.use)
            &&isEmpty(myInstance.rank)
            &&myInstance.period.isEmpty()
            );            
        });
    });
    
});