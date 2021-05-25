import styled from 'styled-components';
import colors from '../../styles/colors';
import React, {useEffect, useState} from 'react';
import { getMenusOnSaleForDate } from '../../services/menuOnSale';
import fonts from '../../styles/fonts';
import { PrimaryIcon } from '../Layout';

const CalendarDayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 3px 3px ${colors.lightred};
    width: 100%;
    height: 100%;
    background-color: ${colors.white};
    &:hover {
        & ${AddIcon} {
            display: '';
        }
    }
`;

const DayOfWeek = styled.span`
    font-size: 22px;
`;

const Menu = styled.p`
    font-family: ${fonts.secondary};
    font-size: 14px;
    font-weight: 600;
    padding: .3em;
    background-color: #9000a3;
    color: white;
`;

const DayNumber = styled.span`
    font-weight: 900;
    font-size: 24px;
`;

const AddIcon = styled(PrimaryIcon)`
    margin-bottom: .2em;
    margin-top: auto;
    &:hover {
        color: ${colors.lightgrey};
        cursor: pointer;
    }
`;


const CalendarDay = ({day, month, year, onAddClick}) => {

  const days = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes', 'Sabado'];

  const date = new Date(year, month, day);

  const [menus, setMenus] = useState([]);
    

  useEffect(() => {
    getMenusOnSaleForDate(date).then(response => {
      setMenus(response.data);
    });
  } , []);

  return (
    <CalendarDayContainer style={{ backgroundColor: date.getMonth() != month ? colors.lightgrey: ''}}>
      <DayOfWeek>{days[date.getDay()]}</DayOfWeek>
      <DayNumber>{date.getDate()}</DayNumber>
      {menus.map(menuOnSale => (<Menu key={menuOnSale.id}>{menuOnSale.menu.name} ({menuOnSale.stock})</Menu>) )}
      <AddIcon onClick={onAddClick} className={'fas fa-plus-circle fa-2x'}></AddIcon>
    </CalendarDayContainer>
  );
};

export default CalendarDay;