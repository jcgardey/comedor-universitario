import React from 'react';

import { Menu } from '../menu/Menu';
import styled from 'styled-components';
import { PrimaryButton } from '../Layout';
import colors from '../../styles/colors';

const PurchaseInfo = styled.div`
  display: flex;
  margin: 0.3em;
  justify-content: flex-end;
`;

const AddToCart = styled.button`
  color: ${colors.white};
  background-color: ${colors.black};
  padding: 1em;
  border-radius: 20px;
  border: none;
`;

const Price = styled.p`
  font-size: 1.5em;
  color: ${colors.darkCyan};
  margin: 0.3em;
  font-weight: bold;
  text-align: center;
`;

export const PurchaseItem = ({ menuOnSale }) => {
  return (
    <Menu menu={menuOnSale.menu}>
      <Price>&#36;{menuOnSale.price}</Price>
      <PurchaseInfo>
        <AddToCart>
          <i className="fas fa-cart-arrow-down fa-lg"></i>
        </AddToCart>
      </PurchaseInfo>
    </Menu>
  );
};
