import { expect } from "chai"
import ReferenceDt from '../../src/spi/dataTypes/ReferenceDt.js';
import StringDt from '../../src/spi/dataTypes/StringDt.js';
import IdentifierDt from '../../src/spi/dataTypes/IdentifierDt.js';


import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../../src/utils/ValidationRules.js';

describe("ReferenceDt DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new ReferenceDt();
            expect(myInstance instanceof ReferenceDt,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myInstance=new ReferenceDt();
            expect(myInstance.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myInstance=new ReferenceDt({reference:"test"});
            expect(myInstance.isEmpty()).to.equal(false);
        });

    });

        
        describe("Field setters ",()=>{
            it('Testing field "REFERENCE"...',()=>{
                // DIRECT FIELD ACCESS
                let myInstance=new ReferenceDt({reference:"Testing text"});
                expect(myInstance.getReferenceElement().valueOf(),'Bad field "REFERENCE"').to.equals("Testing text") ;
                expect(myInstance.getReferenceElement().valueOf(),'Bad field "REFERENCE"').to.not.equals("Testin text") ;
                myInstance.reference="Hola Mundo";
                expect(myInstance.getReferenceElement().valueOf(),'Bad field "REFERENCE"').to.equals("Hola Mundo") ;
                expect(myInstance.getReferenceElement().valueOf(),'Bad field "REFERENCE"').to.not.equals("Hol Mundo") ;
                myInstance.reference=undefined;
                expect(myInstance.getReferenceElement().valueOf(),'Bad field "REFERENCE"').to.equals(null) ;
                expect(myInstance.getReferenceElement().valueOf(),'Bad field "REFERENCE"').to.not.equals("null") ;   

                /// SETTING ELEMENTS
                myInstance.setReferenceElement(new StringDt("Hola Mundo from StringDt"));
                expect(myInstance.getReferenceElement().valueOf(),'Bad field "REFERENCE"').to.equals("Hola Mundo from StringDt") ;
                expect(myInstance.getReferenceElement().valueOf(),'Bad field "REFERENCE"').to.not.equals("Hol Mundo from StringDt") ;   
                myInstance.setReferenceElement(new StringDt());
                expect(myInstance.getReferenceElement().valueOf(),'Bad field "REFERENCE"').to.equals(null) ;
                expect(myInstance.getReferenceElement().valueOf(),'Bad field "REFERENCE"').to.not.equals("null") ;   
                
            });

            it('Testing field "IDENTIFIER"...',()=>{
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


            it('Testing field "DISPLAY"...',()=>{
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
        
        
    
});