export const AddressUseEnum = Object.freeze(
    {
        "HOME":{value:'home',display:"Hogar"},
        "WORK":{value:'work',display:"Trabajo"},
        "TEMP":{value:'temp', display:"Temporal"},
        "OLD":{value:'old',display:"Antiguo/Incorrecto"},

        getByValue(code){
            for(let propName in this) {
                if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
                   return this[propName];
                }
             }
        }
});

export default AddressUseEnum;