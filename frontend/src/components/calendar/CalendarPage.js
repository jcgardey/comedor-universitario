import React, {useState} from 'react';
import styled from 'styled-components';
import { Container, SectionTitle, Title } from '../Layout';
import NavigationBarSiteAdminUser from '../nav/NavigationBarSiteAdminUser';
import CalendarDay from './CalendayDay';
import Modal from '../Modal';
import { EditMenuOnSale } from './EditMenuOnSale';


const MonthGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 200px);
    column-gap: 1em;
    row-gap: 1.2em;
`;



const CalendarPage = ({ }) => {

  const [addMenu, setAddMenu] = useState(false);
  const [selectedDate, setSelectedDate] = useState(false);
    
  const closeAddMenu = () => setAddMenu(false);

  const showAddMenu = (date) => {
    setAddMenu(true);
    setSelectedDate(date);
  };



  const daysInMonth = (month, year) => (32 - new Date(year, month, 32).getDate());
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];
  const renderMonth = (month, year) => {
    const monthFirstDay = new Date(year, month, 1);
    const closestMonday = monthFirstDay.getDate() - (monthFirstDay.getDay() -1);

    let days = [];
    for (let i=closestMonday; i <= daysInMonth(month, year); i++) {
      days.push(<CalendarDay key={month-i} month={month} day={i} year={year} onAddClick={showAddMenu}/>);
    }
    return (
      <>
        <SectionTitle>{months[month]}</SectionTitle>
        <MonthGrid>
          {days}
        </MonthGrid>
      </>
    );
  };


  return (
    <>
      <NavigationBarSiteAdminUser />
      <Container>
        <Title>Calendario de Men&uacute;s</Title>
        {renderMonth(new Date().getMonth(),new Date().getFullYear())}
        <Modal show={addMenu} handleClose={closeAddMenu} title={'Crear Venta'}>
          <EditMenuOnSale onSubmit={closeAddMenu} date={selectedDate}/>
        </Modal>
      </Container>
    </>
  );
};

export default CalendarPage;

