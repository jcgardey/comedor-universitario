import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { PrimaryIcon } from '../Layout';
import { MenuComponentInList } from './MenuComponentInList';

const MenuContainer = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid ${colors.grey2};
  border-radius: 5px;
  position: relative;
  margin: 1em;
`;

const MenuComponents = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0.5em 1em;
  font-size: 0.75em;
`;

const MenuName = styled.p`
  font-size: 1.2em;
  text-align: center;
  color: ${colors.grey};
  font-style: italic;
`;

const MenuComponent = styled(MenuComponentInList)`
  margin: 1em;
`;

const MenuActions = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
`;

const TrashIcon = styled(PrimaryIcon)`
  margin: 0.4em;
`;

const EditIcon = styled.i`
  margin: 0.4em;
`;

export const MenuItem = ({ menu }) => (
  <MenuContainer>
    <MenuName>{menu.name}</MenuName>
    <MenuActions>
      <EditIcon className="fas fa-edit fa-lg"></EditIcon>
      <TrashIcon className="far fa-trash-alt fa-lg"></TrashIcon>
    </MenuActions>
    <MenuComponents>
      {menu.components.map((component, i) => (
        <>
          <MenuComponent key={i} component={component} />
          {menu.components[i + 1] && (
            <i className="fas fa-arrow-circle-right fa-3x"></i>
          )}
        </>
      ))}
    </MenuComponents>
  </MenuContainer>
);
