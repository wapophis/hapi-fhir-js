import {isUndefined,isValid,isEmpty,isEmptyArray,isEmptyDate} from '../../utils/ValidationRules.js';
import _CodingDt from '../dataTypes/CodingDt.js';
import CodeDt from '../dataTypes/CodeDt';
import {QuestionnaireResponseStatusEnum} from '../valueSets/QuestionnaireResponseStatusEnum';
import _ReferenceDt from '../dataTypes/ReferenceDt.js';
import IdentificableResource from './IdentificableResource.js';
import StringDt from '../dataTypes/StringDt.js';
import _BackBoneElement from './BackBoneElement.js';
import _DateTimeDt from '../dataTypes/DateTimeDt.js'
import FlattenAbleObject from '../FlattenAbleObject.js';
import ContainedMixin from '../mixins/ContainedMixin.js';
import Patient from './Patient.js';
import DomainResource from '../DomainResource.js';

/** R 4.0.1 */
export default class QuestionnaireResult extends ContainedMixin( IdentificableResource){
  constructor(root){
    super(root);

    if(isValid(root)){
        this.identifier=root.identifier;
        this.basedOn=root.basedOn;
        this.partOf=root.partOf;
        this.questionnaire=root.questionnaire;
        this.status=root.status;
        this.subject=root.subject;
        this.encounter=root.encounter;
        this.authored=root.authored;
        this.author=root.author;
        this.source=root.source;
        this.item=root.item;
    }
}

get item(){
  let oVal=new Array();
  this.getItemElement().forEach(item=>oVal.push(item.valueOf()));
  return oVal;
}

set item(newValue){
  newValue.forEach(value=>{
    if(value instanceof Item===false){
      this.addItemElement(new Item(value));
    }else{
      this.addItemElement(value);
    }
  });
  return this.getItemElement();
}

getItemElement(){
    if(!isValid(this.myItem)){
      this.myItem=new Array();
    }
    return this.myItem;
}

addItemElement(newValue){
  if(newValue instanceof Item===false){
   throw new TypeError("Expected a ReferenceDt value")
  }
  this.getItemElement().push(newValue);
  return newValue;
}



//
get source(){
  return this.getSourceElement().valueOf();
}

set source(newValue){
  this.setSourceElement(new _ReferenceDt(newValue));
  return this;
}

getSourceElement(){
    if(!isValid(this.mySubject)){
      this.mySource=new _ReferenceDt();
    }
    return this.mySource;
}

// TODO: CHECK RESOURCE TYPE
getSourceResource(){
  let oVal=new DomainResource();
  let q=this.getContainedResourceByReference(this.getSourceElement());
  if(!this.__checkResourceType(q,"Device")
  && !this.__checkResourceType(q,"Practitioner")
  && !this.__checkResourceType(q,"PractitionerRole")
  && !this.__checkResourceType(q,"RelatedPerson")
  ){
    throw new TypeError("ResourceType retrieved in contained is invalid");
  }
  if(!q===null){
      oVal=q;
  }
  return oVal;
}

setSourceElement(newValue){
  if(newValue instanceof _ReferenceDt===false){
    throw TypeError("ReferenceDt expected");
  }
  this.mySource=newValue;
  return this.mySource;
}


get author(){
  return this.getAuthorElement().valueOf();
}

set author(newValue){
  this.setAuthorElement(new _ReferenceDt(newValue));
  return this;
}

getAuthorElement(){
    if(!isValid(this.myAuthor)){
      this.myAuthor=new _ReferenceDt();
    }
    return this.myAuthor;
}

// TODO: CHECK RESOURCE TYPE
getAuthorResource(){
  let oVal=new DomainResource();
  let q=this.getContainedResourceByReference(this.getAuthorElement());
  if( q!==null && !this.__checkResourceType(q,"Device")
  && !this.__checkResourceType(q,"Practitioner")
  && !this.__checkResourceType(q,"PractitionerRole")
  && !this.__checkResourceType(q,"RelatedPerson")
  && !this.__checkResourceType(q,"Organization")){
    throw new TypeError("ResourceType retrieved in contained is invalid");
  }
  if(!q===null){
      oVal=q;
  }
  return oVal;
}


setAuthorElement(newValue){
  if(newValue instanceof _ReferenceDt===false){
    throw TypeError("ReferenceDt expected");
  }
  this.myAuthor=newValue;
  return this.myAuthor;
}

get encounter(){
  return this.getEncounterElement().valueOf();
}

set encounter(newValue){
  console.log(newValue);
  this.setEncounterElement(new _ReferenceDt(newValue));
  return this;
}

getEncounterElement(){
    if(!isValid(this.mySubject)){
      this.myEncounter=new _ReferenceDt();
    }
    return this.myEncounter;
}

// TODO: CHECK RESOURCE TYPE
getEncounterResource(){
  let oVal=new DomainResource();
  let q=this.getContainedResourceByReference(this.getEncounterElement());
  if(q!==null && !this.__checkResourceType(q,"Encounter")){
    throw new TypeError("ResourceType retrieved in contained is invalid");
  }
  if(!q===null){
      oVal=q;
  }
  return oVal;
}


setEncounterElement(newValue){
  if(newValue instanceof _ReferenceDt===false){
    throw TypeError("ReferenceDt expected");
  }
  this.myEncounter=newValue;
  return this.myEncounter;
}

get subject(){
  return this.getSubjectElement().valueOf();
}

set subject(newValue){
  this.setSubjectElement(new _ReferenceDt(newValue));
  return this;
}

getSubjectElement(){
    if(!isValid(this.mySubject)){
      this.mySubject=new _ReferenceDt();
    }
    return this.mySubject;
}
getSubjectPatientResource(){
  let oVal=new Patient();
  let q=this.getContainedResourceByReference(this.getPartOfElement());

  if(q!==null && !this.__checkResourceType(q,"Patient")){
    throw new TypeError("ResourceType retrieved in contained is invalid");
  }
  if(!q===null){
      oVal=q;
  }
  return oVal;
}

setSubjectElement(newValue){
  if(newValue instanceof _ReferenceDt===false){
    throw TypeError("ReferenceDt expected");
  }
  this.mySubject=newValue;
  return this.mySubject;
}

get questionnaire(){
  return this.getQuestionnaireElement().valueOf();
}

set questionnaire(newValue){
  this.setQuestionnaireElement(new _ReferenceDt(newValue));
  return this;
}

getQuestionnaireElement(){
    if(!isValid(this.myQuestionnaire)){
      this.myQuestionnaire=new _ReferenceDt();
    }
    return this.myQuestionnaire;
}

// TODO: UPDATES WITH PROPER RESOURCES
getQuestionnaireResource(){
  let oVal=new DomainResource();
  let q=this.getContainedResourceByReference(this.getQuestionnaireElement());
  if(q!==null && !this.__checkResourceType(q,"Questionnaire")){
    throw new TypeError("ResourceType retrieved in contained is invalid");
  }
  if(!q===null){
      oVal=q;
  }
  return oVal;
}



setQuestionnaireElement(newValue){
  if(newValue instanceof _ReferenceDt===false){
    throw TypeError("ReferenceDt expected");
  }
  this.myQuestionnaire=newValue;
  return this.myQuestionnaire;
}


get partOf(){
  let oVal=new Array();
  this.addPartOfElement().forEach(element=>oVal.push(element.valueOf()));
  return oVal;
}

set partOf(newValue){
  if(isValid(newValue)){
    this.getPartOfElement().forEach(element=>this.addPartOfElement(new _ReferenceDt(newValue)));
  }
  return this;
}

getPartOfElement(){
    if(!isValid(this.myPartOf)){
      this.myPartOf=new Array();
      this.myPartOf.isEmpty=function(){
        return this.length<=0;
      }
    }
    return this.myPartOf;
}

addPartOfElement(newValue){
  if(newValue instanceof _ReferenceDt===false){
   throw new TypeError("Expected a ReferenceDt value")
  }
  this.getPartOfElement().push(newValue);
  return newValue;
}

getPartOfResource(){
  let oVal=new DomainResource();
  let q=this.getContainedResourceByReference(this.getPartOfElement());
  if(q!==null && !this.__checkResourceType(q,"Observation") &&  !this.__checkResourceType(q,"Observation")){
    throw new TypeError("ResourceType retrieved in contained is invalid");
  }
  if(!q===null){
      oVal=q;
  }
  return oVal;
}


get basedOn(){
  let oVal=new Array();
   this.getBasedOnElement().forEach(element=>oVal.push(element.valueof()));
  return oVal;
}

set basedOn(newValue){
  if(isValid(newValue)){
    this.getBasedOnElement().forEach(element=>this.addBasedOnElement(new _ReferenceDt(element)));
  }
  return this;
}

getBasedOnElement(){
    if(!isValid(this.myBasedOn)){
      this.myBasedOn=new Array();
      this.myBasedOn.isEmpty=function(){
        return this.length<=0;
      }
    }

    return this.myBasedOn;
}

getBasedOnResource(){
  let oVal=new DomainResource();
  let q=this.getContainedResourceByReference(this.getBasedOnElement());
  if(q!==null && !this.__checkResourceType(q,"CarePlan") &&  !this.__checkResourceType(q,"ServiceRequest")){
    throw new TypeError("ResourceType retrieved in contained is invalid");
  }
  if(!q===null){
      oVal=q;
  }
  return oVal;
}

addBasedOnElement(newValue){
  if(newValue instanceof _ReferenceDt===false){
   throw new TypeError("Expected a ReferenceDt value")
  }
  this.getBasedOnElement().push(newValue);
  return newValue;
}



get status(){
  return this.getStatusElement().value;
}

getStatusElement(){
  if(!isValid(this.myStatus)){
      this.myStatus=new CodeDt();
  }
  return this.myStatus;
}

set status(newValue){
  if(isValid(newValue)){
    let code=QuestionnaireResponseStatusEnum.getByCode(newValue);
    this.setStatusElement(new CodeDt(code.code));
  }
}

setStatusElement(newValue){
  if(newValue instanceof CodeDt===false){
    throw new TypeError("Status field must be a CodeDt object");
  }
  this.myStatus=newValue;
  return this;
}

get authored(){
  return this.getAuthoredElement().valueOf();
}
getAuthoredElement(){
  if(!isValid(this.myAuthored)){
    this.myAuthored=new _DateTimeDt();
  }
  return this.myAuthored;
}

set authored(newValue){
  if(isValid(newValue)){
    this.setAuthoredElement(new _DateTimeDt(newValue));
  }
 return this;
}

setAuthoredElement(newValue){
  if(newValue instanceof _DateTimeDt===false){
    throw new TypeError("_DateTimeDt object expected");
  }
  this.myAuthored=newValue;
}

__checkResourceType(resource,type){
  if(isValid(resource) && !isUndefined(resource.resourceType)){
    return resource.resourceType===type;
  }
  return false;
}

}


