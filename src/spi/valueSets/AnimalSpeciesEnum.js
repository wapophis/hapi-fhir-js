export const AnimalSpeciesEnum = Object.freeze(
    {
        "CANISLF":{value:'canislf',display:"Perro doméstico"},
        "SHEEP":{value:'Sheep',display:"Oveja"},
        "SERINUSCD":{value:'serinuscd', display:"Canario Doméstico"},
        

        getByValue(code){
            for(let propName in this) {
                if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
                   return this[propName];
                }
             }
        }
});

export default AdministrativeGenderEnum;