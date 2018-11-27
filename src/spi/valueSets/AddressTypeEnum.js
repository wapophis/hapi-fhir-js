import CodingDt from '../dataTypes/CodingDt.js';

export const AddressTypeEnum = Object.freeze(
    {
        "POSTAL":new CodingDt({code:'postal',display:"Postal"}),
        "PHYSICAL":new CodingDt({code:'physical',display:"Física"}),
        "BOTH":new CodingDt({code:'both',display:"Postal y física"}),
        getByCode(code){
            for(let propName in this) {
                if((typeof(this[propName]) != "undefined") && this[propName].code==code) {
                   return this[propName];
                }
             }

             return new CodingDt({code:code});
        }
});

export default AddressTypeEnum;