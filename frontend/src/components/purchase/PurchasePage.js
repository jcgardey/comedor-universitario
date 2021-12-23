import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch';
import { getAllSites } from '../../services/site';
import { FormField, Select, TextInput } from '../Form';
import { Container, FlexContainer, Title } from '../Layout';
import { MenuGrid } from '../menu/MenuListPage';
import DatePicker from '../react-datepicker/Datepicker';
import { PurchaseItem } from './PurchaseItem';
import { getMenusOnSaleForSiteAndDate } from '../../services/menuOnSale';

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
  const [site, setSite] = useState('');

  const [allSites, errors] = useFetch(getAllSites, (sites) =>
    setSite(sites[0])
  );
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    if (site.id !== undefined) {
      getMenusOnSaleForSiteAndDate(site.id, date).then((response) =>
        setMenus(response.data)
      );
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
          <Select onChange={(e) => setSite(e.target.value)} value={site.id}>
            {allSites.map((s, i) => (
              <option value={s.id} key={i}>
                {s.name}
              </option>
            ))}
          </Select>
        </InlineField>
      </FlexContainer>
      <MenuGrid>
        {menus.map((menuOnSale, i) => (
          <PurchaseItem key={i} menuOnSale={menuOnSale} />
        ))}
      </MenuGrid>
    </Container>
  );
};
