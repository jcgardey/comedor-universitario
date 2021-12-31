import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { ISOtoLocalDate } from '../../utils/common';

const Flex = styled.div`
  display: flex;
  margin: 1em 0;
`;

const ImageContainer = styled.div`
  width: 6em;
  height: 6em;
  margin: 0 0.4em;
`;

const Img = styled.img`
  height: auto;
  width: 100%;
  border-radius: 5px;
`;

const MenuName = styled.p`
  font-weight: bold;
  color: ${colors.red};
  margin: 0.2em 0;
`;

const Price = styled.p`
  font-size: 1.1em;
  color: ${colors.darkCyan};
  font-weight: bold;
`;

const SaleDate = styled.p`
  font-size: 1.1em;
  color: ${colors.grey};
  margin: 0.1em 0;
`;

const SiteName = styled.span`
  color: ${colors.black};
`;

const TakeAway = styled.span`
  display: inline-block;
  font-size: 0.9em;
  color: ${colors.limerick};
  margin-left: 0.5em;
`;

export const ShoppingCartItem = ({ item }) => (
  <Flex>
    <ImageContainer>
      <Img src={item.menu.image} />
    </ImageContainer>
    <div>
      <MenuName>
        {item.menu.name} <SiteName>({item.site.name})</SiteName>
      </MenuName>
      <SaleDate>
        {ISOtoLocalDate(item.sale_date)}
        {item.takeAway && <TakeAway>Vianda</TakeAway>}
      </SaleDate>
      <Price>&#36;{item.price}</Price>
    </div>
  </Flex>
);
