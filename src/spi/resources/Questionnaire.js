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
import _CodingDt from '../dataTypes/CodingDt.js';
import QuestionnaireItemTypeEnum from '../valueSets/QuesttionnaireItemType.js';
import EnableWhenBehaviourEnum from '../valueSets/EnableWhenBehaviourEnum.js';

/** R 4.0.1 */
export default class Questionnaire extends  ResourceMixin( ContainedMixin( IdentificableResource)){
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

    addDerivedFromElement(newValue){
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

    addSubjectTypeElement(newValue){
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

    addContactElement(newValue){
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

    addUseContextElement(newValue){
        return this.appendDataTypeArrayElement("myUseContext",_UsageContextMdT,newValue);
      }


    get jurisdiction(){
        return this.getterDataTypeArrayElement("myJurisdiction",_CodeableConceptDt).valueOf();
      }

    set jurisdiction(newValue){
      this.setterDataTypeArrayElement("myJurisdiction",_CodeableConceptDt,newValue);
      return this;
      }

    addJurisdictionElement(newValue){
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

    addCodeElement(newValue){
        return this.appendDataTypeArrayElement("myCode",Code,newValue);
    }

      get item(){
        return this.getterDataTypeArrayElement("myItem",Item).valueOf();
      }

    set item(newValue){
      this.setterDataTypeArrayElement("myItem",Item,newValue);
      return this;
      }

    addItemElement(newValue){
        return this.appendDataTypeArrayElement("myItem",Item,newValue);
      }

    _flatten(){
      return this;
    }

  }

  /**
   * ITEM ELEMENT
   */
    export class Item extends QuestionnaireItemRulesMixin( ResourceMixin (FlattenAbleObject)){
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
        this.maxLength=root.maxLength;
        this.answerValueSet=root.answerValueSet;
        this.answerOption=root.answerOption;
        this.initial=root.initial;
        this.item=root.item;
        }
      }

      get linkId(){
          return this.getterDataTypeElement("myLinkId",StringDt).valueOf();
      }

      set linkId(newValue){
        this.setterDataTypeElement("myLinkId",StringDt,newValue);
        return this;
      }

      get definition(){
        return this.getterDataTypeElement("myDefinition",StringDt).valueOf();
      }

      set definition(newValue){
        this.setterDataTypeElement("myDefinition",StringDt,newValue);
        return this;
      }

      get code(){
        return this.getterDataTypeArrayElement("myCode",_CodingDt);
      }

      set code(newValue){
        this.checkRuleDisplayItemsNotHaveCodeAsserted();
        this.setterDataTypeArrayElement("myCode",_CodingDt,newValue);
        return this;
      }

      addCodeElement(newValue){
        return this.appendDataTypeArrayElement("myCode",_CodingDt,newValue);
      }

      get prefix(){
        return this.getterDataTypeElement("myPrefix",StringDt).valueOf();
      }

    set prefix(newValue){
      this.setterDataTypeElement("myPrefix",StringDt,newValue);
      return this;
      }

      get text(){
        return this.getterDataTypeElement("myText",StringDt).valueOf();
      }

    set text(newValue){
      this.setterDataTypeElement("myText",StringDt,newValue);
      return this;
      }

      get type(){
        return this.getterDataTypeElement("myType",StringDt).valueOf();
      }

    set type(newValue){
      if(!QuestionnaireItemTypeEnum.checkCode(newValue)){
        throw new TypeError("QuesttionarieType specified not supported");
      }
      this.setterDataTypeElement("myType",StringDt,newValue);
      return this;
      }

      get enableWhen(){
        return this.getterDataTypeArrayElement("myEnableWhen",EnableWhen);
      }

      set EnableWhen(newValue){
        this.checkRuleEnableBehaviourWhenEnableWhen();
        this.setterDataTypeArrayElement("myEnableWhen",EnableWhen,newValue);
        return this;
      }

      addEnableWhenElement(newValue){
        this.checkRuleEnableBehaviourWhenEnableWhen();
        return this.appendDataTypeArrayElement("myEnableWhen",EnableWhen,newValue);
      }

      get enableBehaviour(){
        return this.getterDataTypeElement("myEnableBehaviour",Code).valueOf();
      }

      set enableBehaviour(newValue){
        this.checkRuleEnableBehaviourWhenEnableWhen();
        if(!EnableWhenBehaviourEnum.checkCode(newValue)){
          throw new TypeError("QuesttionarieType specified not supported");
        }
        this.setterDataTypeElement("myEnableBehaviour",Code,newValue);
        return this;
      }

      get required(){
        return this.getterDataTypeElement("myRequired",_BooleanDt).valueOf();
      }

      set required(newValue){
        this.checkRuleDisplayItemsCantHaveRequiredAndRepeat();
        this.setterDataTypeElement("myRequired",_BooleanDt,newValue);
        return this;
      }

      get repeats(){
        return this.getterDataTypeElement("myRepeats",_BooleanDt).valueOf();
      }

      set repeats(newValue){
        this.checkRuleDisplayItemsCantHaveRequiredAndRepeat();
        this.setterDataTypeElement("myRepeats",_BooleanDt,newValue);
        return this;
      }

      get readOnly(){
        return this.getterDataTypeElement("myReadOnly",_BooleanDt).valueOf();
      }

      set readOnly(newValue){
        this.checkRuleDisplayItemsCantBeReadOnly();
        this.setterDataTypeElement("myReadOnly",_BooleanDt,newValue);
        return this;
      }

      get maxLength(){
        return this.getterDataTypeElement("myMaxLength",Number).valueOf();
      }

      set maxLength(newValue){
        this.checkRuleDisplayItemsCantBeReadOnly();
        this.setterDataTypeElement("myMaxLength",Number,newValue);
        return this;
      }

      get answerValueSet(){
        return this.getterDataTypeElement("myAnswerValueSet",_ReferenceDt).valueOf();
      }

      set answerValueSet(newValue){
        this.checkRuleDisplayItemsCantBeReadOnly();
        this.setterDataTypeElement("myAnswerValueSet",_ReferenceDt,newValue);
        return this;
      }

      get answerOption(){
        return this.getterDataTypeElement("myAnswerOptions",AnswerOption).valueOf();
      }

      set answerOption(newValue){
        this.checkRuleDisplayItemsCantBeReadOnly();
        this.setterDataTypeElement("myAnswerOptions",AnswerOption,newValue);
        return this;
      }

      get initial(){
        return this.getterDataTypeArrayElement("myInitial",Initial);
      }

      set initial(newValue){
        this.checkRuleEnableBehaviourWhenEnableWhen();
        this.setterDataTypeArrayElement("myInitial",Initial,newValue);
        return this;
      }

      addInitialWhenElement(newValue){
        this.checkRuleMissingInitialWhenAnswerIsPresent();
        this.checkRuleMultipleInitialsOnlyForRepeatingItems();
        this.checkRuleGroupItemsCantHaveInitials();
        this.checkRuleDisplayItemsCantHaveInitials();
        return this.appendDataTypeArrayElement("myInitial",Initial,newValue);
      }

      get item(){
        return this.getterDataTypeArrayElement("myInitial",Initial);
      }

      set item(newValue){
        this.checkRuleDisplayItemsNotHaveNestedItems();
        this.checkRuleGroupItemsMustHaveNestedItems();
        this.setterDataTypeArrayElement("myInitial",Initial,newValue);
        return this;
      }

      addItemElement(newValue){
        this.checkRuleDisplayItemsNotHaveNestedItems();
        this.checkRuleGroupItemsMustHaveNestedItems();
        return this.appendDataTypeArrayElement("myInitial",Initial,newValue);
      }

        _flatten(){
          return this;
        }
    }

  /**
   * ENABLE WHEN
   */
  export class EnableWhen extends EnableWhenRulesMixin(ResourceMixin( FlattenAbleObject)){
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
