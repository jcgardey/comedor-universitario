import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { PrimaryIcon } from '../Layout';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';

import { logout } from '../../actions/auth';

const Dropdown = styled.div`
  position: relative;
`;

const DropdownTitle = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const DropdownList = styled.div`
  position: absolute;
  background-color: ${colors.white2};
  width: 140px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
  right: 0;
`;

const DropdownLink = styled(Link)`
  text-decoration: none;
  padding: 1em;
  color: ${colors.grey};
  font-weight: bold;
  display: block;
  &:hover {
    color: ${colors.red};
    background-color: ${colors.grey2};
  }
`;

const Username = styled.span`
  font-weight: bold;
`;

const LoggedUser = ({ user, logout }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <Dropdown>
      <DropdownTitle onClick={() => setShowOptions(!showOptions)}>
        <Username>{user.name}</Username>
        <PrimaryIcon
          style={{ marginLeft: '.3em' }}
          className="fas fa-angle-down fa-lg"
        ></PrimaryIcon>
      </DropdownTitle>
      {showOptions && (
        <DropdownList>
          <DropdownLink>
            <i className="fas fa-user fa-lg"></i> Mi Perfil
          </DropdownLink>
          <DropdownLink onClick={logout} to="/">
            <i className="fas fa-sign-out-alt fa-lg"></i> Salir
          </DropdownLink>
        </DropdownList>
      )}
    </Dropdown>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps, { logout })(LoggedUser);
