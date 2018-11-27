import CodingDt from '../dataTypes/CodingDt.js';

export const IdentifierTypeEnum = Object.freeze({
    "UDI":new CodingDt({code:'UDI',display:"Usual"}),
    "SNO":new CodingDt({code:'SNO',display:"Official"}),
    "SB":new CodingDt({code:'SB',display:"Temp"}),
    "PLAC":new CodingDt({code:'PLAC',display:"Secondary"}),
    "FILL":new CodingDt({code:'FILL',display:"Secondary"}),
    
    getByValue(code){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
               return this[propName];
            }
         }

         return new CodingDt({code:code});
    }

});

export default IdentifierUseEnum;