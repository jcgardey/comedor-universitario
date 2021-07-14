import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { useHistory } from 'react-router';
import { login } from '../actions/auth';

export const Login = () => {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(dni, password));
  };

  if (auth.isAuthenticated) {
    history.push('/');
  }

  return (
    <>
      <NavigationBarAnnonymousUser />
      <Container>
        <Title>Ingresar</Title>
        <form onSubmit={onSubmit}>
          <FormGroup>
            {auth.error == 'token_not_valid' && (
              <FieldError>
                Su sesi&oacute;n ha expirado, ingrese nuevamente
              </FieldError>
            )}
            <FormField>
              <Label>DNI</Label>
              <TextInput
                type="text"
                name="dni"
                onChange={(e) => setDni(e.target.value)}
              ></TextInput>
            </FormField>
            <FormField>
              <Label>Clave</Label>
              <TextInput
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
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

export default Login;
