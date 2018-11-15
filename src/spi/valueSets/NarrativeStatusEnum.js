
export const NarrativeStatusEnum = Object.freeze({
    "GENERATED":{value:'generated',display:"Generated"},
    "EXTENSIONS":{value:'extensions',display:"Extensions"},
    "ADDITIONAL":{value:'additional',display:"Additional"},
    "EMPTY":{value:'empty',display:"Empty"},
  

    getByValue(code){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
               return this[propName];
            }
         }
         
         return new String();
    }

});

export default NarrativeStatusEnum;