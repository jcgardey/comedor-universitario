import React from 'react';
import styled from 'styled-components';
import { Container, FlexContainer, Title } from '../Layout';
import { Payment } from './Payment';
import { ShoppingCartInfo } from './ShoppingCartInfo';

const Checkout = styled(FlexContainer)`
  justify-content: space-around;
`;

export const CheckoutPage = () => {
  return (
    <Container>
      <Title>Finalizar Compra</Title>
      <Checkout>
        <ShoppingCartInfo />
        <Payment />
      </Checkout>
    </Container>
  );
};
