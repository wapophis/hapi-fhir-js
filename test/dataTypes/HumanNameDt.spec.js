import { expect } from "chai"
import HumanNameDt from '../../src/spi/dataTypes/HumanNameDt.js';
import PeriodDt from '../../src/spi/dataTypes/PeriodDt.js';
import StringDt from '../../src/spi/dataTypes/StringDt.js';
import NameUseEnum from '../../src/spi/valueSets/NameUseEnum.js';
import {isValid,isEmpty,isEmptyArray,isEmptyDate} from '../../src/utils/ValidationRules.js';


let dstu_4_0_payload={
    "resourceType": "Patient",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<table>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Name</td>\n\t\t\t\t\t\t<td>Peter James \n              <b>Chalmers</b> (&quot;Jim&quot;)\n            </td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Address</td>\n\t\t\t\t\t\t<td>534 Erewhon, Pleasantville, Vic, 3999</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Contacts</td>\n\t\t\t\t\t\t<td>Home: unknown. Work: (03) 5555 6473</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Id</td>\n\t\t\t\t\t\t<td>MRN: 12345 (Acme Healthcare)</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>"
    },
    "identifier": [
      {
        "use": "usual",
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
              "code": "MR"
            }
          ]
        },
        "system": "urn:oid:1.2.36.146.595.217.0.1",
        "value": "12345",
        "period": {
          "start": "2001-05-06"
        },
        "assigner": {
          "display": "Acme Healthcare"
        }
      }
    ],
    "active": true,
    "name": [
      {
        "use": "official",
        "family": "Chalmers",
        "given": [
          "Peter",
          "James"
        ]
      },
      {
        "use": "usual",
        "given": [
          "Jim"
        ]
      },
      {
        "use": "maiden",
        "family": "Windsor",
        "given": [
          "Peter",
          "James"
        ],
        "period": {
          "end": "2002"
        }
      }
    ],
    "telecom": [
      {
        "use": "home"
      },
      {
        "system": "phone",
        "value": "(03) 5555 6473",
        "use": "work",
        "rank": 1
      },
      {
        "system": "phone",
        "value": "(03) 3410 5613",
        "use": "mobile",
        "rank": 2
      },
      {
        "system": "phone",
        "value": "(03) 5555 8834",
        "use": "old",
        "period": {
          "end": "2014"
        }
      }
    ],
    "gender": "male",
    "birthDate": "1974-12-25",
    "_birthDate": {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
          "valueDateTime": "1974-12-25T14:35:45-05:00"
        }
      ]
    },
    "deceasedBoolean": false,
    "address": [
      {
        "use": "home",
        "type": "both",
        "text": "534 Erewhon St PeasantVille, Rainbow, Vic  3999",
        "line": [
          "534 Erewhon St"
        ],
        "city": "PleasantVille",
        "district": "Rainbow",
        "state": "Vic",
        "postalCode": "3999",
        "period": {
          "start": "1974-12-25"
        }
      }
    ],
    "contact": [
      {
        "relationship": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
                "code": "N"
              }
            ]
          }
        ],
        "name": {
          "family": "du Marché",
          "_family": {
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix",
                "valueString": "VV"
              }
            ]
          },
          "given": [
            "Bénédicte"
          ]
        },
        "telecom": [
          {
            "system": "phone",
            "value": "+33 (237) 998327"
          }
        ],
        "address": {
          "use": "home",
          "type": "both",
          "line": [
            "534 Erewhon St"
          ],
          "city": "PleasantVille",
          "district": "Rainbow",
          "state": "Vic",
          "postalCode": "3999",
          "period": {
            "start": "1974-12-25"
          }
        },
        "gender": "female",
        "period": {
          "start": "2012"
        }
      }
    ],
    "managingOrganization": {
      "reference": "Organization/1"
    }
  };
