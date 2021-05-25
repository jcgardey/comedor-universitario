import React, { useState } from 'react';
import NavigationBarAnnonymousUser from './nav/NavigationBarAnnonymousUser';
import {
  Container,
  FormField,
  FormGroup,
  Label,
  TextInput,
  Title,
  PrimaryButton,
  FieldError,
} from './Layout';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { updateFormField } from '../actions/form';
import { Redirect } from 'react-router';

export const Login = () => {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    this.props.login(dni, password);
  };

  const onBlur = (e) => {
    this.props.updateFormField(e.target.name, e.target.value, 'login');
  };

  if (this.props.auth.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <NavigationBarAnnonymousUser />
      <Container>
        <Title>Ingresar</Title>
        <form onSubmit={onSubmit}>
          <FormGroup>
            {error == 'token_not_valid' && (
              <FieldError>
                Su sesi&oacute;n ha expirado, ingrese nuevamente
              </FieldError>
            )}
            <FormField>
              <Label>DNI</Label>
              <TextInput type="text" name="dni" onBlur={onBlur}></TextInput>
            </FormField>
            <FormField>
              <Label>Clave</Label>
              <TextInput
                type="password"
                name="password"
                onBlur={onBlur}
              ></TextInput>
            </FormField>
            <FormField>
              <PrimaryButton type="submit">Ingresar</PrimaryButton>
            </FormField>
          </FormGroup>
        </form>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  form: state.form.login,
});

//export default connect(mapStateToProps, { login, updateFormField })(Login);
export default Login;
