import React, { useState } from 'react';
import CalendarDay from './CalendayDay';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { range } from '../../utils/common';
import { Button, FlexContainer } from '../Layout';

const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 200px);
  column-gap: 1em;
  row-gap: 1.2em;
`;

const MonthName = styled.p`
  text-align: center;
  font-size: 1.4em;
  font-weight: 600;
  color: ${colors.red};
`;

const ControlButton = styled(Button)`
  color: ${colors.red};
  background-color: transparent;
  margin: 0 0.5em;
`;

const MonthControls = styled(FlexContainer)`
  align-items: center;
`;

export const Month = ({ year, month, onDaySelection }) => {
  const [current, setCurrent] = useState([month, year]);

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

  const SATURDAY = 6;
  const SUNDAY = 0;

  const [currentMonth, currentYear] = current;

  const isWeekend = (day) =>
    new Date(currentYear, currentMonth, day).getDay() == SATURDAY ||
    new Date(currentYear, currentMonth, day).getDay() == SUNDAY;

  const monthFirstDay = new Date(currentYear, currentMonth, 1);
  const startDay =
    monthFirstDay.getDate() -
    (!isWeekend(monthFirstDay.getDate()) ? monthFirstDay.getDay() - 1 : 0);

  const monthLastDay = new Date(currentYear, currentMonth + 1, 0);
  const endDay =
    monthLastDay.getDate() +
    (monthLastDay.getDay() !== SUNDAY ? 7 - monthLastDay.getDay() : 0);

  const DECEMBER = 11;
  const JANUARY = 0;

  const nextMonth = () =>
    setCurrent(
      currentMonth === DECEMBER
        ? [JANUARY, currentYear + 1]
        : [currentMonth + 1, currentYear]
    );

  const previousMonth = () =>
    setCurrent(
      currentMonth === JANUARY
        ? [DECEMBER, currentYear - 1]
        : [currentMonth - 1, currentYear]
    );

  return (
    <>
      <MonthControls>
        <ControlButton onClick={previousMonth}>
          <i className="fas fa-angle-left fa-2x"></i>
        </ControlButton>
        <MonthName>
          {months[currentMonth]} {currentYear}
        </MonthName>
        <ControlButton onClick={nextMonth}>
          <i className="fas fa-angle-right fa-2x"></i>
        </ControlButton>
      </MonthControls>
      <MonthGrid>
        {range(startDay, endDay)
          .filter((day) => !isWeekend(day))
          .map((day, i) => (
            <CalendarDay
              key={currentMonth - i}
              month={currentMonth}
              day={day}
              year={currentYear}
              onDaySelection={onDaySelection}
            />
          ))}
      </MonthGrid>
    </>
  );
};
