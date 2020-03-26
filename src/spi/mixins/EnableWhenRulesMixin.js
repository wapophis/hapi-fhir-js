const EnableWhenRulesMixin =  SuperClass=> class extends SuperClass{
  constructor(root){
    super(root);
  }

  checkRuleIfExistsMustBeBoolean(){
    throw new TypeError("Not implemented yet");
  }
}

export default EnableWhenRulesMixin;