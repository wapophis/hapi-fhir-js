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


        describe("ValueSet setters ",()=>{
            it('Testing field "type"...',()=>{
                let myInstance=new _AddressDt({type:"a"});
                expect(myInstance.getTypeElement().code,'Bad field "type"').to.equals("a") ;
                myInstance=new _AddressDt({type:"both"});
                expect(myInstance.getTypeElement()==AddressTypeEnum.BOTH,"Check enum relation for use").to.equal(true);
                myInstance.type=AddressTypeEnum.PHYSICAL.code;
                expect(myInstance.type===AddressTypeEnum.PHYSICAL.code,"Check enum relation for use").to.equal(true);
                });
           


            it('Testing field "use"...',()=>{
                let myInstance=new _AddressDt({use:"a"});
                expect(myInstance.getUseElement().code,'Bad field "type"').to.equals("a") ;
                myInstance=new _AddressDt({use:"home"});
                expect(myInstance.getUseElement()==AddressUseEnum.HOME,"Check enum relation for use").to.equal(true);
                myInstance.type=AddressUseEnum.TEMP.code;
                expect(myInstance.type===AddressUseEnum.TEMP.code,"Check enum relation for use").to.equal(true);
                });
            });
            

        describe("Field setters ",()=>{

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

            it('Testing field "city"...',()=>{
                let myInstance=new _AddressDt({city:"Testing text"});
                expect(myInstance.getCityElement().valueOf(),'Bad field "city"').to.equals("Testing text") ;
                expect(myInstance.getCityElement().valueOf(),'Bad field "city"').to.not.equals("Testin text") ;
                myInstance.city="Hola Mundo";
                expect(myInstance.getCityElement().valueOf(),'Bad field "city"').to.equals("Hola Mundo") ;
                expect(myInstance.getCityElement().valueOf(),'Bad field "city"').to.not.equals("Hol Mundo") ;
                myInstance.city=undefined;
                expect(myInstance.getCityElement().valueOf(),'Bad field "city"').to.equals(null) ;
                expect(myInstance.getCityElement().valueOf(),'Bad field "city"').to.not.equals("null") ;   
            });

            it('Testing field "district"...',()=>{
                let myInstance=new _AddressDt({district:"Testing text"});
                expect(myInstance.getDistrictElement().valueOf(),'Bad field "district"').to.equals("Testing text") ;
                expect(myInstance.getDistrictElement().valueOf(),'Bad field "district"').to.not.equals("Testin text") ;
                myInstance.district="Hola Mundo";
                expect(myInstance.getDistrictElement().valueOf(),'Bad field "district"').to.equals("Hola Mundo") ;
                expect(myInstance.getDistrictElement().valueOf(),'Bad field "district"').to.not.equals("Hol Mundo") ;
                myInstance.district=undefined;
                expect(myInstance.getDistrictElement().valueOf(),'Bad field "district"').to.equals(null) ;
                expect(myInstance.getDistrictElement().valueOf(),'Bad field "district"').to.not.equals("null") ;   
            });

            it('Testing field "state"...',()=>{
                let myInstance=new _AddressDt({state:"Testing text"});
                expect(myInstance.getStateElement().valueOf(),'Bad field "state"').to.equals("Testing text") ;
                expect(myInstance.getStateElement().valueOf(),'Bad field "state"').to.not.equals("Testin text") ;
                myInstance.state="Hola Mundo";
                expect(myInstance.getStateElement().valueOf(),'Bad field "state"').to.equals("Hola Mundo") ;
                expect(myInstance.getStateElement().valueOf(),'Bad field "state"').to.not.equals("Hol Mundo") ;
                myInstance.state=undefined;
                expect(myInstance.getStateElement().valueOf(),'Bad field "state"').to.equals(null) ;
                expect(myInstance.getStateElement().valueOf(),'Bad field "state"').to.not.equals("null") ;   
            });


            it('Testing field "postalCode"...',()=>{
                let myInstance=new _AddressDt({postalCode:"Testing text"});
                expect(myInstance.getPostalCodeElement().valueOf(),'Bad field "postalCode"').to.equals("Testing text") ;
                expect(myInstance.getPostalCodeElement().valueOf(),'Bad field "postalCode"').to.not.equals("Testin text") ;
                myInstance.postalCode="Hola Mundo";
                expect(myInstance.getPostalCodeElement().valueOf(),'Bad field "postalCode"').to.equals("Hola Mundo") ;
                expect(myInstance.getPostalCodeElement().valueOf(),'Bad field "postalCode"').to.not.equals("Hol Mundo") ;
                myInstance.postalCode=undefined;
                expect(myInstance.getPostalCodeElement().valueOf(),'Bad field "postalCode"').to.equals(null) ;
                expect(myInstance.getPostalCodeElement().valueOf(),'Bad field "postalCode"').to.not.equals("null") ;   
            });


            it('Testing field "country"...',()=>{
                let myInstance=new _AddressDt({country:"Testing text"});
                expect(myInstance.getCountryElement().valueOf(),'Bad field "country"').to.equals("Testing text") ;
                expect(myInstance.getCountryElement().valueOf(),'Bad field "country"').to.not.equals("Testin text") ;
                myInstance.country="Hola Mundo";
                expect(myInstance.getCountryElement().valueOf(),'Bad field "country"').to.equals("Hola Mundo") ;
                expect(myInstance.getCountryElement().valueOf(),'Bad field "country"').to.not.equals("Hol Mundo") ;
                myInstance.country=undefined;
                expect(myInstance.getCountryElement().valueOf(),'Bad field "country"').to.equals(null) ;
                expect(myInstance.getCountryElement().valueOf(),'Bad field "country"').to.not.equals("null") ;   
            });
            
        });


        describe("Composite types setters ",()=>{
            it('Testing composite "period" ...',()=>{
                let myInstance=new _AddressDt({period:{start:new Date(),end:new Date()}});
                let myPeriod=new _PeriodDt(myInstance.period);
                expect(myInstance.period).to.deep.equal(myPeriod.valueOf());
            });
        });
    });

   
    
});