/**
 * ITEM CLASS WICH REPRESENTS A QUESTIONARIE ITEM WICH HAVE O..N RESPONES AN 0..N SUBITEMS.
 */

export class Item extends FlattenAbleObject{
        constructor(root){
          super(root);
          if(isValid(root)){
          this.linkId=root.linkId;
          this.definition=root.definition;
          this.text=root.text;
          this.answer=root.answer;
          this.item=root.item;
          }
        }
      set item(newValue){
        if(isValid(newValue)){
          this.setItemElement(newValue);
        }
        return this;
      }

      get item(){
        let oVal=new Array();
        this.getItemElement().forEach(item=>oVal.push(item.valueOf()));
        return oVal;
      }

      getItemElement(){
        if(!isValid(this.myItem)){
            this.myItem=new Array();
            this.myItem.isEmpty=function(){
              return this.length<=0;
            }
        }
        return this.myItem;
      }

      setItemElement(newValue){
        newValue.forEach(item=>this.addItemElement(new Item(item)));
        return this;
      }

      addItemElement(newValue){
        if(newValue instanceof Item===false){
          throw new TypeError(" Item is requested");
        }
        this.getItemElement().push(newValue);
      }

      get answer(){
        let oVal=new Array();
        this.getAnswerElement().forEach(answer=>oVal.push(answer.valueOf()));
        return oVal;
      }

