import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../styles/colors';

const inputStyle = css`
  border: 1px solid ${colors.lightgrey};
  display: block;
  height: 4em;
  padding: 0.5em;
  border-radius: 3px;
  width: 100%;
  color: ${colors.grey};
  font-size: 16px;
  box-sizing: border-box;
`;

export const TextInput = styled.input`
  ${inputStyle}
`;

export const Select = styled.select`
  ${inputStyle}
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin: 0.8em 0;
  width: 100%;
`;

export const FormField = styled.div`
  margin: 2em 0.5em;
  position: relative;
`;

export const FormGroup = styled.div`
  width: 50%;
  padding: 1em;
  background-color: ${colors.white};
  border-radius: 8px;
  margin: 1em auto;
`;

export const FieldError = styled.span`
  display: block;
  color: red;
  font-size: 1em;
  font-weight: bold;
`;

export const RadioItemLabel = styled.label`
  margin: 5px;
`;

export const FieldErrors = ({ errors }) =>
  errors.map((error, i) => <FieldError key={i}>{error}</FieldError>);
