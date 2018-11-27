
import CodingDt from '../dataTypes/CodingDt.js';

export const NarrativeStatusEnum = Object.freeze({
    "GENERATED":new CodingDt({code:'generated',display:"Generated"}),
    "EXTENSIONS":new CodingDt({code:'extensions',display:"Extensions"}),
    "ADDITIONAL":new CodingDt({code:'additional',display:"Additional"}),
    "EMPTY":new CodingDt({code:'empty',display:"Empty"}),
  

    getByCode(code){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].code===code) {
               return this[propName];
            }
         }
         
         return new CodingDt({code:code});
    }

});

export default NarrativeStatusEnum;