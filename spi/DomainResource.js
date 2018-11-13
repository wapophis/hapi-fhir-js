import {isUndefined,isValid} from '../../spi/utils/ValidationRules.js';
import {FHIResource} from './Resource.js';

export const DomainResource= class DomainResource extends FHIResource{
 
    constructor(rootObject){
        super(rootObject);

        this.myText=new Narrative();

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
        return this.hasText() 
        &&  super.isEmpty();
    }

    get text(){
        if(!isValid(this.myText)){
            this.myText=new String();
        }
        return this.myText;
    }

    set text(newText){
        if(isValid(this.myText) && isValid(newText)){
            this.myText=new Narrative(newText);    
        }
        return this;
    }
}


export const Narrative= class Narrative extends Object{
    
       constructor(rootObject){
           super();
           
           this.myDiv=new String();
           this.myStatus=new String();
           if(isValid(rootObject)){
           this.div=rootObject.div;
           this.status=rootObject.status;
           }
       
    }


       get div(){
            if(!isValid(this.myDiv)){
                this.myDiv=new String();
            }
            return this.myDiv;
       }
       
       set div(newDiv){
            if(isValid(this.myDiv) && isValid(newDiv)){
                this.myDiv=newDiv;
            }
            return this;
       }

       set status(newStatus){
        if(isValid(this.myStatus) && isValid(newStatus)){
            this.myStatus=newStatus;
        }
        return this;
       }

       get status(){
        if(!isValid(this.myStatus)){
            this.myStatus=new String();
        }
        return this.myStatus;
       }
        
    }
   