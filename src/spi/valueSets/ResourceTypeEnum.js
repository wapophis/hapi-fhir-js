
import CodingDt from '../dataTypes/CodingDt.js';

export const ResourceTypeEnum = Object.freeze({
    "ACCOUNT":new CodingDt({code:'Account',display:"Account"}),
    "ACTIVITYDEFINITION":new CodingDt({code:'ActivityDefinition',display:"ActivityDefinition"}),
    "ADVERSEEVENT":new CodingDt({code:'AdverseEvent',display:"AdverseEvent"}),
    "ALLERGYINTOLERANCE":new CodingDt({code:'AllergyIntolerance',display:"AllergyIntolerance"}),
    // TODO: COMPLETE THIS WITH http://hl7.org/fhir/resource-types


    getByCode(code){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].code===code) {
               return this[propName];
            }
         }

         return new CodingDt({code:code});
    }

    ,checkCode(code){
      for(let propName in this) {
        if((typeof(this[propName]) != "undefined") && this[propName].code===code) {
           return true;
        }
     }
     return false;
    }

});

export default ResourceTypeEnum;