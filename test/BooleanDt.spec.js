import { expect } from "chai"
import BooleanDt from '../src/spi/dataTypes/BooleanDt.js';



import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../src/utils/ValidationRules.js';

describe("BooleanDt DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new BooleanDt();
            expect(myInstance instanceof BooleanDt,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myInstance=new BooleanDt();
            expect(myInstance.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myInstance=new BooleanDt(true);
            expect(myInstance.isEmpty()).to.equal(false);
        });

    });

   
    
});