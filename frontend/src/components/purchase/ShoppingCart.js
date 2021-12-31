import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { ShoppingCartDetails } from './ShoppingCartDetails';

const Badge = styled.span`
  position: absolute;
  padding: 0.1em 0.5em;
  background-color: ${colors.red};
  color: ${colors.white};
  bottom: -0.5em;
  right: -0.7em;
  font-weight: bold;
  border-radius: 10px;
`;

const Container = styled.div`
  position: relative;
  margin: 0.2em 2em;
`;

export const ShoppingCart = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const [details, setDetails] = useState(false);

  return (
    <Container>
      <a onClick={() => setDetails(!details)}>
        <i className="fas fa-shopping-cart fa-2x"></i>
      </a>
      <Badge>{shoppingCart.length}</Badge>
      {details && <ShoppingCartDetails />}
    </Container>
  );
};
