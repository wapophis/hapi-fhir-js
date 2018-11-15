export const IdentifierUseEnum = Object.freeze({
    "USUAL":{value:'usual',display:"Usual"},
    "OFFICIAL":{value:'official',display:"Official"},
    "TEMP":{value:'temp',display:"Temp"},
    "SECONDARY":{value:'secondary',display:"Secondary"},
    getByValue(code){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
               return this[propName];
            }
         }

         return new String();
    }

});

export default IdentifierUseEnum;
