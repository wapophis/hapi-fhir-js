import { expect } from "chai";
import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../../src/utils/ValidationRules.js';
import Patient from '../../src/spi/resources/Patient.js';
import IdentifierDt from '../../src/spi/dataTypes/IdentifierDt.js';
import HumanNameDt from '../../src/spi/dataTypes/HumanNameDt.js';
import ContactPointDt from '../../src/spi/dataTypes/ContactPointDt.js';
import AddressDt from '../../src/spi/dataTypes/AddressDt.js';
import CodingDt from '../../src/spi/dataTypes/CodingDt.js';
import ExtensionDt from '../../src/spi/dataTypes/ExtensionDt.js'
import StringDt from '../../src/spi/dataTypes/StringDt.js';
import CodeableConceptDt from '../../src/spi/dataTypes/CodeableConceptDt.js';
import PeriodDt from '../../src/spi/dataTypes/PeriodDt.js';
import BooleanDt from '../../src/spi/dataTypes/BooleanDt.js'



import AdministrativeGenderEnum from '../../src/spi/valueSets/AdministrativeGenderEnum.js';
import MaritalStatusEnum from '../../src/spi/valueSets/MaritalStatusEnum.js';

describe("FHIR ExtensionDt test",()=>{

    describe("Constructor",()=>{     
        it("Constructor with arguments",()=>{
            let myExtension=new ExtensionDt({valueDecimal:10.1});
        });
    });


    describe("Putting values",()=>{
        
        let myCompleteExtension=new ExtensionDt();
        
        it("Putting IdentifierDt",()=>{

            let myDt=new IdentifierDt({value:"aoaidjfadf-a-dsfa-sfdhoafds",use:"Zombie Use Only"});
            let myExtension=new ExtensionDt();
            myExtension.put(myDt);
            myCompleteExtension.put(new IdentifierDt(myExtension.valueIdentifier));
            expect(myCompleteExtension.valueIdentifier).to.deep.equal(myExtension.valueIdentifier);

        });

        it("Putting HumanNameDt",()=>{
            let myDt=new HumanNameDt({family:["Luis"]
            ,given:["Martínez"]
            ,suffix:["sufijo"]
            ,prefix:["prefijo"]
            ,use:"use"
            ,text:"text"
            ,period:{start:new Date(),end:new Date()}
            });
            let myExtension=new ExtensionDt();
            myExtension.put(myDt);
            myCompleteExtension.put(new HumanNameDt(myExtension.valueHumanName));
            expect(myCompleteExtension.valueHumanName).to.deep.equal(myExtension.valueHumanName);
        });

        it("Putting ContactPointDt",()=>{
           
            let myDt=new ContactPointDt(new ContactPointDt({
                system:"system",
                value:"value",
                use:"use",
                rank:"rank",
                period:{start:new Date(),end:new Date()}
            }));
            let myExtension=new ExtensionDt();
            myExtension.put(myDt);
            myCompleteExtension.put(new ContactPointDt(myExtension.valueContactPoint));
            expect(myCompleteExtension.valueContactPoint).to.deep.equal(myExtension.valueContactPoint);
        });


        it("Putting AddressDt",()=>{
            debugger;
            let myDt=new AddressDt({use:"use"
            ,type:"type"
            ,text:"text"
            ,line:["1","2","3"]
            ,city:"city"
            ,district:"district"
            ,state:"state"
            ,postalCode:"postalCode"
            ,country:"country"
            ,period:{start:new Date(),end:new Date()}
            });
            let myExtension=new ExtensionDt();
            myExtension.put(myDt);
            
            myCompleteExtension.put(new AddressDt(myExtension.valueAddress));
            expect(myCompleteExtension.valueAddress).to.deep.equal(myExtension.valueAddress); 
        });

        it("Putting CodeableConceptDt",()=>{
            let myDt=new CodeableConceptDt({coding:[{code:"a"},{code:"b"}],text:"Texto"});
            let myExtension=new ExtensionDt();
            myExtension.put(myDt);
            myCompleteExtension.put(new CodeableConceptDt(myExtension.valueCodeableConcept));
            expect(myCompleteExtension.valueCodeableConcept).to.deep.equal(myExtension.valueCodeableConcept); 
        });

        it("Putting PeriodDt",()=>{
            let myDt=new PeriodDt({start:new Date("2012-02-12"),end:new Date("2102-02-12")});
            let myExtension=new ExtensionDt();
            myExtension.put(myDt);
            myCompleteExtension.put(new PeriodDt(myExtension.valuePeriod));
            expect(myCompleteExtension.valuePeriod).to.deep.equal(myExtension.valuePeriod); 
        });


        it("Putting StringDt",()=>{
            let myDt=new StringDt("Zombie");
            let myExtension=new ExtensionDt();
            myExtension.put(myDt);
            myCompleteExtension.put(new StringDt(myExtension.valueString));
            expect(myCompleteExtension.valueString).to.deep.equal(myExtension.valueString); 
        });


        it("Putting BooleanDt",()=>{
            let myDt=new BooleanDt(false);
            let myExtension=new ExtensionDt();
            myExtension.put(myDt);
            myCompleteExtension.put(new BooleanDt(myExtension.valueBoolean));
            expect(myCompleteExtension.valueBoolean).to.deep.equal(myExtension.valueBoolean); 
        });


        it("Putting Integer",()=>{
            let myDt=new Number(100);
            let myExtension=new ExtensionDt();
            myExtension.put(myDt);
            myCompleteExtension.put(new Number(myExtension.valueInteger));
            expect(myCompleteExtension.valueInteger).to.deep.equal(myExtension.valueInteger); 
        });

        it("Putting Decimal",()=>{
            let myDt=new Number(10.01);
            let myExtension=new ExtensionDt();
            myExtension.put(myDt);
            myCompleteExtension.put(new Number(myExtension.valueDecimal));
            expect(myCompleteExtension.valueDecimal).to.deep.equal(myExtension.valueDecimal); 
        });

        it("Putting DateTime",()=>{
            let myDt=new Date();
            let myExtension=new ExtensionDt();
            myExtension.put(myDt);
            myCompleteExtension.put(new Date(myExtension.valueDateTime));
            expect(myCompleteExtension.valueDateTime).to.deep.equal(myExtension.valueDateTime); 
        });


        it("Putting Date",()=>{
            let myDt=new Date();
            myDt.setHours(1,0,0,0);
            let myExtension=new ExtensionDt();
            myExtension.put(myDt);
            myCompleteExtension.put(new Date(myExtension.valueDate));
            expect(myCompleteExtension.valueDate).to.deep.equal(myExtension.valueDate); 
        });
        

        it("Putting Time",()=>{
            let myDt=new Date()
            myDt.setTime(8399999);
            let myExtension=new ExtensionDt();
            myExtension.put(myDt);
            myCompleteExtension.put(new Date(myExtension.valueTime));
            expect(myCompleteExtension.valueTime).to.deep.equal(myExtension.valueTime); 
        });
        

    });

});
