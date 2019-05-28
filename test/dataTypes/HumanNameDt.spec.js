import { expect } from "chai"
import HumanNameDt from '../../src/spi/dataTypes/HumanNameDt.js';
import CodeDt from '../../src/spi/dataTypes/CodeDt.js';
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
    describe("<Family Name>",()=>{
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
    describe("<Given Name>",()=>{
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


    describe('<Use> field',()=>{

      describe("Support for CodeDt use",()=>{
        it("Accept CodeDt in constructor..",()=>{
          let myInstance=new HumanNameDt({use:new CodeDt("usual")});
          expect(myInstance.use).to.eqls(new CodeDt("usual").value);
          expect(myInstance.getUseElement()).to.eqls(new CodeDt("usual"));
        });

        it("Accept CodeDt in field..",()=>{
          let myInstance=new HumanNameDt();
          myInstance.use=new CodeDt("code");
          expect(myInstance.use).to.eqls("code");
          expect(myInstance.getUseElement()).to.eqls(new CodeDt("code"));
        });

        it("Accept CodeDt in setter..",()=>{
          let myInstance=new HumanNameDt();
          myInstance.setUseElement(new CodeDt("code"));
          expect(myInstance.use).to.eqls("code");
          expect(myInstance.getUseElement()).to.eqls(new CodeDt("code"));
        });

        it("Is Updated by field..",()=>{
          let myInstance=new HumanNameDt({use:new CodeDt("usual")});
          myInstance.use=new CodeDt("official");
          expect(myInstance.getUseElement()).to.eqls(new CodeDt("official"));
          expect(myInstance.use).to.eqls("official");
          expect(myInstance.getUseElement()).not.to.eqls(new CodeDt("usual"));
          expect(myInstance.use).not.to.eqls("usual");
        });

        it("Is Updated by getter element..",()=>{
          let myInstance=new HumanNameDt({use:new CodeDt("usual")});
          myInstance.getUseElement().value="official";
          expect(myInstance.use).to.eqls("official");
        });

        it("Is Updated by setter element..",()=>{
          let myInstance=new HumanNameDt({use:new CodeDt("usual")});
          myInstance.setUseElement(new CodeDt("official"));
          expect(myInstance.getUseElement()).to.eqls(new CodeDt("official"));
          expect(myInstance.use).to.eqls("official");
          expect(myInstance.getUseElement()).not.to.eqls(new CodeDt("usual"));
          expect(myInstance.use).not.to.eqls("usual");
        });
      });

      describe("Support for RAW use",()=>{
        it("Accept RAW in constructor..",()=>{
          let myInstance=new HumanNameDt({use:"usual"});
          expect(myInstance.use).to.eqls("usual");
          expect(myInstance.getUseElement()).to.eqls(new CodeDt("usual"));
        });

        it("Accept RAW in field..",()=>{
          let myInstance=new HumanNameDt();
          myInstance.use="usual";
          expect(myInstance.use).to.eqls("usual");
          expect(myInstance.getUseElement()).to.eqls(new CodeDt("usual"));
        });

        it("NOT Accept RAW in setter..",()=>{
          let myInstance=new HumanNameDt();
          expect(()=>myInstance.setUseElement("usual")).to.throw();
        });

        it("Is Updated by RAW field..",()=>{
          let myInstance=new HumanNameDt();
          myInstance.use="usual";
          expect(myInstance.use).to.eqls("usual");
          expect(myInstance.getUseElement()).to.eqls(new CodeDt("usual"));
          myInstance.use="official";
          expect(myInstance.use).to.eqls("official");
          expect(myInstance.getUseElement()).to.eqls(new CodeDt("official"));
        });

        it("Is Updated by getter element..",()=>{
          let myInstance=new HumanNameDt();
          myInstance.use="usual";
          myInstance.getUseElement().value="official";
          expect(myInstance.use).to.eqls("official");
          expect(myInstance.getUseElement()).to.eqls(new CodeDt("official"));
        });

      });

    });

    describe("<Text> field",()=>{
      describe("Support for StringDt use",()=>{
        it("Support initilization throught constructor",()=>{
          let myInstance=new HumanNameDt({text:new StringDt("TEXTTOOO")});
          expect(myInstance.text).to.eqls("TEXTTOOO");
          expect(myInstance.getTextElement()).to.eqls(new StringDt("TEXTTOOO"));
        });


        it("Support field set from a StringDt object",()=>{
          let myInstance=new HumanNameDt();
          myInstance.text=(new StringDt("TEXTTOOO"));
          expect(myInstance.text).to.eqls("TEXTTOOO");
          expect(myInstance.getTextElement()).to.eqls(new StringDt("TEXTTOOO"));
        });

        it("Support SETTER from a StringDt object",()=>{
          let myInstance=new HumanNameDt();
          myInstance.setTextElement(new StringDt("TEXTTOOO"));
          expect(myInstance.text).to.eqls("TEXTTOOO");
          expect(myInstance.getTextElement()).to.eqls(new StringDt("TEXTTOOO"));
        });

        it("Support MUTATION from getter from a StringDt object",()=>{
          let myInstance=new HumanNameDt({text:new StringDt("TEXTTOOO")});
          let textElement=myInstance.getTextElement();
          textElement.value="TEXTO";
          expect(myInstance.text).to.eqls("TEXTO");
          expect(myInstance.getTextElement()).to.eqls(new StringDt("TEXTO"));
        });

      });
      describe("Support for RAW use",()=>{

        it("Support initilization throught constructor",()=>{
          let myInstance=new HumanNameDt({text:"TEXTTOOO"});
          expect(myInstance.text).to.eqls("TEXTTOOO");
          expect(myInstance.getTextElement()).to.eqls(new StringDt("TEXTTOOO"));
        });

        it("Support field set from a RAW object",()=>{
          let myInstance=new HumanNameDt();
          myInstance.text="TEXTTOOO";
          expect(myInstance.text).to.eqls("TEXTTOOO");
          expect(myInstance.getTextElement()).to.eqls(new StringDt("TEXTTOOO"));
        });

        it("NOT Support SETTER from a RAW object",()=>{
          let myInstance=new HumanNameDt();
          expect( ()=>{myInstance.setTextElement("TEXTTOOO");}).to.throw();
        });

        it("Support MUTATION from getter from a StringDt object",()=>{
          let myInstance=new HumanNameDt({text:"TEXTTOOO"});
          let textElement=myInstance.getTextElement();
          textElement.value="TEXTO";
          expect(myInstance.text).to.eqls("TEXTO");
          expect(myInstance.getTextElement()).to.eqls(new StringDt("TEXTO"));
        });
      });
    });

    describe("<Prefix> field",()=>{
      describe("Support for StringDt use",()=>{
        it("Support initilialization from constructor",()=>{
          let myInstance=new HumanNameDt({prefix:[new StringDt("PREFIX_ONE"),new StringDt("PREFIX_TWO")]});
          expect(myInstance.prefix).to.eqls(["PREFIX_ONE","PREFIX_TWO"]);
          expect(myInstance.getPrefix()).to.eqls([new StringDt("PREFIX_ONE"),new StringDt("PREFIX_TWO")]);
        });

        it("Support add StringDt prefix to array",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addPrefix(new StringDt("PREFIX_ONE"));
          expect(myInstance.prefix).to.eqls(["PREFIX_ONE"]);
          expect(myInstance.getPrefix()).to.eqls([new StringDt("PREFIX_ONE")]);
        });

        it("NOT Support mutate array pushing into array from getter of the array element",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addPrefix(new StringDt("PREFIX_ONE"));
          let myPrefixs=myInstance.getPrefix();
          myPrefixs.push(new StringDt("PREFIX_TWO"));
          expect(myInstance.prefix).not.to.eqls(["PREFIX_ONE","PREFIX_TWO"]);
          expect(myInstance.getPrefix()).not.to.eqls([new StringDt("PREFIX_ONE"),new StringDt("PREFIX_TWO")]);
        });

        it("Support getting firstElement of prefix Array",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addPrefix(new StringDt("PREFIX_ONE"));
          myInstance.addPrefix(new StringDt("PREFIX_TWO"));
          expect(myInstance.getPrefixFirstRep().valueOf()).to.eqls("PREFIX_ONE");
          expect(myInstance.getPrefixFirstRep()).to.eqls(new StringDt("PREFIX_ONE"));
        });

        it("Support MUTATE firstElement of prefix Array",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addPrefix(new StringDt("PREFIX_ONE"));
          myInstance.addPrefix(new StringDt("PREFIX_TWO"));
          myInstance.getPrefixFirstRep().value="PREFIX_THREE";
          expect(myInstance.getPrefixFirstRep().valueOf()).to.eqls("PREFIX_THREE");
          expect(myInstance.getPrefixFirstRep()).to.eqls(new StringDt("PREFIX_THREE"));
        });

      });
       describe("Support for RAW use",()=>{
        it("Support initilialization from constructor",()=>{
          let myInstance=new HumanNameDt({prefix:["PREFIX_ONE","PREFIX_TWO"]});
          expect(myInstance.prefix).to.eqls(["PREFIX_ONE","PREFIX_TWO"])&&
          expect(myInstance.getPrefix()).to.eqls([new StringDt("PREFIX_ONE"),new StringDt("PREFIX_TWO")]);
        });

        it("Support add RAW prefix to array",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addPrefix("PREFIX_ONE");
          expect(myInstance.prefix).to.eqls(["PREFIX_ONE"]);
          expect(myInstance.getPrefix()).to.eqls([new StringDt("PREFIX_ONE")]);
        });

        it("NOT Support mutate array pushing into array from getter of the array element",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addPrefix("PREFIX_ONE");
          let myPrefixs=myInstance.getPrefix();
          myPrefixs.push("PREFIX_TWO");
          expect(myInstance.prefix).not.to.eqls(["PREFIX_ONE","PREFIX_TWO"]);
          expect(myInstance.getPrefix()).not.to.eqls([new StringDt("PREFIX_ONE"),new StringDt("PREFIX_TWO")]);
        });

        it("Support getting firstElement of prefix Array",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addPrefix("PREFIX_ONE");
          myInstance.addPrefix("PREFIX_TWO");
          expect(myInstance.getPrefixFirstRep().valueOf()).to.eqls("PREFIX_ONE");
          expect(myInstance.getPrefixFirstRep()).to.eqls(new StringDt("PREFIX_ONE"));
        });

        it("Support MUTATE firstElement of prefix Array",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addPrefix("PREFIX_ONE");
          myInstance.addPrefix("PREFIX_TWO");
          myInstance.getPrefixFirstRep().value="PREFIX_THREE";
          expect(myInstance.getPrefixFirstRep().valueOf()).to.eqls("PREFIX_THREE");
          expect(myInstance.getPrefixFirstRep()).to.eqls(new StringDt("PREFIX_THREE"));
        });

      });
    });

    describe("<Suffix> field",()=>{
      describe("Support for StringDt use",()=>{
        it("Support initilialization from constructor",()=>{
          let myInstance=new HumanNameDt({suffix:[new StringDt("SUFFIX_ONE"),new StringDt("SUFFIX_TWO")]});
          expect(myInstance.suffix).to.eqls(["SUFFIX_ONE","SUFFIX_TWO"]);
          expect(myInstance.getSuffix()).to.eqls([new StringDt("SUFFIX_ONE"),new StringDt("SUFFIX_TWO")]);
        });

        it("Support add StringDt suffix to array",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addSuffix(new StringDt("SUFFIX_ONE"));
          expect(myInstance.suffix).to.eqls(["SUFFIX_ONE"]);
          expect(myInstance.getSuffix()).to.eqls([new StringDt("SUFFIX_ONE")]);
        });

        it("Support mutate array pushing into array from getter of the array element",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addSuffix(new StringDt("SUFFIX_ONE"));
          let mySuffixes=myInstance.getSuffix();
          mySuffixes.push(new StringDt("SUFFIX_TWO"));
          expect(myInstance.suffix).to.eqls(["SUFFIX_ONE","SUFFIX_TWO"]);
          expect(myInstance.getSuffix()).to.eqls([new StringDt("SUFFIX_ONE"),new StringDt("SUFFIX_TWO")]);
        });

        it("Support getting firstElement of suffix Array",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addSuffix(new StringDt("SUFFIX_ONE"));
          myInstance.addSuffix(new StringDt("SUFFIX_TWO"));
          expect(myInstance.getSuffixFirstRep().valueOf()).to.eqls("SUFFIX_ONE");
          expect(myInstance.getSuffixFirstRep()).to.eqls(new StringDt("SUFFIX_ONE"));
        });

        it("Support MUTATE firstElement of suffix Array",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addSuffix(new StringDt("SUFFIX_ONE"));
          myInstance.addSuffix(new StringDt("SUFFIX_TWO"));
          myInstance.getSuffixFirstRep().value="SUFFIX_THREE";
          expect(myInstance.getSuffixFirstRep().valueOf()).to.eqls("SUFFIX_THREE");
          expect(myInstance.getSuffixFirstRep()).to.eqls(new StringDt("SUFFIX_THREE"));
        });

      });
       describe("Support for RAW use",()=>{
        it("Support initilialization from constructor",()=>{
          let myInstance=new HumanNameDt({prefix:["SUFFIX_ONE","SUFFIX_TWO"]});
          expect(myInstance.prefix).to.eqls(["SUFFIX_ONE","SUFFIX_TWO"]);
          expect(myInstance.getPrefix()).to.eqls([new StringDt("SUFFIX_ONE"),new StringDt("SUFFIX_TWO")]);
        });

        it("Support add RAW suffix to array",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addSuffix("SUFFIX_ONE");
          expect(myInstance.suffix).to.eqls(["SUFFIX_ONE"]);
          expect(myInstance.getSuffix()).to.eqls([new StringDt("SUFFIX_ONE")]);
        });

        it("NOT Support mutate array pushing into array from getter of the array element",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addSuffix("SUFFIX_ONE");
          let mySufixes=myInstance.getSuffix();
          mySufixes.push("SUFFIX_TWO");
          expect(myInstance.suffix).to.eqls(["SUFFIX_ONE","SUFFIX_TWO"]);
          expect(myInstance.getSuffix()).not.to.eqls([new StringDt("SUFFIX_ONE"),new StringDt("SUFFIX_TWO")]);
        });

        it("Support getting firstElement of suffix Array",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addSuffix("SUFFIX_ONE");
          myInstance.addSuffix("SUFFIX_TWO");
          expect(myInstance.getSuffixFirstRep().valueOf()).to.eqls("SUFFIX_ONE");
          expect(myInstance.getSuffixFirstRep()).to.eqls(new StringDt("SUFFIX_ONE"));
        });

        it("Support MUTATE firstElement of suffix Array",()=>{
          let myInstance=new HumanNameDt();
          myInstance.addSuffix("SUFFIX_ONE");
          myInstance.addSuffix("SUFFIX_TWO");
          myInstance.getSuffixFirstRep().value="SUFFIX_THREE";
          expect(myInstance.getSuffixFirstRep().valueOf()).to.eqls("SUFFIX_THREE");
          expect(myInstance.getSuffixFirstRep()).to.eqls(new StringDt("SUFFIX_THREE"));
        });

      });
    });

    describe("<Period> field",()=>{
      describe("Support for PeriodDt use",()=>{
        it("Support full period initialization throught constructor",()=>{
          let myInstance=new HumanNameDt({period:{start:"01-01-2010",end:"02-12-2010"}});
          expect(myInstance.getPeriodElement()).to.eqls(new PeriodDt({start:"01-01-2010",end:"02-12-2010"}));
        });

        it("Support partial period initialization throught constructor",()=>{
          let myInstance=new HumanNameDt({period:{start:"01-01-2010"}});
          expect(myInstance.getPeriodElement()).to.eqls(new PeriodDt({start:"01-01-2010"}));
          myInstance=new HumanNameDt({period:{end:"01-01-2010"}});
          expect(myInstance.getPeriodElement()).to.eqls(new PeriodDt({end:"01-01-2010"}));
        });

        it("Support setting PeriodDt throught setter element",()=>{
            let myInstance=new HumanNameDt();
            myInstance.setPeriodElement(new PeriodDt({start:"02-12-1978"}));
            expect(myInstance.getPeriodElement()).to.eqls(new PeriodDt({start:"02-12-1978"}));
            myInstance.setPeriodElement(new PeriodDt({end:"02-12-1978"}));
            expect(myInstance.getPeriodElement()).to.eqls(new PeriodDt({end:"02-12-1978"}));
            myInstance.setPeriodElement(new PeriodDt({start:"02-12-1978",end:"02-12-1978"}));
            expect(myInstance.getPeriodElement()).to.eqls(new PeriodDt({start:"02-12-1978",end:"02-12-1978"}));
        });

        it("Support setting PeriodDt throught direct field element",()=>{
          let myInstance=new HumanNameDt();
          myInstance.period=new PeriodDt({start:"02-12-1978"});
          expect(myInstance.getPeriodElement()).to.eqls(new PeriodDt({start:"02-12-1978"}));
          myInstance.period=new PeriodDt({end:"02-12-1978"});
          expect(myInstance.getPeriodElement()).to.eqls(new PeriodDt({end:"02-12-1978"}));
          myInstance.period=new PeriodDt({start:"02-12-1978",end:"02-12-1978"});
          expect(myInstance.getPeriodElement()).to.eqls(new PeriodDt({start:"02-12-1978",end:"02-12-1978"}));
      });


      it("Support MUTATING PeriodDt throught getter element",()=>{
        let myInstance=new HumanNameDt();
        myInstance.period=new PeriodDt({start:"02-12-1978"});
        let myPeriod=myInstance.getPeriodElement();
        myPeriod.setStartDate(new Date("01-01-1981"));
        expect(myInstance.getPeriodElement()).to.eqls(new PeriodDt({start:"01-01-1981"}));
        myInstance.period=new PeriodDt({end:"02-12-1978"});
        myPeriod=myInstance.getPeriodElement();
        myPeriod.setEndDate(new Date("01-01-1981"));
        expect(myInstance.getPeriodElement()).to.eqls(new PeriodDt({end:"01-01-1981"}));
        myInstance.period=new PeriodDt({start:"02-12-1978",end:"02-12-1978"});
        myPeriod=myInstance.getPeriodElement();
        myPeriod.setStartDate(new Date("01-01-1981"));
        myPeriod.setEndDate(new Date("01-01-1981"));
        expect(myInstance.getPeriodElement()).to.eqls(new PeriodDt({start:"01-01-1981",end:"01-01-1981"}));
    });


      });
      describe("Support for RAW use",()=>{

      });
    })



});

