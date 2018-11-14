import {isUndefined,isValid} from '../../utils/ValidationRules.js';

/**
 * Created by lucho 12-11-2018
 * @param {*} root 
 */
export const CodingDt= class CodingDt extends Object{
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
        this.mySystem=newValue();
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
            this.myUserSelected=new Boolean();
        }

        return this.myUserSelected;
    }

    set userSelected(newValue){
        this.myUserSelected=newValue;
        return this;
    }
}