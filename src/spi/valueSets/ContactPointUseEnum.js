import CodingDt from '../dataTypes/CodingDt.js';

export const ContactPointUseEnum = Object.freeze({
    "HOME":new CodingDt({value:'home',display:"Hogar"}),
    "WORK":new CodingDt({value:'work',display:"Trabajo"}),
    "TEMP":new CodingDt({value:'temp',display:"Temporal"}),
    "OLD":new CodingDt({value:'old',display:"Antiguo"}),
    "MOBILE":new CodingDt({value:'mobile',display:"Móvil"}),
    getByCode(code){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].code==code) {
               return this[propName];
            }
         }

         return new CodingDt({code:code});
    }

});

export default ContactPointUseEnum;