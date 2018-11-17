import {isUndefined} from '../../utils/ValidationRules.js';

/**
 * Created by lucho 15-11-2018
 * @param {*} root 
 */
export default class _BooleanDt extends Boolean{

    constructor(value){
        super(value);
        this.isUndefined=isUndefined(value);
    }

    valueOf(){
        if(this.isUndefined===false){
            return super.valueOf();
        }
        debugger;
    }

    isEmpty(){
        return this.isUndefined;
    }

};


