import { expect } from "chai"
import _AddressDt from '../src/spi/dataTypes/AddressDt.js';
import _PeriodDt from '../src/spi/dataTypes/PeriodDt.js';
import CodingDt from '../src/spi/dataTypes/CodingDt.js';
import StringDt from '../src/spi/dataTypes/StringDt.js';
import {isValid,isEmpty,isEmptyArray} from '../src/utils/ValidationRules.js';

import AddressTypeEnum from '../src/spi/valueSets/AddressTypeEnum.js';
import AddressUseEnum from '../src/spi/valueSets/AddressUseEnum.js';

describe("Address DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new _AddressDt();
            expect(myInstance instanceof _AddressDt,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myInstance=new _AddressDt();
            expect(myInstance.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myInstance=new _AddressDt({use:"home"});
            expect(myInstance.isEmpty()).to.equal(false);
        });

    });

    describe("Unit tests",()=>{
        it("testSetUse | Should allow set use field value",()=>{
            let myInstance=new _AddressDt({use:"home"});
            expect(myInstance.getUseElement()===AddressUseEnum.HOME,"Check enum relation after set use by constructor arguments").to.equal(true);
            expect(myInstance.use===AddressUseEnum.HOME.code,"Check field value equality after setter in constructor").to.equal(true);
            myInstance.setUse(AddressUseEnum.WORK);            
            expect(myInstance.getUseElement()===AddressUseEnum.WORK,"Check enum relation for use after set use by setUse method").to.equal(true);        
            expect(myInstance.use===AddressUseEnum.WORK.code,"Check field value equality after setter in setUse method").to.equal(true);
            myInstance.use="old";            
            expect(myInstance.getUseElement()===AddressUseEnum.OLD,"Check enum relation for use after direct field value ").to.equal(true);
            expect(myInstance.use===AddressUseEnum.OLD.code,"Check field value equality after set direct field").to.equal(true);
            
        });


        it("testSetUse | Should allow set use field to an unknown enum value ",()=>{
            debugger;
            let myInstance=new _AddressDt({use:"a"});
            expect(myInstance.getUseElement().equals(new CodingDt({code:"a"})),"Check enum relation after set use by constructor arguments").to.equal(true);
        });


        it("testSetType",()=>{
            let myInstance=new _AddressDt({type:"both"});
            expect(myInstance.getTypeElement()==AddressTypeEnum.BOTH,"Check enum relation for use").to.equal(true);
            myInstance.type=AddressTypeEnum.PHYSICAL.code;
            expect(myInstance.type===AddressTypeEnum.PHYSICAL.code,"Check enum relation for use").to.equal(true);
        });


        describe("Array setters ",()=>{
            it('Testing field "line"...',()=>{
            let myInstance=new _AddressDt({line:[new StringDt("a"),new StringDt("b"),new StringDt("c")]});
            expect(myInstance.line.length,'Testing length from field array').to.equals(3) ;
            expect(myInstance.getLineFirstRep().valueOf(),'Testing first element').to.equals(new StringDt("a").valueOf());
            expect(myInstance.line[1].valueOf(),'Testing second element').to.equals(new StringDt("b").valueOf());            
            expect(myInstance.line[2].valueOf(),'Testing third element').to.equals(new StringDt("c").valueOf());
            // ADDLINE  string
            myInstance.addLine("d");
            expect(myInstance.line.length,'Testing length from field array').to.equals(4) ;
            expect(myInstance.line[3].valueOf(),'Testing first element').to.equals(new StringDt("d").valueOf());
            // EMPTY ADDLINE
            myInstance.addLine().value="e";
            expect(myInstance.line.length,'Testing length from field array').to.equals(5) ;
            expect(myInstance.line[4].valueOf(),'Testing first element').to.equals(new StringDt("e").valueOf());
            // ADDLINE STRINGDT
            myInstance.addLine(new StringDt("f"));
            expect(myInstance.line.length,'Testing length from field array').to.equals(6) ;
            expect(myInstance.line[5].valueOf(),'Testing first element').to.equals(new StringDt("f").valueOf());           
         });
        });

        describe("Field setters ",()=>{
            it('Testing field "type"...',()=>{
            let myInstance=new _AddressDt({type:"a"});
            expect(myInstance.getTypeElement().code,'Bad field "type"').to.equals("a") ;
            myInstance=new _AddressDt({type:"both"});
            expect(myInstance.getTypeElement()==AddressTypeEnum.BOTH,"Check enum relation for use").to.equal(true);
            myInstance.type=AddressTypeEnum.PHYSICAL.code;
            expect(myInstance.type===AddressTypeEnum.PHYSICAL.code,"Check enum relation for use").to.equal(true);
            });

            it('Testing field "text"...',()=>{
                let myInstance=new _AddressDt({text:"Testing text"});
                expect(myInstance.getTextElement().valueOf(),'Bad field "text"').to.equals("Testing text") ;
                expect(myInstance.getTextElement().valueOf(),'Bad field "text"').to.not.equals("Testin text") ;
                myInstance.text="Hola Mundo";
                expect(myInstance.getTextElement().valueOf(),'Bad field "text"').to.equals("Hola Mundo") ;
                expect(myInstance.getTextElement().valueOf(),'Bad field "text"').to.not.equals("Hol Mundo") ;
                myInstance.text=undefined;
                expect(myInstance.getTextElement().valueOf(),'Bad field "text"').to.equals(null) ;
                expect(myInstance.getTextElement().valueOf(),'Bad field "text"').to.not.equals("null") ;   
            });
            
        });
    });

   
    
});