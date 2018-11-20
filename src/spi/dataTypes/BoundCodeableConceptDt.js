import CodeableConceptDt from './CodeableConceptDt.js';
import CodingDt from './CodingDt.js';
import {isValid} from '../../utils/ValidationRules.js';

export default class BoundCodeableConceptDt extends Object{
    constructor(enumerable){
        super();
        this.enums=new Array();
        if(isValid(enumerable)){
            this.enums.push(enumerable);
        }
    }

    /**
     * Return a codeableConcept with coding binded to the Enum 
     * @param {*} codes Array of CodingDt to load into the codeable concept if match with the enum
     */
    forCodes(codes){
        let oVal=new CodeableConceptDt();

        for(let i=0;i<this.enums.length;i++){
            for(let j=0;j<codes.length;j++){
               oVal.addCoding(new CodingDt(this.enums[i].getByCode(codes[j])));
            }
        }
        return oVal;
    }
}