import React, { useState } from 'react';
import styled from 'styled-components';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import { MenuName } from '../menu/Menu';

const MenuOnSaleName = styled.p`
  font-family: ${fonts.secondary};
  font-size: 1.1em;
  font-weight: 600;
  padding: 0.3em;
  margin: 0.2em 0;
  background-color: #9000a3;
  color: white;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 11em;
`;

const MenuOnSaleDetails = styled.div`
  position: absolute;
  z-index: 9999;
  width: 20em;
  left: -4em;
  background-color: ${colors.white};
  padding: 0%.5em;
  border-radius: 5px;
  border: 1px solid ${colors.lightgrey};
`;

const AmountName = styled.p`
  font-weight: bold;
`;

const Stock = styled.span`
  color: ${colors.red};
`;

const MenuOnSaleContainer = styled.div`
  position: relative;
`;

export const MenuOnSale = ({ menuOnSale }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <MenuOnSaleContainer>
      <MenuOnSaleName
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        {menuOnSale.menu.name} ({menuOnSale.stock})
      </MenuOnSaleName>
      {showDetails && (
        <MenuOnSaleDetails>
          <MenuName>{menuOnSale.menu.name}</MenuName>
          <AmountName>
            Disponibles: <Stock>{menuOnSale.stock}</Stock>
          </AmountName>
          <AmountName>
            Vendidos: <Stock>{menuOnSale.stock}</Stock>
          </AmountName>
        </MenuOnSaleDetails>
      )}
    </MenuOnSaleContainer>
  );
};
