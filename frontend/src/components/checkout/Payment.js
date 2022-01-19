import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { RadioItemLabel } from '../Form';
import { PrimaryLink, SectionTitle } from '../Layout';
import { CreditCardForm } from './CreditCardForm';
import { useForm } from '../../hooks/useForm';

const PaymentContainer = styled.div`
  width: 35%;
  padding: 1em;
  background-color: ${colors.white};
  border-radius: 5px;
  margin: 1em;
`;

const PaymentMethod = styled.div`
  margin: 2em 0.5em;
`;

const PaymentMethodName = styled.div`
  display: flex;
  align-items: center;
`;

const PaymentMethodLogo = styled.img`
  width: auto;
  height: 1.2em;
  margin: 0 0.2em;
`;

const PaymentMethodDetails = styled.div`
  display: none;
  &[data-active='true'] {
    display: block;
  }
`;

const PurchaseButton = styled(PrimaryLink)`
  width: 100%;
  font-weight: bold;
  box-sizing: border-box;
`;

export const Payment = () => {
  const [method, setMethod] = useState('');

  const onMethodChange = (e) => setMethod(e.target.value);

  const creditCard = useForm();

  return (
    <PaymentContainer>
      <SectionTitle>M&eacute;todo de Pago</SectionTitle>
      <PaymentMethod>
        <PaymentMethodName>
          <input
            type="radio"
            name="method"
            value={'credit_card'}
            onChange={onMethodChange}
          />
          <RadioItemLabel>Tarjeta de cr&eacute;dito</RadioItemLabel>
          <PaymentMethodLogo src="/media/payment/mastercard.png" />
          <PaymentMethodLogo src="/media/payment/visa.png" />
        </PaymentMethodName>
        <PaymentMethodDetails data-active={method === 'credit_card'}>
          <CreditCardForm form={creditCard} />
        </PaymentMethodDetails>
      </PaymentMethod>
      <PaymentMethod>
        <PaymentMethodName>
          <input
            type="radio"
            name="method"
            value={'mercado_pago'}
            onChange={onMethodChange}
          />
          <RadioItemLabel>Mercado pago</RadioItemLabel>
          <PaymentMethodLogo src="/media/payment/mercado_pago.png" />
        </PaymentMethodName>
      </PaymentMethod>
      <PurchaseButton>Finalizar Compra</PurchaseButton>
    </PaymentContainer>
  );
};
