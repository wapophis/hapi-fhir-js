export const ContactPointUseEnum = Object.freeze({
    "HOME":{value:'home',display:"Hogar"},
    "WORK":{value:'work',display:"Trabajo"},
    "TEMP":{value:'temp',display:"Temporal"},
    "OLD":{value:'old',display:"Antiguo"},
    "MOBILE":{value:'mobile',display:"Móvil"},

    getByValue(code){
        for(let propName in this) {
            if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
               return this[propName];
            }
         }
    }

});