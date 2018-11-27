export const AdministrativeGenderEnum = Object.freeze(
    {
        "MALE":{value:'male',display:"Masculino"},
        "FEMALE":{value:'female',display:"Femenino"},
        "OTHER":{value:'other', display:"Otro"},
        "UNKNOWN":{value:'unknown',display:"Desconocido"},

        getByValue(code){
            for(let propName in this) {
                if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
                   return this[propName];
                }
             }

             return code;
        }
});

export default AdministrativeGenderEnum;