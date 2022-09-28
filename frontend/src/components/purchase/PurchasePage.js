import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch';
import { getAllSites } from '../../services/site';
import { FormField, Select, TextInput } from '../Form';
import {
  Container,
  FlexContainer,
  Title,
  ErrorMessage,
  InfoMessage,
} from '../Layout';
import { MenuGrid } from '../menu/MenuListPage';
import DatePicker from '../react-datepicker/Datepicker';
import { PurchaseItem } from './PurchaseItem';
import { getMenusOnSaleForSiteAndDate } from '../../services/menuOnSale';
import { Loading } from '../common/Loading';

const InlineField = styled(FormField)`
  width: 30%;
`;

export const PurchasePage = () => {
  const [date, setDate] = useState(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 2
    )
  );
  const [site, setSite] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const [allSites, errors] = useFetch(getAllSites, (sites) =>
    setSite(sites[0].id)
  );
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    if (site !== undefined) {
      setLoading(true);
      getMenusOnSaleForSiteAndDate(site, date).then((response) => {
        setMenus(response.data);
        setLoading(false);
      });
    }
  }, [site, date]);

  return (
    <Container>
      <Title>Comprar Men&uacute;s</Title>
      <FlexContainer>
        <InlineField>
          <label>Fecha</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat={'dd/MM/yyyy'}
            customInput={<TextInput />}
          />
        </InlineField>
        <InlineField>
          <label>Sede</label>
          <Select onChange={(e) => setSite(e.target.value)} value={site}>
            {allSites.map((s, i) => (
              <option value={s.id} key={i}>
                {s.name}
              </option>
            ))}
          </Select>
        </InlineField>
      </FlexContainer>
      {menus.length > 0 && (
        <MenuGrid>
          {menus.map((menuOnSale, i) => (
            <PurchaseItem key={i} menuOnSale={menuOnSale} />
          ))}
        </MenuGrid>
      )}
      {loading && <Loading message={'Buscando menús disponibles'} />}
      {!loading && menus.length == 0 && (
        <ErrorMessage>
          No se encontraron men&uacute;s para la fecha y sede indicadas
        </ErrorMessage>
      )}
    </Container>
  );
};
