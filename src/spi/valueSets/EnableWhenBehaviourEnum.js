import CodingDt from '../dataTypes/CodingDt.js';

export const EnableWhenBehaviourEnum = Object.freeze({
    "all":new CodingDt({code:'all',display:"All"}),
    "any":new CodingDt({code:'any',display:"Any"}),

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

export default EnableWhenBehaviourEnum;