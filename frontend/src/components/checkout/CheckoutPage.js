import React from 'react';
import styled from 'styled-components';
import { Container, FlexContainer, Title } from '../Layout';
import { ShoppingCartInfo } from './ShoppingCartInfo';

const Payment = styled.div`
  width: 35%;
`;

export const CheckoutPage = () => {
  return (
    <Container>
      <Title>Finalizar Compra</Title>
      <FlexContainer>
        <ShoppingCartInfo />
        <Payment></Payment>
      </FlexContainer>
    </Container>
  );
};
