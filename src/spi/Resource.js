import {isValid,isEmpty,isEmptyArray} from '../utils/ValidationRules.js';
import FlattenAbleObject from './FlattenAbleObject.js';
import IdDt from './dataTypes/IdDt.js';
import StringDt from './dataTypes/StringDt.js';
import ExtensionDt from './dataTypes/ExtensionDt.js';

export const FHIResource= class FHIResource extends FlattenAbleObject{

    constructor(rootObject){
        super();


        this.myExtensions=new Array();
        this.myContainedResources=new Array();
        this.myLanguaje=new String();

        if(isValid(rootObject)){
            this.id=rootObject.id;
            this.resourceName=rootObject.resourceName;
            this.resourceType=rootObject.resourceType;
            this.extensions=rootObject.extensions;
            this.contained=rootObject.contained;
            this.languaje=rootObject.languaje;
        }
    }

    get id(){
        return this.getIdElement().id.valueOf();
    }

    getIdElement(){
        if(!isValid(this.myId)){
            this.myId=new IdDt();
        }
        return this.myId;
    }

    set id(newId){
        this.getIdElement().id=newId
        return this;
    }

    setIdElement(newValue){
        if(newValue instanceof IdDt===false){
            throw new TypeError("Id field expects an IdDt object");
        }
        this.myId=newValue;
        return this;
    }

    isEmpty(){
        return true
        && isEmptyArray(this.contained)
        && isEmptyArray(this.extensions)
        && this.getIdElement().isEmpty();
    }

    get resourceName(){
        return this.getResourceNameElement().value;
    }

    getResourceNameElement(){
        if(!isValid(this.myResourceName)){
            this.myResourceName=new StringDt();
        }
        return this.myResourceName;
    }

    set resourceName(newResourceName){
        this.getResourceNameElement().value=newResourceName;
        return this;
    }

    setResourceNameElement(newValue){
        if(newValue instanceof StringDt===false){
            throw new TypeError("ResourceName field expects an StringDt object");
        }
        this.myResourceName=newValue;
        return this;
    }

    get resourceType(){
        return this.getResourceTypeElement().value;
    }
    getResourceTypeElement(){
        if(!isValid(this.myResourceType)){
            this.myResourceType=new StringDt();
        }
        return this.myResourceType;
    }
    set resourceType(newValue){
        this.getResourceTypeElement().value=newValue;
    }

    get extensions(){
        if(!isValid(this.myExtensions)){
            this.myExtensions=new Array();
        }

        return this.myExtensions;
    }

    set extensions(arrayExtension){
        if(Array.isArray(arrayExtension) && isValid(arrayExtension)){
            this.myExtensions=arrayExtension;
        }
        return this;
    }

    getNamedExtension(extensionUri){
        if(isValid(extensionUri) && isValid(this.myExtensions)){
            return this._searchExtensionByName(extensionUri);
        }
    }

    get contained(){
        if(!isValid(this.myContainedResources)){
            this.myContainedResources=new Array();
        }

        return this.myContainedResources;
    }

    set contained(arrayContained){
        if(Array.isArray(arrayContained) && isValid(arrayContained)){
            this.myContainedResources=arrayContained;
        }
        return this;
    }

    get languaje(){
        if(!isValid(this.myLanguaje)){
            this.myLanguaje=new String();
        }

        return this.myLanguaje;
    }



    set languaje(newLanguaje){
        if(isValid(this.myLanguaje) && isValid(newLanguaje)){
            this.myLanguaje=newLanguaje;
        }

        return this;
    }


    _addContainedResource(resourceReference){
        if(isValid(resourceReference)){
            this.contained.push(resourceReference);
        }

        return this;
    }



    _searchExtensionByName(extensionUri){
        for(let extension in this.myExtensions){
            if(isValid(extension) && extension.url===extensionUri){
                return extension;
            }
        }

        return new Object();
    }

    _flatten(){
        let oVal=new Object();
        if(!this.getIdElement().isEmpty()){
            oVal.id=this.id;
        }

        if(!this.getResourceNameElement().isEmpty()){
            oVal.resourceName=this.resourceName;
        }

        return oVal;
    }
}