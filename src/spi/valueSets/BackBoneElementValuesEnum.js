import _BooleanDt from "../dataTypes/BooleanDt";
import _CodingDt from "../dataTypes/CodingDt";
import _ReferenceDt from "../dataTypes/ReferenceDt";

export const BackBoneElementValuesEnum = Object.freeze(
  {
      "valueBoolean":{typeOf:_BooleanDt},
      /*"valueDecimal":{typeOf:_DecimalDt,display:"Oveja"},*/
      /*"valueInteger":{typeOf:'serinuscd', display:"Canario Doméstico"},*/
      /*"valueDate":{typeOf:'serinuscd'},
      "valueDateTime":{typeOf:'serinuscd'},
      "valueTime":{typeOf:'serinuscd'},*/
      "valueString":{typeOf:'serinuscd'},
      /*"valueAttachment":{typeOf:'serinuscd', display:"Canario Doméstico"},*/
      "valueCoding":{typeOf:_CodingDt},
      /*"valueQuantity":{typeOf:'serinuscd', display:"Canario Doméstico"},*/
      "valueReference":{typeOf:_ReferenceDt},


      getByValue(code){
          for(let propName in this) {
              if((typeof(this[propName]) != "undefined") && this[propName].value===code) {
                 return this[propName];
              }
           }
      }
});

export default AdministrativeGenderEnum;