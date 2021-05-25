import { notBlank } from './constraints';
import FormValidator from './FormValidator';


let menuValidator = new FormValidator();
menuValidator.addConstraint('name', notBlank, 'El nombre es obligatorio');

let menuComponentValidator = new FormValidator();
//menuComponentValidator.addConstraint("name", notBlank, "El nombre es obligatorio");

let loginValidator = new FormValidator();
loginValidator.addConstraint('dni', notBlank, 'El DNI es obligatorio');

export default {
  menu: menuValidator,
  menuComponent: menuComponentValidator,
  login: loginValidator
};

