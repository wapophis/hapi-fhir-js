import { expect } from "chai"
import IdDt from '../../src/spi/dataTypes/IdDt.js';

import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../../src/utils/ValidationRules.js';

describe("IdDt DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new IdDt();
            expect(myInstance instanceof IdDt,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myInstance=new IdDt();
            expect(myInstance.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myInstance=new IdDt({id:100});
            expect(myInstance.isEmpty()).to.equal(false);
        });

    });

    describe("Fields Setters & Getters",()=>{     
        it("Id field ..",()=>{
            let myInstance=new IdDt({id:"AAA-BA-DS-F-S"
            ,baseUrl:"http://someurlforexample.com"
            ,resourceType:"Zombie"
            ,versionId:-1
            });
            expect(myInstance instanceof IdDt,true);  
            expect(myInstance.valueOf()).deep.equal({id:"AAA-BA-DS-F-S"
            ,baseUrl:"http://someurlforexample.com"
            ,resourceType:"Zombie"
            ,versionId:-1
            });               
        });

    });

   
    
});