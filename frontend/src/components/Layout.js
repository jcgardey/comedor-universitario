import styled, { css } from 'styled-components';
import colors from '../styles/colors';

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

export const FieldError = styled.span`
  display: block;
  color: red;
  font-size: 14px;
  font-weight: bold;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin: 0.8em 0;
  width: 100%;
`;

export const FormField = styled.div`
  margin: 2em 0.5em;
`;

export const FormGroup = styled.div`
  width: 50%;
  padding: 1em;
  background-color: ${colors.white};
  border-radius: 8px;
  margin: 1em auto;
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
export const Link = styled.a`
  &:hover {
    cursor: pointer;
  }
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
  color: ${colors.lightred};
`;

export const RadioItemLabel = styled.label`
  margin: 5px;
`;

export const RightAlignedLink = styled(Link)`
  margin-left: auto;
`;

export const PrimaryIcon = styled.i`
  color: ${colors.red};
`;
