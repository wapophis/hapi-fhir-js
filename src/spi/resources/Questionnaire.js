import {isValid} from '../../utils/ValidationRules.js';
import FlattenAbleObject from '../FlattenAbleObject.js';
import ContainedMixin from '../mixins/ContainedMixin.js';
import ResourceMixin from '../mixins/ResourceMixin.js';
import QuestionnaireItemRulesMixin from '../mixins/QuestionnaireItemRulesMixin.js'
import IdentificableResource from './IdentificableResource.js';

import _BackBoneElement from './BackBoneElement.js';
import _ReferenceDt from '../dataTypes/ReferenceDt.js';
import StringDt from '../dataTypes/StringDt.js';
import DateTimeDt from '../dataTypes/DateTimeDt.js';
import Code from '../dataTypes/CodeDt.js';
import { PublicationStatusEnum } from '../valueSets/PublicationStatusEnum.js';
import _BooleanDt from '../dataTypes/BooleanDt.js';
import ResourceTypeEnum from '../valueSets/ResourceTypeEnum.js';
import _ContactDetailMdT from '../dataTypes/ContactDetailMdT.js';
import _UsageContextMdT from '../dataTypes/UsageContextMdT.js';
import _CodeableConceptDt from '../dataTypes/CodeableConceptDt.js';
import _DateDt from '../dataTypes/DateDt.js';
import _PeriodDt from '../dataTypes/PeriodDt.js';

/** R 4.0.1 */
export default class Questionnaire extends QuestionnaireItemRulesMixin (ResourceMixin( ContainedMixin( IdentificableResource))){
      constructor(root){
        super(root);

        // SET TO CHECK ITEMSID UNIQUE. Use set.has(idValue) to check in unique id.
        this.itemsIdManager=new Set();


        if(isValid(root)){
            this.url=root.url;
           // this.identifier=root.identifier;
            this.version=root.version;
            this.name=root.name;
            this.title=root.title;
            this.derivedFrom=root.derivedFrom;
            this.status=root.status;
            this.experimental=root.experimental;
            this.subjectType=root.subjectType;
            this.date=root.date;
            this.publisher=root.publisher;
            this.contact=root.contact;
            this.description=root.description;
            this.useContext=root.useContext;
            this.jurisdiction=root.jurisdiction;
            this.purpose=root.purpose;
            this.copyright=root.copyright;
            this.approvalDate=root.approvalDate;
            this.lastReviewDate=root.lastReviewDate;
            this.effectivePeriod=root.effectivePeriod;
            this.code=root.code;
            this.item=root.item;
        }
    }

    get url(){
        return this.getterDataTypeElement("myUrl",_ReferenceDt).valueOf();
    }

    set url(newValue){
      this.setterDataTypeElement("myUrl",_ReferenceDt,newValue);
      return this;
    }

    get version(){
      return this.getterDataTypeElement("myVersion",StringDt).valueOf();
    }

    set version(newValue){
    this.setterDataTypeElement("myVesion",StringDt,newValue);
    return this;
    }

    get name(){
      return this.getterDataTypeElement("myName",StringDt).valueOf();
    }

    set name(newValue){
    this.setterDataTypeElement("myName",StringDt,newValue);
    return this;
    }

    get title(){
      return this.getterDataTypeElement("myTitle",StringDt).valueOf();
    }

    set title(newValue){
    this.setterDataTypeElement("myTitle",StringDt,newValue);
    return this;
    }


    get derivedFrom(){
      return this.getterDataTypeArrayElement("myDerivedFrom",_ReferenceDt).valueOf();
    }

    set derivedFrom(newValue){
    this.setterDataTypeArrayElement("myDerivedFrom",_ReferenceDt,newValue);
    return this;
    }

    addDerivedFrom(newValue){
      return this.appendDataTypeArrayElement("myDerivedFrom",_ReferenceDt,newValue);
    }


    get status(){
      return this.getterDataTypeElement("myStatus",Code).valueOf();
    }

    set status(newValue){
      if(!PublicationStatusEnum.checkCode(newValue)){
        throw TypeError("Not supported value for status defined");
      }
      this.setterDataTypeElement("myStatus",Code,newValue);
      return this;
    }


    get experimental(){
      return this.getterDataTypeElement("myExperimental",_BooleanDt).valueOf();
    }

    set experimental(newValue){
    this.setterDataTypeElement("myExperimental",_BooleanDt,newValue);
    return this;
    }

    get subjectType(){
      return this.getterDataTypeArrayElement("mySubjectType",Code).valueOf();
    }

    set subjectType(newValue){
      if(!ResourceTypeEnum.checkCode(newValue)){
        throw TypeError("Not supported value for status defined");
      }
      this.setterDataTypeArrayElement("mySubjectType",Code,newValue);
      return this;
    }

    addSubjectType(newValue){
      return this.appendDataTypeArrayElement("mySubjectType",Code,newValue);
    }


    get date(){
      return this.getterDataTypeElement("myDate",DateTimeDt).valueOf();
    }

