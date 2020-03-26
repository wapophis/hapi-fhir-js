const QuestionnaireItemRulesMixin =  SuperClass=> class extends SuperClass{
  constructor(root){
    super(root);
  }

  checkRuleGroupItemsMustHaveNestedItems(){
      throw new TypeError("Not implemented Yet");
  }
  checkRuleGroupItemsCantHaveInitials(){
    throw new TypeError("Not implemented Yet");
  }

  checkRuleDisplayItemsNotHaveNestedItems(){
    throw new TypeError("Not implemented Yet");
  }

  checkRuleDisplayItemsCantHaveInitials(){
    throw new TypeError("Not implemented Yet");
  }

  checkRuleDisplayItemsCantBeReadOnly(){
    throw new TypeError("Not implemented Yet");
  }

  checkRuleDisplayItemsNotHaveCodeAsserted(){
    throw new TypeError("Not implemented Yet");
  }

  checkRuleDisplayItemsCantHaveRequiredAndRepeat(){
    throw new TypeError("Not implemented Yet");
  }

  checkRuleQuestionCannotHaveBothAnswerOptionAndAnswerValueSet(){
    throw new TypeError("Not implemented Yet");
  }
  checkRuleMaximumLengthForSimpleQuestions(){
    throw new TypeError("Not implemented Yet");
  }

  checkRuleMissingInitialWhenAnswerIsPresent(){
    throw new TypeError("Not implemented Yet");
  }

  checkRuleEnableBehaviourWhenEnableWhen(){
    throw new TypeError("Not implemented Yet");
  }

  checkRuleMultipleInitialsOnlyForRepeatingItems(){
    throw new TypeError("Not implemented Yet");
  }

}

export default QuestionnaireItemRulesMixin;