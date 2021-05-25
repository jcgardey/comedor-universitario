import React from 'react';
import LoggedUser from './LoggedUser';
import NavigationBar from './NavigationBar';
import styled from 'styled-components';

const UserSection = styled.div`
    margin-right: 1em;
`;

const NavigationBarLoggedUser = ({ user, children }) => (
  <NavigationBar>
    <div>
      {children}
    </div>
    <UserSection>
      <LoggedUser/>
    </UserSection>
  </NavigationBar>
);

export default NavigationBarLoggedUser;


