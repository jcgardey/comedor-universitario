import styled, { css } from 'styled-components';
import colors from '../styles/colors';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  text-align: center;
  font-weight: 900;
  color: ${colors.black};
`;
export const SectionTitle = styled.h3`
  color: ${colors.black};
  text-align: center;
  font-weight: bold;
`;

export const InlineFormGroup = styled.div`
  display: inline-block;
  margin: 0 1em;
  width: 30%;
`;

export const Container = styled.div`
  margin: 2em auto;
  width: 90%;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Row = styled.div`
  width: 100%;
  margin: 0.7em 0;
`;

const buttonStyle = css`
  font-size: 16px;
  border-radius: 6px;
  padding: 0.8em;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  ${buttonStyle}
`;

export const primaryButtonStyle = css`
  ${buttonStyle};
  background-color: ${colors.red};
  color: ${colors.white2};
`;

export const PrimaryButton = styled(Button)`
  ${primaryButtonStyle}
`;

export const SecondaryButton = styled(Button)`
  background-color: ${colors.black};
  color: ${colors.white2};
`;

export const PrimaryLink = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: center;
  ${primaryButtonStyle};
`;

export const SecondaryLink = styled(Link)`
  ${buttonStyle};
  background-color: ${colors.black};
  color: ${colors.white2};
  margin: 0.5em 0;
  text-decoration: none;
`;

export const RightAlignedLink = styled(Link)`
  margin-left: auto;
`;

export const PrimaryIcon = styled.i`
  color: ${colors.red};
`;

export const Message = styled.p`
  font-size: 18px;
  text-align: center;
`;

export const ErrorMessage = styled(Message)`
  color: ${colors.red};
`;

export const InfoMessage = styled(Message)`
  color: ${colors.grey};
`;
