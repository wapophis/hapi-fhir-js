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
            this.system=root.system;
            this.version=root.version;
            this.code=root.code;
            this.display=root.display;
            this.userSelected=root.userSelected;
        }else{
            this.system=undefined;
            this.version=undefined;
            this.code=undefined;
            this.display=undefined;
            this.userSelected=undefined;
        }
    }

    get system(){
        return this.getSystem().valueOf();
    }

    getSystem(){
        if(!isValid(this.mySystem)){
            this.mySystem=new StringDt();
        }
        return this.mySystem;
    }


    set system(newValue){
        return this.setSystem(new StringDt(newValue));
    }


    setSystem(newValue){
        if(!newValue instanceof StringDt){
            throw new TypeError("Type invalid. Specify an StringDt");
        }
        this.mySystem=newValue;
        return this;
    }

    get version(){
        return this.getVersion().valueOf();
    }
    
    getVersion(){
        if(!isValid(this.myVersion)){
            this.myVersion=new StringDt();
        }
        return this.myVersion;
    }

    set version(newValue){
        return this.setVersion(new StringDt(newValue));
    }

    setVersion(newValue){
        if(!newValue instanceof StringDt){
            throw new TypeError("Type invalid. Specify an StringDt");
        }
        this.myVersion=newValue;
        return this;
    }


    get code(){
        return this.getCode().valueOf();
    }

    getCode(){
        if(!isValid(this.myCode)){
            this.myCode=new StringDt();
        }
        return this.myCode;
    }


    set code(newValue) {
        return this.setCode(new StringDt(newValue));
    }

    setCode(newValue){
        if(!newValue instanceof StringDt){
            throw new TypeError("Type invalid. Specify an StringDt");
        }
        this.myCode=newValue;
        return this;
    }

    get display(){
        return this.getDisplay().valueOf();
    }

    getDisplay(){
        if(!isValid(this.myDisplay)){
            this.myDisplay=new StringDt();
        }

        return this.myDisplay;
    }


    set display(newValue){
        return this.setDisplay(new StringDt(newValue));
    }


    setDisplay(newValue){
        if(!newValue instanceof StringDt){
            throw new TypeError("Type invalid. Specify an StringDt");
        }
        this.myDisplay=newValue;
        return this;
    }

    get userSelected(){
        return this.getUserSelected().valueOf();
    }

    getUserSelected(){
        if(!isValid(this.myUserSelected)){
            this.myUserSelected=new BooleanDt();
        }
        return this.myUserSelected;
    }

    set userSelected(newValue){
        return this.setUserSelected(new BooleanDt(newValue));
    }

    setUserSelected(newValue){
        if(!newValue instanceof BooleanDt){
            throw new TypeError("Type invalid. Specify an BooleanDt");
        }
        this.myUserSelected=newValue;
    }

    isEmpty(){
        return this.myCode.isEmpty() &&
        this.myDisplay.isEmpty() &&
        this.mySystem.isEmpty() &&
        this.myVersion.isEmpty() &&
        this.myUserSelected.isEmpty();
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

    valueOf(){
       let oVal=new Object();
       
       if(!this.myCode.isEmpty()){
        oVal.code=this.code;
       }

       if(!this.myVersion.isEmpty()){
        oVal.version=this.version;
       }

       if(!this.mySystem.isEmpty()){
        oVal.system=this.system;
       }

       if(!this.myUserSelected.isEmpty()){
        oVal.userSelected=this.userSelected;
       }

       if(!this.myDisplay.isEmpty()){
        oVal.display=this.display;
       }
       
       return oVal;
    }

    equals(object){
        if((object instanceof _CodingDt)===false){
            return false;
        }

        let t=this.valueOf();
        let o=object.valueOf();
         
        if(Object.keys(t).length===Object.keys(o).length){
            for(let propName in t){
                if( (typeof t[propName])!==undefined && (typeof o[propName])===undefined){
                    return false;
                }
                if(t[propName]!==o[propName]){
                    return false;
                }
            }
        }else{
            return false;
        }  
        return true;
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
