import CodingDt from '../dataTypes/CodingDt.js';

export const QuestionnaireItemTypeEnum = Object.freeze({
    "group":new CodingDt({level:1,code:'group'}),
    "display":new CodingDt({level:1,code:'display'}),
    "question":new CodingDt({level:1,code:'question'}),
    "boolean":new CodingDt({level:2,code:'boolean'}),
    "decimal":new CodingDt({level:2,code:'decimal'}),
    "integer":new CodingDt({level:2,code:'integer'}),
    "date":new CodingDt({level:2,code:'date'}),
    "dateTime":new CodingDt({level:2,code:'dateTime'}),
    "time":new CodingDt({level:2,code:'time'}),
    "string":new CodingDt({level:2,code:'string'}),
    "text":new CodingDt({level:2,code:'text'}),
    "url":new CodingDt({level:2,code:'url'}),
    "choice":new CodingDt({level:2,code:'choice'}),
    "open-choice":new CodingDt({level:2,code:'open-choice'}),
    "attachment":new CodingDt({level:2,code:'attachment'}),
    "reference":new CodingDt({level:2,code:'reference'}),
    "quantity":new CodingDt({level:2,code:'quantity'}),
    "notSelectable":new CodingDt({level:null,code:'notSelectable'}),

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

export default QuestionnaireItemTypeEnum;