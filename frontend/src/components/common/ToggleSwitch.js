import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 0 0.4em;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Slider} {
    background-color: ${colors.limerick};
  }
  &:checked + ${Slider}::before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }
`;

export const ToggleSwitch = ({ onSwitch, enabled = false }) => {
  const onChange = (e) => onSwitch(e.target.checked);

  return (
    <Switch>
      <Input type="checkbox" onChange={onChange} checked={enabled} />
      <Slider></Slider>
    </Switch>
  );
};
