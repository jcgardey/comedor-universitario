import React, { useEffect, useState } from 'react';
import { Container, Title } from '../Layout';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal';
import { EditMenuOnSale } from './EditMenuOnSale';
import { Month } from './Month';
import { getAllMenusOnSaleAction } from '../../actions/menusOnSale';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Site = styled.h4`
  text-align: center;
  font-size: 1.4em;
  color: ${colors.grey};
  margin-bottom: 0.8em;
`;

const CalendarPage = () => {
  const [daySelected, setDaySelected] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const closeDayDetails = () => setDaySelected(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(
      getAllMenusOnSaleAction(user.profile.site ? user.profile.site.id : null)
    );
  }, []);

  const showDayDetails = (date) => {
    setDaySelected(true);
    setSelectedDate(date);
  };

  return (
    <Container>
      <Title>Calendario de Men&uacute;s</Title>
      {user.profile.site && <Site>Sede {user.profile.site.name}</Site>}
      <Month
        month={new Date().getMonth()}
        year={new Date().getFullYear()}
        onDaySelection={showDayDetails}
      />
      {daySelected && (
        <>
          <Modal
            show={true}
            handleClose={closeDayDetails}
            title={'Crear Venta'}
          >
            <EditMenuOnSale
              onEdit={closeDayDetails}
              selectedDate={selectedDate}
            />
          </Modal>
        </>
      )}
    </Container>
  );
};

export default CalendarPage;
