import styled from 'styled-components';
import colors from '../../styles/colors';

export const SelectableListOption = styled.div`
  &:hover {
    cursor: pointer;
    background-color: ${colors.lightgrey};
  }
  border-bottom: 1px solid ${colors.lightgrey};
`;

export const SelectableList = styled.div`
  position: absolute;
  background-color: ${colors.white};
  width: 60%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  max-height: 20em;
  overflow: auto;
  width: 100%;
`;
