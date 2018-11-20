import {isUndefined,isValid,isEmpty} from '../../utils/ValidationRules.js';
import BooleanDt from './BooleanDt.js';
import StringDt from './StringDt.js';

/**
 * Created by lucho 12-11-2018
 * @param {*} root 
 */
export default class _CodingDt extends Object{
    constructor(root){
        super();


        if(isValid(root)){
            this.system=new StringDt(root.system);
            this.version=new StringDt(root.version);
            this.code=new StringDt(root.code);
            this.display=new StringDt(root.display);
            this.userSelected=new StringDt(root.userSelected);
        }
    }

    get system(){
        if(!isValid(this.mySystem)){
            this.mySystem=new StringDt();
        }
        return this.mySystem;
    }

    getSystemValue(){
        return this.system.toString();
    }

    set system(newValue){
        this.mySystem=new StringDt(newValue);
        return this;
    }

    get version(){
        if(!isValid(this.myVersion)){
            this.myVersion=new StringDt();
        }

        return this.myVersion;
    }

    getVersionValue(){
        return this.version.toString();
    }

    set version(newValue){
        this.myVersion=new StringDt(newValue);
        return this;
    }

    get code(){
        if(!isValid(this.myCode)){
            this.myCode=new StringDt();
        }
        return this.myCode;
    }

    getCodeValue(){
        debugger;
        return this.code.toString();
    }

    set code(newValue) {
        debugger;
        this.myCode=new StringDt(newValue);
        return this;
    }

    setCode(newValue){
        return this.code=newValue;
    }

    get display(){
        if(!isValid(this.myDisplay)){
            this.myDisplay=new StringDt();
        }

        return this.myDisplay;
    }

    getDisplayValue(){
       return this.display.toString();
    }

    set display(newValue){
        this.myDisplay=new StringDt(newValue);
        return this;
    }

    get userSelected(){
        if(!isValid(this.myUserSelected)){
            this.myUserSelected=new BooleanDt();
        }
        return this.myUserSelected;
    }

    set userSelected(newValue){
        this.myUserSelected=new BooleanDt(newValue);
        return this;
    }

    isEmpty(){
        return this.code.isEmpty() &&
        this.display.isEmpty() &&
        this.system.isEmpty() &&
        this.version.isEmpty() &&
        this.userSelected.isEmpty();
    }

    toString(){
        return JSON.stringify({
            code:this.code.toString(),
            system:this.system.toString(),
            version:this.version.toString(),
            display:this.display.toString(),
            userSelected:this.userSelected.valueOf()
        });
      
    }

    equals(object){
        return this.toString()==object.toString();
    }

    [Symbol.toPrimitive](hint){
            console.log("TOPRIMITIVE CALLED");
            switch(hint){
                case 'string':{
                    return this.toString();
                }
    
                case `boolean`:{
                    return this.isEmpty();
                }
                default:
                    return this.toString();
            }
        }

}
