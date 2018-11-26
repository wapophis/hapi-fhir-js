
import CodingDt from '../dataTypes/CodingDt.js';

export const NameUseEnum = Object.freeze({
    "USUAL":new CodingDt({code:'usual',display:"Habitual"}),
    "OFFICIAL":new CodingDt({code:'official',display:"Oficial"}),
    "TEMP":new CodingDt({code:'temp',display:"Temporal"}),
    "NICKNAME":new CodingDt({code:'nickname',display:"Alias"}),
    "ANONYMOUS":new CodingDt({code:'anonymous',display:"Anónimo"}),
    "OLD":new CodingDt({code:'old',display:"Antiguo"}),
    "MAIDEN":new CodingDt({code:'maiden',display:"Nombre de casado/a"}),

    getByCode(code){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].code===code) {
               return this[propName];
            }
         }
         return new CodingDt({code:code});
    }

});

export default NameUseEnum;