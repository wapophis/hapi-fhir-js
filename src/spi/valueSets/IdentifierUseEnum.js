import CodingDt from '../dataTypes/CodingDt.js';

export const IdentifierUseEnum = Object.freeze({
    "USUAL":new CodingDt({code:'usual',display:"Usual"}),
    "OFFICIAL":new CodingDt({code:'official',display:"Official"}),
    "TEMP":new CodingDt({code:'temp',display:"Temp"}),
    "SECONDARY":new CodingDt({code:'secondary',display:"Secondary"}),
    getByCode(code){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
               return this[propName];
            }
         }

         return new CodingDt({code:code});
    }

});

export default IdentifierUseEnum;
