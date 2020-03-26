
import CodingDt from '../dataTypes/CodingDt.js';

export const PublicationStatusEnum = Object.freeze({
    "DRAFT":new CodingDt({code:'draft',display:"Draft"}),
    "ACTIVE":new CodingDt({code:'active',display:"Active"}),
    "RETIRED":new CodingDt({code:'retired',display:"Retired"}),
    "UNKNOWN":new CodingDt({code:'unknown',display:"Unknown"}),


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

export default PublicationStatusEnum;