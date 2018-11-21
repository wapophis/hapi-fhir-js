import CodingDt from '../dataTypes/CodingDt.js';

export const AddressUseEnum = Object.freeze(
    {
        "HOME":new CodingDt({code:'home',display:"Hogar"}),
        "WORK":new CodingDt({code:'work',display:"Trabajo"}),
        "TEMP":new CodingDt({code:'temp', display:"Temporal"}),
        "OLD":new CodingDt({code:'old',display:"Antiguo/Incorrecto"}),

        getByCode(code){
            for(let propName in this) {
                if((typeof(this[propName]) != "undefined") && this[propName].code==code) {
                   return this[propName];
                }
             }
             return new CodingDt();
        }
});

export default AddressUseEnum;