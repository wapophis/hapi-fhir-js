import { expect } from "chai"
import NarrativeDt from '../../src/spi/dataTypes/NarrativeDt.js';
import CodingDt from '../../src/spi/dataTypes/CodingDt.js';
import StringDt from '../../src/spi/dataTypes/StringDt.js';
import NarrativeStatusEnum from '../../src/spi/valueSets/NarrativeStatusEnum.js';


import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../../src/utils/ValidationRules.js';

describe("NarrativeDt DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new NarrativeDt();
            expect(myInstance instanceof NarrativeDt,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myInstance=new NarrativeDt();
            expect(myInstance.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myInstance=new NarrativeDt({div:"test"});
            expect(myInstance.isEmpty()).to.equal(false);
        });

    });

    describe("Unit tests",()=>{
        
                describe("ValueSet setters ",()=>{
                    it('Testing field "status"...',()=>{
                        let myInstance=new NarrativeDt({status:"a"});
                        expect(myInstance.getStatusElement().code,'Bad field "type"').to.equals("a") ;
                        myInstance=new NarrativeDt({status:"empty"});
                        expect(myInstance.getStatusElement(),"Check enum relation for use").to.deep.equal(NarrativeStatusEnum.EMPTY);
                        myInstance.status=NarrativeStatusEnum.GENERATED.code;
                        expect(NarrativeStatusEnum.getByCode(myInstance.status).valueOf(),"Check enum relation for use").to.deep.equal(NarrativeStatusEnum.GENERATED.valueOf());
                        });

                });
                        
                describe("Composite types setters ",()=>{
                    it('Testing composite "div" ...',()=>{
                        let myInstance=new NarrativeDt({div:"<span>Hola Mundo</span>"});
                        expect(myInstance.div).to.deep.equal(new StringDt(myInstance.getDivElement().valueOf()).valueOf());
                    });
                });
        
           
    
    });
});