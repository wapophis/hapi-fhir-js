import { expect } from "chai"
import ContactPointDt from '../../src/spi/dataTypes/ContactPointDt.js';
import CodingDt from '../../src/spi/dataTypes/CodingDt.js';

import ContactPointSystemEnum from '../../src/spi/valueSets/ContactPointSystemEnum.js';
import ContactPointUseEnum from '../../src/spi/valueSets/ContactPointUseEnum.js';

import PeriodDt from '../../src/spi/dataTypes/PeriodDt.js'; 


import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../../src/utils/ValidationRules.js';

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

            it('Testing field "system"...',()=>{
                let myInstance=new ContactPointDt({system:"phone"});
                expect(myInstance.getSystemElement().valueOf(),'Bad field "type"').to.deep.equal(ContactPointSystemEnum.PHONE.valueOf()) ;
                myInstance.system="Hola Mundo";
                expect(myInstance.getSystemElement().valueOf(),'Bad field "type"').to.deep.equal(new CodingDt({code:"Hola Mundo"}).valueOf()) ;
                // Update codingDt value to a correct code value into system element don't update
                // his underliying element system to correct value from the enum. Use object.system to 
                // control this.
                myInstance.getSystemElement().code="email";
                expect(myInstance.getSystemElement().valueOf(),'Bad field "type"').to.deep.equal(new CodingDt({code:"email"}).valueOf()) ;
            });

            it('Testing field "use"...',()=>{
                let myInstance=new ContactPointDt({use:"home"});
                expect(myInstance.getUseElement().valueOf(),'Bad field "type"').to.deep.equal(ContactPointUseEnum.HOME.valueOf()) ;
                myInstance.use="Hola Mundo";
                expect(myInstance.getUseElement().valueOf(),'Bad field "type"').to.deep.equal(new CodingDt({code:"Hola Mundo"}).valueOf()) ;
                // Update codingDt value to a correct code value into system element don't update
                // his underliying element system to correct value from the enum. Use object.system to 
                // control this.
                myInstance.getUseElement().code="work";
                expect(myInstance.getUseElement().valueOf(),'Bad field "type"').to.deep.equal(new CodingDt({code:"work"}).valueOf()) ;
            });

        });

        describe("Field setters  ",()=>{
            it('Testing field "value"...',()=>{
                let myInstance=new ContactPointDt({value:"Testing text"});
                expect(myInstance.getValueElement().valueOf(),'Bad field "value"').to.equals("Testing text") ;
                expect(myInstance.getValueElement().valueOf(),'Bad field "value"').to.not.equals("Testin text") ;
                myInstance.value="Hola Mundo";
                expect(myInstance.getValueElement().valueOf(),'Bad field "value"').to.equals("Hola Mundo") ;
                expect(myInstance.getValueElement().valueOf(),'Bad field "value"').to.not.equals("Hol Mundo") ;
                myInstance.value=undefined;
                expect(myInstance.getValueElement().valueOf(),'Bad field "value"').to.equals(null) ;
                expect(myInstance.getValueElement().valueOf(),'Bad field "value"').to.not.equals("null") ;   
            });

            it('Testing field "rank"...',()=>{
                let myInstance=new ContactPointDt({rank:"Testing text"});
                expect(myInstance.getRankElement().valueOf(),'Bad field "rank"').to.equals("Testing text") ;
                expect(myInstance.getRankElement().valueOf(),'Bad field "rank"').to.not.equals("Testin text") ;
                myInstance.rank="Hola Mundo";
                expect(myInstance.getRankElement().valueOf(),'Bad field "rank"').to.equals("Hola Mundo") ;
                expect(myInstance.getRankElement().valueOf(),'Bad field "rank"').to.not.equals("Hol Mundo") ;
                myInstance.rank=undefined;
                expect(myInstance.getRankElement().valueOf(),'Bad field "rank"').to.equals(null) ;
                expect(myInstance.getRankElement().valueOf(),'Bad field "rank"').to.not.equals("null") ;   
            });

        });

        describe("Composite types setters ",()=>{
            it('Testing composite "period" ...',()=>{
                let myInstance=new ContactPointDt({period:{start:new Date(),end:new Date()}});
                let myPeriod=new PeriodDt(myInstance.period);
                expect(myInstance.period).to.deep.equal(myPeriod.valueOf());
            });
            
        });   
    
    });
});