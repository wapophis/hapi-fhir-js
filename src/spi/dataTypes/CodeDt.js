import {isValid,isEmpty} from '../../utils/ValidationRules.js';


  
/**
 * Created by Luis Martínez Fontiveros at 09-05-2019
 * 
 * Code Primitive Data type with basic checkings.
 */
export default class Code{

    constructor(value){
        this.myCoercedValue='';
        this.value=value;
    }

    get value(){
        return this.myCoercedValue;
    }

    set value(newValue){
        
        if( (typeof newValue==='object') || (typeof newValue==='number') ){
            throw "CodeDt cannot be cast to other object than an String...";
        }

        if(isValid(newValue)){
            this.myCoercedValue=this._sanitize(`${newValue}`);
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
       return codeValue.replace(/^\s+|\s+$/g, '');
    }

    
    [Symbol.toPrimitive](hint){
        switch(hint){
            case 'string':{
                return this.value;
            }

            case 'number':{
                throw "CodeDt cannot be cast to a number format, only string supported"
            }

            default:
                return this.isEmpty();
        }
    }
    
}