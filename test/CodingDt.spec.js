import { expect } from "chai"
import CodingDt from '../src/spi/dataTypes/CodingDt.js';
import BooleanDt from '../src/spi/dataTypes/BooleanDt.js';
import StringDt from '../src/spi/dataTypes/StringDt.js';

import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../src/utils/ValidationRules.js';

describe("CodingDt DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new CodingDt();
            expect(myInstance instanceof CodingDt,true);                    
        });

        /**
         * 
         */
        it("should generate an empty object",()=>{
            let myInstance=new CodingDt();
            expect(myInstance.isEmpty()).to.equal(true);
        });

        /**
         * 
         */
        it("should generate a non empty object",()=>{
            let myInstance=new CodingDt({display:"text"});
            expect(myInstance.isEmpty()).to.equal(false);
        });
    });

    describe("Getters",()=>{     
        it("should return a safe StringDt object",()=>{
            let myInstance=new CodingDt();
            
            expect(isValid(myInstance.system)
            &&isValid(myInstance.version)
            &&isValid(myInstance.code)
            &&isValid(myInstance.display)
            &&isValid(myInstance.userSelected)
            );    
            
            
            expect((myInstance.system instanceof StringDt)
            &&(myInstance.version instanceof StringDt)
            &&(myInstance.code instanceof StringDt)
            &&(myInstance.display instanceof StringDt)
            &&(myInstance.userSelected instanceof StringDt)
            );
        });

        it("should return an empty object",()=>{
            let myInstance=new CodingDt();
            
            expect(myInstance.mySystem.isEmpty()
            &&(myInstance.myVersion.isEmpty())
            &&(myInstance.myCode.isEmpty())
            &&(myInstance.myDisplay.isEmpty())
            &&(myInstance.myUserSelected.isEmpty())
            );                    
        });
    });


    describe("Setters",()=>{     
        it("should set valid values",()=>{
            let myInstance=new CodingDt();
           
            expect(isValid(myInstance.system="test")
            && isValid(myInstance.version="test")
            && isValid(myInstance.code="test")
            && isValid(myInstance.display="test")
            && isValid(myInstance.userSelected=true)
            );
            
            expect(myInstance.system).to.equal("test");
            expect(myInstance.version).to.equal("test");
            expect(myInstance.code).to.equal("test");
            expect(myInstance.display).to.equal("test");
            expect(myInstance.userSelected).to.equal(true);
        });

        it("should not fail with invalid values",()=>{
            let myInstance=new CodingDt();
            
            expect(isValid(myInstance.system=undefined)
            && isValid(myInstance.version=undefined)
            && isValid(myInstance.code=undefined)
            && isValid(myInstance.display=undefined)
            && isValid(myInstance.userSelected=undefined)
            );
    
            expect(myInstance.mySystem.isEmpty()
            && myInstance.myVersion.isEmpty()
            && myInstance.myCode.isEmpty()
            && myInstance.myDisplay.isEmpty()
            && myInstance.myUserSelected.isEmpty()
            );            
        });

    });
    describe("Should return correct coerced values to any StringDt field",()=>{ 

        it("Should work well with coerced values from StringDt",()=>{
            let myInstance=new CodingDt();
            myInstance.code="testCode";
            myInstance.display="testDisplay";
            myInstance.system="testSystem";
            myInstance.userSelected=new BooleanDt(true);

            expect(myInstance.code+"-test","Test coherced value ").equal("testCode-test");
            expect(myInstance.display+"-test","Test coherced value ").equal("testDisplay-test");
            expect(myInstance.system+"-test","Test coherced value ").equal("testSystem-test");
            
        })
    });
    

    describe("Should return correct references to any field and must be writeable",()=>{     
        it("Should write on fields with raw string values and must be modificable",()=>{
            let myInstance=new CodingDt();
            myInstance.code="testCode";
            myInstance.display="testDisplay";
            myInstance.system="testSystem";
            myInstance.userSelected=new BooleanDt(true);
            expect(myInstance.code).to.equal("testCode");
            expect(myInstance.display).to.equal("testDisplay");
            expect(myInstance.system).to.equal("testSystem");
            expect(myInstance.userSelected).to.equal(true);
            myInstance.code="Hola Mundo";
            expect(myInstance.code).to.equal("Hola Mundo");
        });
    });




    describe("Should control equality",()=>{     
        it("Should implement equals",()=>{
            let myInstance=new CodingDt();
            myInstance.code="testCode";
            myInstance.display="testDisplay";
            myInstance.system="testSystem";
            myInstance.userSelected=new BooleanDt(true);

            let myInstance1=new CodingDt();
            myInstance1.code="testCode";
            myInstance1.display="testDisplay";
            myInstance1.system="testSystem";
            myInstance1.userSelected=new BooleanDt(true);
            debugger;
            expect(myInstance.equals(myInstance1),"Checking equality between instances...").to.equal(true);

            myInstance1.code=undefined;
            expect(myInstance.equals(myInstance1),"Checking equality between instances...").to.equal(false);

            myInstance1.code="a";
            expect(myInstance.equals(myInstance1),"Checking equality between instances...").to.equal(false);
            

        });


        it("Should not work with strict equality",()=>{
            let myInstance=new CodingDt();
            myInstance.code="testCode";
            myInstance.display="testDisplay";
            myInstance.system="testSystem";
            myInstance.userSelected=new BooleanDt(true);

            let myInstance1=new CodingDt();
            myInstance1.code="testCode";
            myInstance1.display="testDisplay";
            myInstance1.system="testSystem";
            myInstance1.userSelected=new BooleanDt(true);
            expect(myInstance===myInstance).to.equal(true);
            expect(myInstance===myInstance1).to.equal(false);

        });

        it("Should not work with abstract equality",()=>{
            let myInstance=new CodingDt();
            myInstance.code="testCode";
            myInstance.display="testDisplay";
            myInstance.system="testSystem";
            myInstance.userSelected=new BooleanDt(true);

            let myInstance1=new CodingDt();
            myInstance1.code="testCode";
            myInstance1.display="testDisplay";
            myInstance1.system="testSystem";
            myInstance1.userSelected=new BooleanDt(true);
            expect(myInstance==myInstance1).to.equal(false);
            expect(myInstance==myInstance).to.equal(true);

        });
    });
    
});