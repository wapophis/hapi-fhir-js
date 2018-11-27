import { expect } from "chai"
import HumanNameDt from '../../src/spi/dataTypes/HumanNameDt.js';
import PeriodDt from '../../src/spi/dataTypes/PeriodDt.js';
import StringDt from '../../src/spi/dataTypes/StringDt.js';
import NameUseEnum from '../../src/spi/valueSets/NameUseEnum.js';

import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../../src/utils/ValidationRules.js';

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

   

    describe("Array setters ",()=>{
        
        it('Testing field "family"...',()=>{
            let myInstance=new HumanNameDt({family:[new StringDt("a"),new StringDt("b"),new StringDt("c")]});
            expect(myInstance.family.length,'Testing length from field array').to.equals(3) ;
            expect(myInstance.getFamilyFirstRep().valueOf(),'Testing first element').to.equals(new StringDt("a").valueOf());
            expect(myInstance.family[1].valueOf(),'Testing second element').to.equals(new StringDt("b").valueOf());            
            expect(myInstance.family[2].valueOf(),'Testing third element').to.equals(new StringDt("c").valueOf());
            // ADDLINE  string
            myInstance.addFamily("d");
            expect(myInstance.family.length,'Testing length from field array').to.equals(4);
            expect(myInstance.family[3].valueOf(),'Testing first element').to.equals(new StringDt("d").valueOf());
            // EMPTY ADDLINE
            myInstance.addFamily().value="e";
            expect(myInstance.family.length,'Testing length from field array').to.equals(5) ;
            expect(myInstance.family[4].valueOf(),'Testing first element').to.equals(new StringDt("e").valueOf());
            // ADDLINE STRINGDT
            myInstance.addFamily(new StringDt("f"));
            expect(myInstance.family.length,'Testing length from field array').to.equals(6) ;
            expect(myInstance.family[5].valueOf(),'Testing first element').to.equals(new StringDt("f").valueOf());           
        });


        it('Testing field "given"...',()=>{
            let myInstance=new HumanNameDt({given:[new StringDt("a"),new StringDt("b"),new StringDt("c")]});
            expect(myInstance.given.length,'Testing length from field array').to.equals(3) ;
            expect(myInstance.getGivenFirstRep().valueOf(),'Testing first element').to.equals(new StringDt("a").valueOf());
            expect(myInstance.given[1].valueOf(),'Testing second element').to.equals(new StringDt("b").valueOf());            
            expect(myInstance.given[2].valueOf(),'Testing third element').to.equals(new StringDt("c").valueOf());
            // ADDLINE  string
            myInstance.addGiven("d");
            expect(myInstance.given.length,'Testing length from field array').to.equals(4) ;
            expect(myInstance.given[3].valueOf(),'Testing first element').to.equals(new StringDt("d").valueOf());
            // EMPTY ADDLINE
            myInstance.addGiven().value="e";
            expect(myInstance.given.length,'Testing length from field array').to.equals(5) ;
            expect(myInstance.given[4].valueOf(),'Testing first element').to.equals(new StringDt("e").valueOf());
            // ADDLINE STRINGDT
            myInstance.addGiven(new StringDt("f"));
            expect(myInstance.given.length,'Testing length from field array').to.equals(6) ;
            expect(myInstance.given[5].valueOf(),'Testing first element').to.equals(new StringDt("f").valueOf());           
        });


        it('Testing field "prefix"...',()=>{
            let myInstance=new HumanNameDt({prefix:[new StringDt("a"),new StringDt("b"),new StringDt("c")]});
            expect(myInstance.prefix.length,'Testing length from field array').to.equals(3) ;
            expect(myInstance.getPreffixFirstRep().valueOf(),'Testing first element').to.equals(new StringDt("a").valueOf());
            expect(myInstance.prefix[1].valueOf(),'Testing second element').to.equals(new StringDt("b").valueOf());            
            expect(myInstance.prefix[2].valueOf(),'Testing third element').to.equals(new StringDt("c").valueOf());
            // ADDLINE  string
            myInstance.addPrefix("d");
            expect(myInstance.prefix.length,'Testing length from field array').to.equals(4) ;
            expect(myInstance.prefix[3].valueOf(),'Testing first element').to.equals(new StringDt("d").valueOf());
            // EMPTY ADDLINE
            myInstance.addPrefix().value="e";
            expect(myInstance.prefix.length,'Testing length from field array').to.equals(5) ;
            expect(myInstance.prefix[4].valueOf(),'Testing first element').to.equals(new StringDt("e").valueOf());
            // ADDLINE STRINGDT
            myInstance.addPrefix(new StringDt("f"));
            expect(myInstance.prefix.length,'Testing length from field array').to.equals(6) ;
            expect(myInstance.prefix[5].valueOf(),'Testing first element').to.equals(new StringDt("f").valueOf());           
        });

        it('Testing field "suffix"...',()=>{
            debugger;
            let myInstance=new HumanNameDt({suffix:[new StringDt("a"),new StringDt("b"),new StringDt("c")]});
            expect(myInstance.suffix.length,'Testing length from field array').to.equals(3) ;
            expect(myInstance.getSuffixFirstRep().valueOf(),'Testing first element').to.equals(new StringDt("a").valueOf());
            expect(myInstance.suffix[1].valueOf(),'Testing second element').to.equals(new StringDt("b").valueOf());            
            expect(myInstance.suffix[2].valueOf(),'Testing third element').to.equals(new StringDt("c").valueOf());
            // ADDLINE  string
            myInstance.addSuffix("d");
            expect(myInstance.suffix.length,'Testing length from field array').to.equals(4) ;
            expect(myInstance.suffix[3].valueOf(),'Testing first element').to.equals(new StringDt("d").valueOf());
            // EMPTY ADDLINE
            myInstance.addSuffix().value="e";
            expect(myInstance.suffix.length,'Testing length from field array').to.equals(5) ;
            expect(myInstance.suffix[4].valueOf(),'Testing first element').to.equals(new StringDt("e").valueOf());
            // ADDLINE STRINGDT
            myInstance.addSuffix(new StringDt("f"));
            expect(myInstance.suffix.length,'Testing length from field array').to.equals(6) ;
            expect(myInstance.suffix[5].valueOf(),'Testing first element').to.equals(new StringDt("f").valueOf());           
        });
    });
        
        
        describe("ValueSet setters ",()=>{
            it('Testing field "use"...',()=>{
                let myInstance=new HumanNameDt({use:"a"});
                expect(myInstance.getUseElement().code,'Bad field "type"').to.equals("a") ;
                myInstance=new HumanNameDt({use:"usual"});
                expect(myInstance.getUseElement(),"Check enum relation for use").to.deep.equal(NameUseEnum.USUAL);
                myInstance.use=NameUseEnum.ANONYMOUS.code;
                expect(myInstance.use,"Check enum relation for use").to.deep.equal(NameUseEnum.ANONYMOUS.valueOf());
                });
            
            });
                    
        
        describe("Field setters ",()=>{
            it('Testing field "text"...',()=>{
                let myInstance=new HumanNameDt({text:"Testing text"});
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
        
        
    describe("Composite types setters ",()=>{
        it('Testing composite "period" ...',()=>{
            let myInstance=new HumanNameDt({period:{start:new Date(),end:new Date()}});
            let myPeriod=new PeriodDt(myInstance.period);
            expect(myInstance.period).to.deep.equal(myPeriod.valueOf());
        });
    });
});
        
    