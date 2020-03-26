import FlattenAbleObject from '../FlattenAbleObject.js';
import ContainedMixin from '../mixins/ContainedMixin.js';
import IdentificableResource from './IdentificableResource.js';

/** R 4.0.1 */
export default class Questionnaire extends ContainedMixin( IdentificableResource){
      constructor(root){
        super(root);

        if(isValid(root)){
            this.url=root.url;
            this.identifier=root.identifier;
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

    _flatten(){
      return this;
    }

  }

  /**
   * ITEM ELEMENT
   */
    export class Item extends FlattenAbleObject{
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
