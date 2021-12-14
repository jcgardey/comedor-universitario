import React, { useState } from 'react';
import styled from 'styled-components';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import { Menu } from '../menu/Menu';
import { FlexContainer } from '../Layout';

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
  left: -4em;
  background-color: ${colors.white};
  padding: 0.5em;
  border-radius: 10px;
  border: 1px solid ${colors.lightgrey};
  text-align: center;
`;

const AmountName = styled.p`
  font-weight: bold;
  margin: 0.1em;
`;

const Stock = styled.span`
  color: ${colors.red};
`;

const Price = styled.p`
  font-size: 1.5em;
  color: ${colors.darkCyan};
  margin: 0.4em;
  font-weight: bold;
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
          <Menu menu={menuOnSale.menu}>
            <Price>&#36; {menuOnSale.price}</Price>
            <AmountName>
              Vendidos: <Stock>{menuOnSale.stock}</Stock>
            </AmountName>
          </Menu>
        </MenuOnSaleDetails>
      )}
    </MenuOnSaleContainer>
  );
};
