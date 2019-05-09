import { expect } from "chai"
import CodeDt from '../src/spi/dataTypes/CodeDt.js';

describe("CodeDt DataType test",()=>{
    describe("Constructor",()=>{     
        it("should generate an instance object",()=>{
            let myInstance=new CodeDt();
            expect(myInstance instanceof CodeDt,true);                    
        });
        it("should load the assigned argument value at construction time",()=>{
            let myInstance=new CodeDt("codefortest");
            expect(myInstance.value).to.equal("codefortest")
        });
    });

    describe("Sanitize code values",()=>{
        it("should remove leading spaces",()=>{
            let myInstance=new CodeDt();
            myInstance.value=" remove leading spaces";
            expect(myInstance.value).to.equal("remove leading spaces");
            myInstance=new CodeDt(" remove leading spaces");
            myInstance.value=" remove leading spaces";
            expect(myInstance.value).to.equal("remove leading spaces");
        });

        it("should remove trailing spaces",()=>{
            let myInstance=new CodeDt();
            myInstance.value="remove trailing spaces ";
            expect(myInstance.value).to.equal("remove trailing spaces");
            myInstance=new CodeDt("remove trailing spaces ");
            myInstance.value="remove trailing spaces ";
            expect(myInstance.value).to.equal("remove trailing spaces");
        });

        it("should remove trailing and leading spaces",()=>{
            let myInstance=new CodeDt();
            myInstance.value=" remove leading and trailing spaces  ";
            expect(myInstance.value).to.equal("remove leading and trailing spaces");
            myInstance=new CodeDt(" remove leading and trailing spaces  ");
            myInstance.value=" remove leading and trailing spaces  ";
            expect(myInstance.value).to.equal("remove leading and trailing spaces");
        });

        it("should not support numbers at value argument transforming to string ones",()=>{ 
            expect(()=>{let myInstance=new CodeDt(15);}).to.throw();
        });

        it("should not support objects at value argument transforming to string ones",()=>{
            expect(()=>{let myInstance=new CodeDt({a:15});}).to.throw();
        });


    });


    describe("To primitive controls",()=>{
        it("should works to primitive string",()=>{
            let myInstance=new CodeDt();
            myInstance.value="testValue";
            expect(`${myInstance}`).to.equal("testValue");
        });

        it("should fails to primitive number",()=>{
            let myInstance=new CodeDt();
            myInstance.value="remove trailing spaces ";
            expect(()=>+myInstance).to.throw();
        });

        it("should return isEmpty to primitive boolean",()=>{
            let myInstance=new CodeDt("1");
            expect(myInstance==false,true);
            myInstance=new CodeDt();
            expect(myInstance==true,true);
        });

    });



});