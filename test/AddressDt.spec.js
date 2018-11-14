import { expect } from "chai"
import AddressDt from '../src/spi/dataTypes/AddressDt.js';
import PeriodDt from '../src/spi/dataTypes/PeriodDt.js';
import {isValid,isEmpty,isEmptyArray} from '../src/utils/ValidationRules.js';

describe("Address DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new AddressDt();
            expect(myInstance instanceof AddressDt,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myInstance=new AddressDt();
            expect(myInstance.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myInstance=new AddressDt({use:"home"});
            expect(myInstance.isEmpty()).to.equal(false);
        });

    });

    describe("Getters",()=>{     
        it("should return a safe object",()=>{
            let myInstance=new AddressDt();
            
            expect(isValid(myInstance.use)
            &&isValid(myInstance.type)
            &&isValid(myInstance.text)
            &&isValid(myInstance.line)
            &&isValid(myInstance.city)
            &&isValid(myInstance.district)
            &&isValid(myInstance.state)
            &&isValid(myInstance.postalCode)
            &&isValid(myInstance.country)
            &&isValid(myInstance.period)
            );                    
        });

        it("should return an empty object",()=>{
            let myInstance=new AddressDt();
            
            expect(isEmpty(myInstance.use)
            &&isEmpty(myInstance.type)
            &&isEmpty(myInstance.text)
            &&isEmptyArray(myInstance.line)
            &&isEmpty(myInstance.city)
            &&isEmpty(myInstance.district)
            &&isEmpty(myInstance.state)
            &&isEmpty(myInstance.postalCode)
            &&isEmpty(myInstance.country)
            &&isEmpty(myInstance.period)
            );                    
        });
    });


    describe("Setters",()=>{     
        it("should set valid values",()=>{
            let myInstance=new AddressDt();
            
            expect(isValid(myInstance.use="home")
            &&isValid(myInstance.type="both")
            &&isValid(myInstance.text="text")
            &&isValid(myInstance.line=["uno","dos","tres"])
            &&isValid(myInstance.city="Córdoba")
            &&isValid(myInstance.district="Sevilla")
            &&isValid(myInstance.state="Andalucia")
            &&isValid(myInstance.postalCode=41930)
            &&isValid(myInstance.country="España")
            &&isValid(myInstance.period=new PeriodDt())
            );
            
            expect(myInstance.use.value).to.equal("home");
            expect(myInstance.type.value).to.equal("both");
            expect(myInstance.text).to.equal("text");
           
            expect(myInstance.city).to.equal("Córdoba");
            expect(myInstance.district).to.equal("Sevilla");
            expect(myInstance.state).to.equal("Andalucia");
            expect(myInstance.postalCode).to.equal(41930);
            expect(myInstance.country).to.equal("España");
            expect(myInstance.period.start.getTime()).to.equal(new PeriodDt().start.getTime());
            expect(myInstance.period.end.getTime()).to.equal(new PeriodDt().end.getTime());
            
        });

        it("should not fail with invalid values",()=>{
            let myInstance=new AddressDt();

            expect(isValid(myInstance.use={use:"home"})
            &&isValid(myInstance.type={use:"home"})
            &&isValid(myInstance.text={use:"home"})
            &&isValid(myInstance.line={use:"home"})
            &&isValid(myInstance.city={use:"home"})
            &&isValid(myInstance.district={use:"home"})
            &&isValid(myInstance.state={use:"home"})
            &&isValid(myInstance.postalCode={use:"home"})
            &&isValid(myInstance.country={use:"home"})
            &&isValid(myInstance.period={use:"home"})
            );
            
            expect(isEmpty(myInstance.use)
            &&isEmpty(myInstance.type)
            &&isEmpty(myInstance.text)
            &&isEmptyArray(myInstance.line)
            &&isEmpty(myInstance.city)
            &&isEmpty(myInstance.district)
            &&isEmpty(myInstance.state)
            &&isEmpty(myInstance.postalCode)
            &&isEmpty(myInstance.country)
            &&isEmpty(myInstance.period)
            );       
            
            
            expect(isValid(myInstance.use={use:undefined})
            &&isValid(myInstance.type={use:undefined})
            &&isValid(myInstance.text={use:undefined})
            &&isValid(myInstance.line={use:undefined})
            &&isValid(myInstance.city={use:undefined})
            &&isValid(myInstance.district={use:undefined})
            &&isValid(myInstance.state={use:undefined})
            &&isValid(myInstance.postalCode={use:undefined})
            &&isValid(myInstance.country={use:undefined})
            &&isValid(myInstance.period={use:undefined})
            );
            
            expect(isEmpty(myInstance.use)
            &&isEmpty(myInstance.type)
            &&isEmpty(myInstance.text)
            &&isEmptyArray(myInstance.line)
            &&isEmpty(myInstance.city)
            &&isEmpty(myInstance.district)
            &&isEmpty(myInstance.state)
            &&isEmpty(myInstance.postalCode)
            &&isEmpty(myInstance.country)
            &&isEmpty(myInstance.period)
            );  
        });
    });
    
});