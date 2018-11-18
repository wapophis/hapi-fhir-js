export const IdentifierTypeEnum = Object.freeze({
    "UDI":{value:'UDI',display:"Usual"},
    "SNO":{value:'SNO',display:"Official"},
    "SB":{value:'SB',display:"Temp"},
    "PLAC":{value:'PLAC',display:"Secondary"},
    "FILL":{value:'FILL',display:"Secondary"},
    
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