export const AddressTypeEnum = Object.freeze(
    {
        "POSTAL":{value:'postal',display:"Postal"},
        "PHYSICAL":{value:'physical',display:"Física"},
        "BOTH":{value:'both',display:"Postal y física"},
        getByValue(code){
            for(let propName in this) {
                if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
                   return this[propName];
                }
             }

             return new String();
        }
});

export default AddressTypeEnum;