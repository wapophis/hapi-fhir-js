import { expect } from "chai"
import StringDt from '../src/spi/dataTypes/StringDt.js';

import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../src/utils/ValidationRules.js';
describe("StringDT spec tests ",()=>{
describe("Constructor",()=>{     
    it("Should generate an instance object | testConstructor(void:value)",()=>{
        let myInstance=new StringDt();
        expect(myInstance instanceof StringDt,"Testing instance type...").to.equal(true);                    
    });

    it("Should retain an string value | testConstructor(String:value)",()=>{
        let myInstance=new StringDt("test");
        expect(myInstance instanceof StringDt,"Testing instance type...").to.equal(true);
        expect(myInstance=="test","Testing content abstract equality ").to.equal(true);
        expect(myInstance=="tes","Testing content abstract equality ").to.equal(false);
    });

    it("Should return a reference ",()=>{
        let a=new StringDt("a");
        let b=a.value;          // this returns string ref
        let c=a;
        a.value="b";            // break ref into StringDt asigning new value
        expect(a==b).to.equal(false); // this fails because String is inmutable so, break ref.
        expect(a.equals(b)).to.equal(false); //this fails because a is an string ref
        expect(a===c); // this works because is the same StringDt ref.
        expect(a==c); // this works because the flatten values are the same.
    });
});



describe("Setting value",()=>{   

    it("Should retain an string object | setValue",()=>{
        let myInstance=new StringDt();
        myInstance.value="testValue";
        expect(myInstance=="testValue","Testing context abstract equality").to.equal(true);
    });


    it("Should support empty values with empty String | setValue",()=>{
        let myInstance=new StringDt("");
        myInstance.value="";
        expect(myInstance=="","Empty String never should be returned").to.equal(false);
        expect(myInstance.valueOf()==null,"Testing valueOf").to.equal(true);
        expect(myInstance.isEmpty(),"Testing value isEmpty").to.equal(true);
        expect(isEmpty(myInstance.value),"Testing direct field access should return a reference to an empty object.").to.equal(true);
    });


    it("Should support undefined values with undefined String | setValue",()=>{
        let myInstance=new StringDt();
        expect(myInstance=="","Empty String never should be returned").to.equal(false);
        expect(myInstance.valueOf()==null,"Testing valueOf").to.equal(true);
        expect(myInstance.isEmpty(),"Testing value isEmpty").to.equal(true);
        expect(isEmpty(myInstance.value),"Testing direct field access should return a reference to an empty object.").to.equal(true);
    });

});

});