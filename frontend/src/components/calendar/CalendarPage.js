import React, { useEffect, useState } from 'react';
import { Container, Title } from '../Layout';
import NavigationBarSiteAdminUser from '../nav/NavigationBarSiteAdminUser';
import { useDispatch } from 'react-redux';

import Modal from '../Modal';
import { EditMenuOnSale } from './EditMenuOnSale';
import { Month } from './Month';
import { getAllMenusOnSaleAction } from '../../actions/menusOnSale';

const CalendarPage = () => {
  const [addMenu, setAddMenu] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const closeAddMenu = () => setAddMenu(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMenusOnSaleAction());
  }, []);

  const showDayDetails = (date) => {
    setAddMenu(true);
    setSelectedDate(date);
  };

  return (
    <>
      <NavigationBarSiteAdminUser />
      <Container>
        <Title>Calendario de Men&uacute;s</Title>
        <Month
          month={new Date().getMonth()}
          year={new Date().getFullYear()}
          onDaySelection={showDayDetails}
        />
        <Modal show={addMenu} handleClose={closeAddMenu} title={'Crear Venta'}>
          <EditMenuOnSale onEdit={closeAddMenu} date={selectedDate} />
        </Modal>
      </Container>
    </>
  );
};

export default CalendarPage;
