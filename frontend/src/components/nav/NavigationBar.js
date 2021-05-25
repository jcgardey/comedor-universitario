import styled from 'styled-components';
import colors from '../../styles/colors';
import React from 'react';
import {Link} from 'react-router-dom';


const Logo = styled.img`
    height: 60px;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    padding: .3em;
    margin: .5em;
    font-size: 18px;
    color: ${colors.grey};
    &:hover {
        cursor: pointer;
        color: ${colors.red}
    }
`;

const NavigationBarBody = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
    width: 90%;
    height: 100%;
    margin: 0 auto;
`;

let NavigationBar = ({ className, children }) => (
  <div className={className}>
    <NavigationBarBody>
      <NavLink to='/'><Logo src={'/media/logo.png'} /></NavLink>
      {children}
    </NavigationBarBody>
  </div>
);

export default styled(NavigationBar)`
    height: 80px;
    background-color: ${colors.white};
    box-sizing: border-box;
    box-shadow: 0 5px 5px ${colors.grey2};
`;




