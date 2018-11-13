
export const NameUseEnum = Object.freeze({
    "USUAL":{value:'usual',display:"Habitual"},
    "OFFICIAL":{value:'official',display:"Oficial"},
    "TEMP":{value:'temp',display:"Temporal"},
    "NICKNAME":{value:'nickname',display:"Alias"},
    "ANONYMOUS":{value:'anonymous',display:"Anónimo"},
    "OLD":{value:'old',display:"Antiguo"},
    "MAIDEN":{value:'maiden',display:"Nombre de casado/a"},

    getByValue(code){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
               return this[propName];
            }
         }
    }

});

export default NameUseEnum;