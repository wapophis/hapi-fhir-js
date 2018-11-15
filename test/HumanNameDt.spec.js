import { expect } from "chai"
import HumanNameDt from '../src/spi/dataTypes/HumanNameDt.js';
import PeriodDt from '../src/spi/dataTypes/PeriodDt.js';

import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../src/utils/ValidationRules.js';

describe("HumanNameDt DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new HumanNameDt();
            expect(myInstance instanceof HumanNameDt,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myInstance=new HumanNameDt();
            expect(myInstance.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myInstance=new HumanNameDt({text:"text"});
            expect(myInstance.isEmpty()).to.equal(false);
        });

    });

    describe("Getters",()=>{     
        it("should return a safe object",()=>{
            let myInstance=new HumanNameDt();
            
            expect(isValid(myInstance.text)
            &&isValid(myInstance.family)
            &&isValid(myInstance.given)
            &&isValid(myInstance.prefix)
            &&isValid(myInstance.suffix)
            &&isValid(myInstance.use)
            &&isValid(myInstance.period)
            );                    
        });

        it("should return an empty object",()=>{
            let myInstance=new HumanNameDt();
            
            expect(isEmpty(myInstance.text)
            &&isEmptyArray(myInstance.given)
            &&isEmpty(myInstance.family)
            &&isEmptyArray(myInstance.prefix)
            &&isEmptyArray(myInstance.suffix)
            &&isEmpty(myInstance.use)
            &&myInstance.period.isEmpty()
            );                    
        });
    });


    describe("Setters",()=>{     
        it("should set valid values",()=>{
            let myInstance=new HumanNameDt();
            
            expect(isValid(myInstance.text="test")
            && isValid(myInstance.addGiven("test"))
            && isValid(myInstance.use="usual")
            && isValid(myInstance.family="test")
            && isValid(myInstance.addPrefix("test"))
            && isValid(myInstance.addSuffix("test"))
            && isValid(myInstance.period=new PeriodDt())
            );
            
            expect(myInstance.text).to.equal("test");
            expect(myInstance.given.toString()).to.equal(["test"].toString());
            expect(myInstance.family).to.equal("test");
            expect(myInstance.prefix.toString()).to.equal(["test"].toString());
            expect(myInstance.suffix.toString()).to.equal(["test"].toString());
            expect(myInstance.use.value).to.equal("usual");
            expect(true).to.equal(myInstance.period.equals(new PeriodDt()));
            
        });

        it("should not fail with invalid values",()=>{
            let myInstance=new HumanNameDt();
            
            expect(isValid(myInstance.text=undefined)
            && isValid(myInstance.addGiven(undefined))
            && isValid(myInstance.use=undefined)
            && isValid(myInstance.family=undefined)
            && isValid(myInstance.addPrefix(undefined))
            && isValid(myInstance.addSuffix(undefined))
            && isValid(myInstance.period=undefined)
            );
            
            expect(isEmpty(myInstance.text)
            &&isEmptyArray(myInstance.given)
            &&isEmpty(myInstance.family)
            &&isEmptyArray(myInstance.prefix)
            &&isEmptyArray(myInstance.suffix)
            &&isEmpty(myInstance.use)
            &&myInstance.period.isEmpty()
            );                     
        });
    });
    
});