
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