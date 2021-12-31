import React from 'react';
import LoggedUser from './LoggedUser';
import NavigationBar from './NavigationBar';
import styled from 'styled-components';

export const UserSection = styled.div`
  margin-right: 1em;
  display: flex;
  align-items: center;
`;

const NavigationBarLoggedUser = ({ children }) => (
  <NavigationBar>
    <div>{children}</div>
    <UserSection>
      <LoggedUser />
    </UserSection>
  </NavigationBar>
);

export default NavigationBarLoggedUser;
