import CodingDt from '../dataTypes/CodingDt.js';

export const ContactPointSystemEnum = Object.freeze({
    "MAIL":new CodingDt({code:'email',display:"Correo Electrónico"}),
    "FAX":new CodingDt({code:'fax',display:"Fax"}),
    "PAGER":new CodingDt({code:'pager',display:"Avisador"}),
    "PHONE":new CodingDt({code:'phone',display:"Teléfono"}),
    "URL":new CodingDt({code:'url',display:"Dirección web"}),
    getByCode(code){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].code==code) {
               return this[propName];
            }
         }

         return new CodingDt({code:code});
    }

});

export default ContactPointSystemEnum;