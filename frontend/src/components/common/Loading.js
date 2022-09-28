import React from 'react';
import styled from 'styled-components';
import { InfoMessage } from '../Layout';

const LoadingContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Spinner = styled.img`
  width: 100px;
  height: auto;
`;

export const Loading = ({ message }) => (
  <LoadingContainer>
    <Spinner src="/media/spinner.gif" />
    {message && <InfoMessage>{message}</InfoMessage>}
  </LoadingContainer>
);
