import {isValid,isEmpty} from '../../utils/ValidationRules.js';


  

export default class Code{

    constructor(value){
        this.myCoercedValue='';
        this.value=value;
    }

    get value(){
        return this.myCoercedValue;
    }

    set value(newValue){
        if(isValid(_sanitize(newValue))){
            this.myCoercedValue=_sanitize(newValue);
        }
    }

    isEmpty(){
        return isEmpty(this.value);
    }

  /**
     * Technically, a code is restricted to a string which has at least one character and no leading or trailing whitespace,
     *  and where there is no whitespace other than single spaces in the contents
     */
    _sanitize(codeValue){
        codeValue.replace(/^\s+|\s+$/g, '');
    }

    
    [Symbol.toPrimitive](hint){
        switch(hint){
            case 'string':{
                return this.value;
            }

            case `boolean`:{
                return this.isEmpty();
            }
            case 'number':{
                throw "CodeDt cannot be cast to a number format, only string supported"
            }

            default:
                return this.value;
        }
    }
    
}