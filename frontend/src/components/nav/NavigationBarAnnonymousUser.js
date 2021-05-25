import styled from 'styled-components';
import React from 'react';
import { primaryButtonStyle} from '../Layout';
import {Link} from 'react-router-dom';
import NavigationBar, {NavLink} from './NavigationBar';

const LoginLink = styled(Link)`
    ${primaryButtonStyle};
    text-decoration: none;
`;

const NavigationBarAnnonymousUser = ({ }) => (
  <NavigationBar>
    <div>
      <NavLink>C&oacute;mo funciona?</NavLink>
      <NavLink>Sedes</NavLink>
      <NavLink>Contacto</NavLink>
    </div>
    <div>
      <LoginLink to='/login'>Ingresar</LoginLink>
    </div>
  </NavigationBar>
);

export default NavigationBarAnnonymousUser;