      set answer(newValue){
        if(isValid(newValue)){
          this.setAnswerElement(newValue);
        }
        return this;
      }

      getAnswerElement(){
        if(!isValid(this.myAnswer)){
          this.myAnswer=new Array();
          this.myAnswer.isEmpty=function(){
            return this.length<=0;
          }
        }
        return this.myAnswer;
      }

      setAnswerElement(newValue){
          newValue.forEach(answer=>this.addAnswerElement(new Answer(answer)));
          return this;

      }

      addAnswerElement(newValue){
        if(newValue instanceof Answer===false){
          throw TypeError("BackBone element spected");
        }
        this.getAnswerElement().push(newValue);

      }



      get text(){
          return this.getTextElement().valueOf();
      }

      set text(newValue){
          this.setTextElement(newValue);
      }

      setTextElement(newValue){
        if(isValid(newValue)){
          this.getTextElement().value=newValue.valueOf();
        }
      }
      getTextElement(){
        if(!isValid(this.myText)){
          this.myText=new StringDt();
        }
        return this.myText;
      }


      get definition(){
          return this.getDefinitionElement().valueOf();
      }

      set definition(newValue){
          this.setDefinitionElement(newValue);
      }

      setDefinitionElement(newValue){
        if(isValid(newValue)){
          this.getDefinitionElement().value=newValue.valueOf();
        }
      }
      getDefinitionElement(){
        if(!isValid(this.myDefinition)){
          this.myDefinition=new StringDt();
        }
        return this.myDefinition;
      }

