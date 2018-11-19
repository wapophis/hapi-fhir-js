import CodingDt from '../dataTypes/CodingDt.js';

export const MaritalStatusEnum = Object.freeze({
    "A":{code:'A',display:"Annulled",system:"http://hl7.org/fhir/v3/MaritalStatus"},
    "D":{code:'D',display:"Divorced",system:"http://hl7.org/fhir/v3/MaritalStatus"},
    "I":{code:'I',display:"Interlocutory",system:"http://hl7.org/fhir/v3/MaritalStatus"},
    "L":{code:'L',display:"Legally Separated",system:"http://hl7.org/fhir/v3/MaritalStatus"},
    "M":{code:'M',display:"Married",system:"http://hl7.org/fhir/v3/MaritalStatus"},
    "P":{code:'P',display:"Polygamous",system:"http://hl7.org/fhir/v3/MaritalStatus"},
    "S":{code:'S',display:"Never Married",system:"http://hl7.org/fhir/v3/MaritalStatus"},
    "T":{code:'T',display:"Domestic partner",system:"http://hl7.org/fhir/v3/MaritalStatus"},
    "U":{code:'U',display:"unmarried",system:"http://hl7.org/fhir/v3/MaritalStatus"},
    "W":{code:'W',display:"Widowed",system:"http://hl7.org/fhir/v3/MaritalStatus"},
    "UNK":{code:'UNK',display:"unknown",system:"http://hl7.org/fhir/v3/MaritalStatus"},
    
    getByCode(codingDt){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].code===codingDt.code) {
               return this[propName];
            }
         }

         return codingDt;
    },

    getByCodeValue(code){
        return this.getByCode(new CodingDt().setCode(code))
    }

});

export default MaritalStatusEnum;