let dstu_4_0_string=JSON.stringify(dstu_4_0_payload);





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

    /**
     * Test for the Family Name
     */
    describe("Family Name",()=>{
      it('Should persist value correctly',()=>{
        let myInstance=new HumanNameDt({family:"Family Name"});
        expect(myInstance.family).to.equals(new StringDt("Family Name").value);
      });

      it('Should mutate the field correcty',()=>{
        let myInstance=new HumanNameDt({family:"Family Name"});
        myInstance.getFamilyElement().value+=" Mutated Family Name";
        expect(myInstance.family).to.equals("Family Name Mutated Family Name");
        myInstance.family+=" mutated";
        expect(myInstance.family).to.equals("Family Name Mutated Family Name mutated");
        
      });

      it('Should replace the field value correcty',()=>{
        let myInstance=new HumanNameDt({family:"Family Name"});
        let replaced=new StringDt("New Family Name");
        myInstance.setFamilyElement(replaced);
        expect(myInstance.getFamilyElement().value).to.eql(replaced.value);
        myInstance.family=replaced.value;
        expect(myInstance.family).to.eql(replaced.value);
      });


      it('Should not replace the field object instance ',()=>{
        let myInstance=new HumanNameDt({family:"Family Name"});
        let replaced=new StringDt("New Family Name");
        myInstance.setFamilyElement(replaced);
        expect(myInstance.getFamilyElement()===replaced,true);
      });
    });


    /**
     * Test for the given Name
     */
    describe("Given Name",()=>{
      it('Should persist value correctly',()=>{
        let myInstance=new HumanNameDt({given:["Given", "Name"]});
        expect(myInstance.given).to.eql(["Given","Name"]);
      });

      it('Should mutate the field correcty',()=>{
        let myInstance=new HumanNameDt({given:["Family","Name"]});
        myInstance.getGiven().push("NEWEL");
        expect(myInstance.given).to.eqls(["Family","Name","NEWEL"]);
      });

      it('Should replace the field value correcty',()=>{
        let myInstance=new HumanNameDt({given:["Family","Name"]});
        let replaced=[new StringDt("Family"),new StringDt("Name"),new StringDt("Replaced")];
        myInstance.setGiven(replaced);
        expect(myInstance.getGiven()).to.eql(replaced);
      });

      describe('Should add names to the given names array...',()=>{

        it("Add raw value in an initialized given array",()=>{
          let myInstance=new HumanNameDt({given:["Family","Name"]});
          myInstance.addGiven("newName");
          expect(myInstance.given).to.eqls(["Family","Name","newName"]);
        });

        it("Add raw value in an empty given array",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addGiven("newName");
          expect(myInstance.given).to.eqls(["newName"]);
        });
      
       
        it("Add an StringDt type object in an empty given array ..",()=>{
          let myInstance=new HumanNameDt();
          let newName=new StringDt("newName");
          myInstance.addGiven(newName);
          expect(myInstance.given).to.eqls(["newName"]);
          expect(myInstance.getGiven()).to.eqls([newName]);
        });

        it("Add an StringDt type object in an initialized array given array ..",()=>{
          let myInstance=new HumanNameDt({given:[new StringDt("newName")]});
          let newName=new StringDt("newName");
          myInstance.addGiven(newName);
          expect(myInstance.given).to.eqls(["newName","newName"]);
          expect(myInstance.getGiven()).to.eqls([newName,newName]);
        });
        
      });

      it('Should get first given Name from the given Array...',()=>{
        let myInstance=new HumanNameDt({given:["Family","Name"]});
        expect(myInstance.getGiven()[0]).to.eqls(myInstance.getGivenFirstRep());
      });

      it('Should get first given Name from the given Array and modify it...',()=>{
        let myInstance=new HumanNameDt({given:["Family","Name"]});
        myInstance.getGivenFirstRep().value="YLIMAF";
        expect(myInstance.given[0]).to.eqls("YLIMAF");
        expect(myInstance.given[0]).not.to.eqls(undefined);
      });
    });


   

    describe("Array setters ",()=>{



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
        
    