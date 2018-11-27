import { expect } from "chai"
import IdentifierDt from '../src/spi/dataTypes/IdentifierDt.js';
import PeriodDt from '../src/spi/dataTypes/PeriodDt.js';
import CodingDt from '../src/spi/dataTypes/CodingDt.js';
import StringDt from '../src/spi/dataTypes/StringDt.js';
import ReferenceDt from '../src/spi/dataTypes/ReferenceDt.js';
import CodeableConceptDt from '../src/spi/dataTypes/CodeableConceptDt.js';

import IdentifierUseEnum from '../src/spi/valueSets/IdentifierUseEnum.js';
import IdentifierTypeEnum from '../src/spi/valueSets/IdentifierTypeEnum.js';


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
        
        
    describe("ValueSet setters ",()=>{
        it('Testing field "use"...',()=>{
            let myInstance=new IdentifierDt({use:"a"});
            expect(myInstance.getUseElement().code,'Bad field "use"').to.equals("a") ;
            myInstance=new IdentifierDt({use:"usual"});
            expect(myInstance.getUseElement(),"Check enum relation for use").to.deep.equal(IdentifierUseEnum.USUAL);
            myInstance.use=IdentifierUseEnum.SECONDARY.code;
            expect(myInstance.use,"Check enum relation for use").to.deep.equal(IdentifierUseEnum.SECONDARY.valueOf());
        });


        it('Testing field "type"...',()=>{
            let myInstance=new IdentifierDt({type:{coding:[{code:"a"},{code:"b"},{code:"c"}]}});
            expect(myInstance.getTypeElement().valueOf(),'Bad field "type"').to.deep.equal(new CodeableConceptDt({coding:[{code:"a"},{code:"b"},{code:"c"}]}).valueOf());
            // myInstance=new HumanNameDt({use:"usual"});
            // expect(myInstance.getUseElement(),"Check enum relation for use").to.deep.equal(NameUseEnum.USUAL);
            // myInstance.use=NameUseEnum.ANONYMOUS.code;
            // expect(myInstance.use,"Check enum relation for use").to.deep.equal(NameUseEnum.ANONYMOUS.valueOf());
        });
        
    });


        
        describe("Field setters ",()=>{
            it('Testing field "system"...',()=>{
                // DIRECT FIELD ACCESS
                let myInstance=new IdentifierDt({system:"Testing text"});
                expect(myInstance.getSystemElement().valueOf(),'Bad field "system"').to.equals("Testing text") ;
                expect(myInstance.getSystemElement().valueOf(),'Bad field "system"').to.not.equals("Testin text") ;
                myInstance.system="Hola Mundo";
                expect(myInstance.getSystemElement().valueOf(),'Bad field "system"').to.equals("Hola Mundo") ;
                expect(myInstance.getSystemElement().valueOf(),'Bad field "system"').to.not.equals("Hol Mundo") ;
                myInstance.system=undefined;
                expect(myInstance.getSystemElement().valueOf(),'Bad field "system"').to.equals(null) ;
                expect(myInstance.getSystemElement().valueOf(),'Bad field "system"').to.not.equals("null") ;   

                /// SETTING ELEMENTS
                myInstance.setSystemElement(new StringDt("Hola Mundo from StringDt"));
                expect(myInstance.getSystemElement().valueOf(),'Bad field "system"').to.equals("Hola Mundo from StringDt") ;
                expect(myInstance.getSystemElement().valueOf(),'Bad field "system"').to.not.equals("Hol Mundo from StringDt") ;   
                myInstance.setSystemElement(new StringDt());
                expect(myInstance.getSystemElement().valueOf(),'Bad field "system"').to.equals(null) ;
                expect(myInstance.getSystemElement().valueOf(),'Bad field "system"').to.not.equals("null") ;   
                
            });

            it('Testing field "value"...',()=>{
                // DIRECT FIELD ACCESS
                let myInstance=new IdentifierDt({value:"Testing text"});
                expect(myInstance.getValueElement().valueOf(),'Bad field "text"').to.equals("Testing text") ;
                expect(myInstance.getValueElement().valueOf(),'Bad field "text"').to.not.equals("Testin text") ;
                myInstance.value="Hola Mundo";
                expect(myInstance.getValueElement().valueOf(),'Bad field "text"').to.equals("Hola Mundo") ;
                expect(myInstance.getValueElement().valueOf(),'Bad field "text"').to.not.equals("Hol Mundo") ;
                myInstance.value=undefined;
                expect(myInstance.getValueElement().valueOf(),'Bad field "text"').to.equals(null) ;
                expect(myInstance.getValueElement().valueOf(),'Bad field "text"').to.not.equals("null") ;   
                
                // SETTING ELEMENTS
                myInstance.setValueElement(new StringDt("Hola Mundo from StringDt"));
                expect(myInstance.getValueElement().valueOf(),'Bad field "text"').to.equals("Hola Mundo from StringDt") ;
                expect(myInstance.getValueElement().valueOf(),'Bad field "text"').to.not.equals("Hol Mundo from StringDt") ;   
                
                myInstance.setValueElement(new StringDt());
                expect(myInstance.getValueElement().valueOf(),'Bad field "system"').to.equals(null) ;
                expect(myInstance.getValueElement().valueOf(),'Bad field "system"').to.not.equals("null") ;   
         
            });
            
        });
        
        
    describe("Composite types setters ",()=>{
        it('Testing composite "period" PeriodDt ...',()=>{
            let myInstance=new IdentifierDt({period:{start:new Date(),end:new Date()}});
            let myPeriod=new PeriodDt(myInstance.period);
            expect(myInstance.period).to.deep.equal(myPeriod.valueOf());
        });
        
        it('Testing composite "assigner" ReferenceDt ...',()=>{
            debugger;
            let rootObject={assigner:
                
                    {
                        reference:"ASSIGNER REF"
                        ,identifier:
                            {value:"idTest",type:{coding:[{code:"SNO"}]}}
                    }
                
            };

            let myInstance=new IdentifierDt(rootObject);
           expect(myInstance.getAssignerElement().valueOf(),"Testing Assigner reference..").to.eql(rootObject.assigner);
        });
    
    });
});