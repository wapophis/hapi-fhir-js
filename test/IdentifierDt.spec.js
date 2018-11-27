import { expect } from "chai"
import IdentifierDt from '../src/spi/dataTypes/IdentifierDt.js';
import PeriodDt from '../src/spi/dataTypes/PeriodDt.js';
import ReferenceDt from '../src/spi/dataTypes/ReferenceDt.js';
import CodeableConceptDt from '../src/spi/dataTypes/CodeableConceptDt.js';

import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../src/utils/ValidationRules.js';

describe("IdentifierDt DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new IdentifierDt();
            expect(myInstance instanceof IdentifierDt,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myInstance=new IdentifierDt();
            expect(myInstance.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myInstance=new IdentifierDt({use:"usual"});
            expect(myInstance.isEmpty()).to.equal(false);
        });

    });

    describe("Getters",()=>{     
        it("should return a safe object",()=>{
            let myInstance=new IdentifierDt();
            
            expect(isValid(myInstance.use)
            &&isValid(myInstance.assigner)
            &&isValid(myInstance.system)
            &&isValid(myInstance.type)
            &&isValid(myInstance.value)
            &&isValid(myInstance.period)
            );                    
        });

        it("should return an empty object",()=>{
            let myInstance=new IdentifierDt();
            
            expect(isEmpty(myInstance.use)
            &&isEmptyArray(myInstance.assigner)
            &&isEmpty(myInstance.system)
            &&isEmptyArray(myInstance.type)
            &&isEmptyArray(myInstance.value)
            &&myInstance.period.isEmpty()
            );                    
        });
    });


    describe("Setters",()=>{     
        it("should set valid values",()=>{
            let myInstance=new IdentifierDt();
            
            expect(isValid(myInstance.use="usual")
            &&isValid(myInstance.assigner=new ReferenceDt({display:"test"}))
            &&isValid(myInstance.system="test")
            &&isValid(myInstance.type=new CodeableConceptDt({text:"test"}))
            &&isValid(myInstance.value="test")
            &&isValid(myInstance.period=new PeriodDt())
            );     
            
            expect(myInstance.use.value).to.equal("usual");
            expect(myInstance.assigner.display).to.equal("test");
            expect(myInstance.system).to.equal("test");
            expect(myInstance.type.text).to.equal("test");
            expect(myInstance.value).to.equal("test");
            expect(true).to.equal(myInstance.period.equals(new PeriodDt()));
            
        });

        it("should not fail with invalid values",()=>{
            let myInstance=new IdentifierDt();

            expect(isValid(myInstance.use=undefined)
            &&isValid(myInstance.assigner=undefined)
            &&isValid(myInstance.system=undefined)
            &&isValid(myInstance.type=undefined)
            &&isValid(myInstance.value=undefined)
            &&isValid(myInstance.period=undefined)
            );     
            expect(isEmpty(myInstance.use)
            &&isEmptyArray(myInstance.assigner)
            &&isEmpty(myInstance.system)
            &&isEmptyArray(myInstance.type)
            &&isEmptyArray(myInstance.value)
            &&myInstance.period.isEmpty()
            );              
        });
    });
    
});