import React from 'react';
import CalendarDay from './CalendayDay';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { range } from '../../utils/common';

const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 200px);
  column-gap: 1em;
  row-gap: 1.2em;
`;

const MonthName = styled.p`
  font-size: 1.4em;
  font-weight: 600;
  color: ${colors.red};
`;

export const Month = ({ year, month, onDaySelection }) => {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const monthFirstDay = new Date(year, month, 1);
  const previousMonday = monthFirstDay.getDate() - (monthFirstDay.getDay() - 1);

  const monthLastDay = new Date(year, month + 1, 0);
  const nextFriday = monthLastDay.getDate() + (5 - monthLastDay.getDay());

  const isWeekend = (day) =>
    new Date(year, month, day).getDay() == 6 ||
    new Date(year, month, day).getDay() == 0;

  return (
    <>
      <MonthName>
        {months[month]} {year}
      </MonthName>
      <MonthGrid>
        {range(previousMonday, nextFriday)
          .filter((day) => !isWeekend(day))
          .map((day, i) => (
            <CalendarDay
              key={month - i}
              month={month}
              day={day}
              year={year}
              onDaySelection={onDaySelection}
            />
          ))}
      </MonthGrid>
    </>
  );
};