      get linkId(){
          return this.getLinkElement().valueOf();
      }

      set linkId(newValue){
          this.setLinkIdElement(newValue);
      }

      setLinkIdElement(newValue){
        if(isValid(newValue)){
          this.getLinkElement().value=newValue.valueOf();
        }
      }
      getLinkElement(){
        if(!isValid(this.myLinkId)){
          this.myLinkId=new StringDt();
        }
        return this.myLinkId;
      }

      _flatten(){
        return this;
      }

}

/**
 * ANSWER CLASS WICH REPRESENTS A RESPONSE TO AN ITEM WICH HAVE AN 0..N SUBITEMS WICH QUALIFIES THIS ANSWER
 */
export class Answer extends _BackBoneElement{
    constructor(root){
      super(root);
    }

    set item(newValue){
      if(isValid(newValue)){
          this.setItemElement(newValue);
      }
      return this;
    }

    get item(){
        let oVal=new Array();
        this.getItemElement().forEach(item=>oVal.push(item.valueOf()));
        return oVal;
    }

    getItemElement(){
      if(!isValid(this.myItem)){
        this.myItem=new Array();
        this.myItem.isEmpty=function(){
          return this.length<=0;
        }
      }
      return this.myItem;
    }

    setItemElement(newValue){
      newValue.forEach(item=>{
          this.addItemElement(new Item(item));
      });
      return this;
    }

    addItemElement(newValue){
      if(newValue instanceof Item===false){
        throw new TypeError("Item instance expected");
      }
      this.getItemElement().push(newValue);
      return this;
    }

    _flatten(){
      let oVal=super._flatten();
      oVal.item=this.item;
      return oVal;
    }
}
