import CodingDt from '../dataTypes/CodingDt.js';
/** R 4.0.1 */
export const QuestionnaireResponseStatusEnum = Object.freeze(
    {
        "IN-PROGRESS":new CodingDt({code:'in-progress',display:"En progreso"}),
        "COMPLETED":new CodingDt({code:'completed',display:"Completado"}),
        "AMENDED":new CodingDt({code:'amended',display:"Rectificado"}),
        "ENTERED-IN-ERROR":new CodingDt({code:'entered-in-error',display:"Rellenado por error"}),
        "STOPPED":new CodingDt({code:'stopped',display:"Abandonado"}),
        getByCode(code){

            for(let propName in this) {
                if((typeof(this[propName]) != "undefined") && this[propName].code==code) {
                   return this[propName];
                }
             }

             return new CodingDt({code:code});
        }
});

export default QuestionnaireResponseStatusEnum;