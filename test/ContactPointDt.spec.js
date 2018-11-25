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


    describe("UnitTests",()=>{
        describe("ValueSet setters ",()=>{

        });

        describe("Field setters  ",()=>{
            
        });

        describe("Composite types setters ",()=>{
            
        });

    });

    
    
});