import {isUndefined} from '../../utils/ValidationRules.js';

/**
 * Created by lucho 15-11-2018
 * @param {*} root 
 */
export default class BooleanDt extends Boolean{

    constructor(){
        super();
        this.isUndefined=isUndefined(value);
    }

    isEmpty(){
        return this.isUndefined && !this.valueOf();
    }

}
