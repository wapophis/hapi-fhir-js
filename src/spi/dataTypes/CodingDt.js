import {isUndefined,isValid,isEmpty} from '../../utils/ValidationRules.js';
import _BooleanDt from './BooleanDt.js';

/**
 * Created by lucho 12-11-2018
 * @param {*} root 
 */
export default class _CodingDt extends Object{
    constructor(root){
        super();

        if(isValid(root)){
            this.system=root.system;
            this.version=root.version;
            this.code=root.code;
            this.display=root.display;
            this.userSelected=root.userSelected;
        }

    }


    get system(){
        if(!isValid(this.mySystem)){
            this.mySystem=new String();
        }

        return this.mySystem;
    }

    set system(newValue){
        this.mySystem=newValue;
        return this;
    }

    get version(){
        if(!isValid(this.myVersion)){
            this.myVersion=new String();
        }

        return this.myVersion;
    }

    set version(newValue){
        this.myVersion=newValue;
        return this;
    }

    get code(){
        if(!isValid(this.myCode)){
            this.myCode=new String();
        }

        return this.myCode;
    }

    set code(newValue) {
        this.myCode=newValue;
        return this;
    }

    setCode(newValue){
        return this.code=newValue;
    }

    get display(){
        if(!isValid(this.myDisplay)){
            this.myDisplay=new String();
        }

        return this.myDisplay;
    }

    set display(newValue){
        this.myDisplay=newValue;
        return this;
    }

    get userSelected(){
        if(!isValid(this.myUserSelected)){
            this.myUserSelected=new _BooleanDt();
        }
        return this.myUserSelected;
    }

    set userSelected(newValue){
        this.myUserSelected=newValue;
        return this;
    }

    isEmpty(){
        return isEmpty(this.code) &&
        isEmpty(this.display) &&
        isEmpty(this.system) &&
        isEmpty(this.version) &&
        this.userSelected.isEmpty();
    }
}
