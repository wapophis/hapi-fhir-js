import {isUndefined,isValid,isEmpty,isEmptyArray} from '../utils/ValidationRules.js';
import {FHIResource} from './Resource.js';
import NarrativeDt from './dataTypes/NarrativeDt.js';

export default class DomainResource extends FHIResource{
 
    constructor(rootObject){
        super(rootObject);

        this.myText=new NarrativeDt();

        if(isValid(rootObject)){
            this.text=rootObject.text;
        }
    }

    addContained(resource){
        return super._addContainedResource(resource);
    }

    addExtension(extensionUri){
        if(isUndefined(extensionUri)){
            var myObjectExtension=new Object();
            this.myExtensions.push(myObjectExtension);
            return myObjectExtension;
        }

        if(!isValid(super._searchExtensionByName(extensionUri))){
            let myObjectExtension=new Object();
            myObjectExtension.url=extensionUri;
            this.myExtensions.push(myObjectExtension);
        }
        return this;
    }

    getExtensionsByUrl(urlExtension){
        let oVal=new Array();
        oVal.push(super._searchExtensionByName(urlExtension));
        return oVal;
    }

    hasContained(){
        return isValid(this.myContainedResources) && this.myContainedResources.length>0;
    }

    hasExtension(){
        return isValid(this.myExtensions)  && this.myContainedResources.length>0;;
    }

    hasText(){
        return isValid(this.myText) && this.myText.length>0;
    }

    isEmpty(){
        return super.isEmpty() && this.text.isEmpty(); 
    }

    get text(){
        if(!isValid(this.myText)){
            this.myText=new String();
        }
        return this.myText;
    }

    set text(newText){
        if(isValid(this.myText) && isValid(newText)){
            this.myText=new NarrativeDt(newText);    
        }
        return this;
    }
}
   