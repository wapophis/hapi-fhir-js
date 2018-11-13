import {isValid,isEmpty,isEmptyArray} from '../../spi/utils/ValidationRules.js';

export const FHIResource= class FHIResource extends Object{
 
    constructor(rootObject){
        super();
        this.myId=new String();
        this.myResourceName=new String();
        this.myExtensions=new Array();
        this.myContainedResources=new Array();
        this.myLanguaje=new String();

        if(isValid(rootObject)){
            this.id=rootObject.id;
            this.resourceName=rootObject.resourceType;
            this.extensions=rootObject.extensions;
            this.contained=rootObject.contained;
            this.languaje=rootObject.languaje;
        }
    }

    get id(){
        if(!isValid(this.myId)){
            this.myId=new String();
        }
        return this.myId;
    }

    set id(newId){
        if(isValid(this.myId) && isValid(newId)){
            this.myId=newId;
        }
        return this;
    }

    isEmpty(){
        return isEmptyArray(this.contained)
        && isEmptyArray(this.extensions)
        && isEmpty(this.id);
    }

    get resourceName(){
        if(!isValid(this.myResourceName)){
            this.myResourceName=new String();
        }
        return this.myResourceName;
    }

    set resourceName(newResourceName){
        if(isValid(this.myResourceName) && isValid(newResourceName)){
            this.myResourceName=newResourceName;
        }

        return this;
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
}