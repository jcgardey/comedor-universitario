import React from 'react';
import styled from 'styled-components';
import { FormField, Label, TextInput, FieldErrors } from '../Form';
import { Container, FlexContainer } from '../Layout';

const InlineGrup = styled(FlexContainer)`
  & > ${FormField} {
    margin: 0 0.5em;
  }
`;

export const CreditCardForm = ({ form }) => (
  <Container>
    <FormField>
      <Label>N&uacute;mero de tarjeta</Label>
      <TextInput
        {...form.register('number', 'text', {
          required: true,
          creditCard: {
            message: 'Numero invalido',
          },
        })}
      />
      <FieldErrors errors={form.errors.number} />
    </FormField>
    <FormField>
      <Label>Titular</Label>
      <TextInput {...form.register('owner', 'text', { required: true })} />
    </FormField>
    <InlineGrup>
      <FormField>
        <Label>Fecha de vencimiento</Label>
        <TextInput
          {...form.register('expiry_date', 'text', { required: true })}
        />
      </FormField>
      <FormField>
        <Label>C&oacute;digo de seguridad</Label>
        <TextInput
          {...form.register('security_code', 'password', { required: true })}
        />
      </FormField>
    </InlineGrup>
  </Container>
);
