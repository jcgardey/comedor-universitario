import styled from 'styled-components';
import colors from '../../styles/colors';
import React from 'react';
import fonts from '../../styles/fonts';
import { useSelector } from 'react-redux';
import { areSameDay, dateToISOString } from '../../utils/common';
import { MenuOnSale } from './MenuOnSale';

const CalendarDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 5px 5px ${colors.lightgrey};
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  &:hover {
    cursor: pointer;
    background-color: ${colors.lightgrey};
  }
`;

const DayOfWeek = styled.span`
  font-size: 1.4em;
`;

const DayNumber = styled.span`
  font-weight: 900;
  font-size: 2.2em;
  color: ${colors.black};
`;

const CurrentDayNumber = styled(DayNumber)`
  color: ${colors.white};
  background-color: ${colors.red};
  border-radius: 20px;
  padding: 0 0.3em;
`;

const CalendarDay = ({ day, month, year, onDaySelection }) => {
  const days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ];

  const date = new Date(year, month, day);

  const menusOnSale = useSelector((state) =>
    state.menusOnSale.filter(
      (menuOnSale) => menuOnSale['sale_date'] === dateToISOString(date)
    )
  );

  return (
    <CalendarDayContainer
      style={{
        backgroundColor: date.getMonth() != month ? colors.grey : '',
      }}
      onClick={() => onDaySelection(date)}
    >
      <DayOfWeek>{days[date.getDay()]}</DayOfWeek>
      {areSameDay(date, new Date()) ? (
        <CurrentDayNumber>{date.getDate()}</CurrentDayNumber>
      ) : (
        <DayNumber>{date.getDate()}</DayNumber>
      )}
      {menusOnSale.map((menuOnSale, i) => (
        <MenuOnSale key={i} menuOnSale={menuOnSale} />
      ))}
    </CalendarDayContainer>
  );
};

export default CalendarDay;