    set date(newValue){
    this.setterDataTypeElement("myDate",DateTimeDt,newValue);
    return this;
    }

    get publisher(){
      return this.getterDataTypeElement("myPublisher",StringDt).valueOf();
    }

    get contact(){
        return this.getterDataTypeArrayElement("myContact",_ContactDetailMdT).valueOf();
      }

    set contact(newValue){
      this.setterDataTypeArrayElement("myContact",_ContactDetailMdT,newValue);
      return this;
      }

    addContact(newValue){
        return this.appendDataTypeArrayElement("myContact",_ContactDetailMdT,newValue);
      }

    get description(){
        return this.getterDataTypeElement("myDescription",StringDt).valueOf();
      }

    set description(newValue){
      this.setterDataTypeElement("myDescription",StringDt,newValue);
      return this;
      }

    get useContext(){
        return this.getterDataTypeArrayElement("myUseContext",_UsageContextMdT).valueOf();
      }

    set useContext(newValue){
      this.setterDataTypeArrayElement("myUseContext",_UsageContextMdT,newValue);
      return this;
      }

    addUseContext(newValue){
        return this.appendDataTypeArrayElement("myUseContext",_UsageContextMdT,newValue);
      }


    get jurisdiction(){
        return this.getterDataTypeArrayElement("myJurisdiction",_CodeableConceptDt).valueOf();
      }

    set jurisdiction(newValue){
      this.setterDataTypeArrayElement("myJurisdiction",_CodeableConceptDt,newValue);
      return this;
      }

    addJurisdiction(newValue){
        return this.appendDataTypeArrayElement("myJurisdiction",_CodeableConceptDt,newValue);
      }

    get purpose(){
        return this.getterDataTypeElement("myPurpose",StringDt).valueOf();
      }

    set purpose(newValue){
      this.setterDataTypeElement("myPurpose",StringDt,newValue);
      return this;
      }

    get copyright(){
        return this.getterDataTypeElement("myCopyright",StringDt).valueOf();
      }

    set copyright(newValue){
      this.setterDataTypeElement("myCopyright",StringDt,newValue);
      return this;
      }

    get approvalDate(){
        return this.getterDataTypeElement("myApprovalDate",_DateDt);
      }

    set approvalDate(newValue){
      this.setterDataTypeElement("myApprovalDate",_DateDt,newValue);
      return this;
      }

    get lastReviewDate(){
        return this.getterDataTypeElement("myLastReviewDate",_DateDt);
      }

    set lastReviewDate(newValue){
      this.setterDataTypeElement("myLastReviewDate",_DateDt,newValue);
      return this;
      }

    get effectivePeriod(){
        return this.getterDataTypeElement("myLastReviewDate",_PeriodDt);
      }

    set effectivePeriod(newValue){
      this.setterDataTypeElement("myLastReviewDate",_PeriodDt,newValue);
      return this;
      }
    get code(){
        return this.getterDataTypeArrayElement("myCode",Code).valueOf();
      }

    set code(newValue){
      this.setterDataTypeArrayElement("myCode",Code,newValue);
      return this;
      }

    addCode(newValue){
        return this.appendDataTypeArrayElement("myCode",Code,newValue);
    }

      get item(){
        return this.getterDataTypeArrayElement("myItem",Item).valueOf();
      }

    set item(newValue){
      this.setterDataTypeArrayElement("myItem",Item,newValue);
      return this;
      }

    addItem(newValue){
        return this.appendDataTypeArrayElement("myItem",Item,newValue);
      }

    _flatten(){
      return this;
    }

  }

  /**
   * ITEM ELEMENT
   */
    export class Item extends ResourceMixin (FlattenAbleObject){
      constructor(root){
        super(root);

        if(isValid(root)){
        this.linkId=root.linkId;
        this.definition=root.definition;
        this.code=root.code;
        this.prefix=root.prefix;
        this.text=root.text;
        this.type=root.type;
        this.enableWhen=root.enableWhen;
        this.enableBehaviour=root.enableBehaviour;
        this.required=root.required;
        this.repeats=root.repeats;
        this.readOnly=root.readOnly;
        this.maxLenght=root.maxLenght;
        this.answerValueSet=root.answerValueSet;
        this.answerOption=root.answerOption;
        this.initial=root.initial;
        this.item=root.item;
        }
      }

      _flatten(){
        return this;
      }
    }

  /**
   * ENABLE WHEN
   */
  export class EnableWhen extends FlattenAbleObject{
    constructor(root){
      super(root);
      if(isValid(root)){
        this.question=root.question;
        this.operator=root.operator;
        this.answer=root.answer;
      }
    }

    _flatten(){
      return this;
    }
  }


   /**
   * ANSWER OPTIONS
   */
  export class AnswerOption extends _BackBoneElement{
    constructor(root){
      super(root);
      if(isValid(root)){
        this.initialSelected=root.initialSelected;
      }
    }

    _flatten(){
      return this;
    }
  }


  /**
   * Initial
   */
  export class Initial extends _BackBoneElement{
    constructor(root){
      super(root);
    }

    _flatten(){
      return this;
    }
  }
