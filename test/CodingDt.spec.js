import { expect } from "chai"
import CodingDt from '../src/spi/dataTypes/CodingDt.js';
import BooleanDt from '../src/spi/dataTypes/BooleanDt.js';
import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../src/utils/ValidationRules.js';

describe("CodingDt DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new CodingDt();
            expect(myInstance instanceof CodingDt,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myInstance=new CodingDt();
            expect(myInstance.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myInstance=new CodingDt({display:"text"});
            debugger;
            expect(myInstance.isEmpty()).to.equal(false);
        });

    });

    describe("Getters",()=>{     
        it("should return a safe object",()=>{
            let myInstance=new CodingDt();
            
            expect(isValid(myInstance.system)
            &&isValid(myInstance.version)
            &&isValid(myInstance.code)
            &&isValid(myInstance.display)
            &&isValid(myInstance.userSelected)
            );                    
        });

        it("should return an empty object",()=>{
            let myInstance=new CodingDt();
            
            expect(isEmpty(myInstance.system)
            &&isEmpty(myInstance.version)
            &&isEmpty(myInstance.code)
            &&isEmpty(myInstance.display)
            &&isEmpty(myInstance.userSelected)
            );                    
        });
    });


    describe("Setters",()=>{     
        it("should set valid values",()=>{
            let myInstance=new CodingDt();
            
            expect(isValid(myInstance.system="test")
            && isValid(myInstance.version="test")
            && isValid(myInstance.code="test")
            && isValid(myInstance.display="test")
            && isValid(myInstance.userSelected=true)
            );
            
            expect(myInstance.system).to.equal("test");
            expect(myInstance.version).to.equal("test");
            expect(myInstance.code).to.equal("test");
            expect(myInstance.display).to.equal("test");
            expect(myInstance.userSelected).to.equal(true);
            
            
        });

        it("should not fail with invalid values",()=>{
            let myInstance=new CodingDt();
            
            expect(isValid(myInstance.system=undefined)
            && isValid(myInstance.version=undefined)
            && isValid(myInstance.code=undefined)
            && isValid(myInstance.display=undefined)
            && isValid(myInstance.userSelected=undefined)
            );
            
            expect(isEmpty(myInstance.system)
            &&isEmpty(myInstance.version)
            &&isEmpty(myInstance.code)
            &&isEmpty(myInstance.display)
            &&isEmpty(myInstance.userSelected)
            );            
        });
    });
    
});