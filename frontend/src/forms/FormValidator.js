
class FormValidator {

  constructor() {
    this.constraints = {};
  }

  addConstraint(fieldName, validationClosure, validationMessage) {
    if (!this.constraints[fieldName]) {
      this.constraints[fieldName] = [];
    }
    this.constraints[fieldName].push({ validationClosure, validationMessage});
  }

  getConstraints(fieldName) {
    return this.constraints[fieldName]? this.constraints[fieldName] : [];
  }

  validateField(fieldName, fieldValue) {
    return this.getConstraints(fieldName).filter(constraint => !constraint.validationClosure(fieldValue)).map(constraint => constraint.validationMessage);  
  }
}

export default FormValidator;