import { FlexContainer, RightAlignedLink, PrimaryIcon } from '../Layout';
import styled from 'styled-components';
import colors from '../../styles/colors';
import React from 'react';

export const MenuImage = styled.img`
  border-radius: 1.8rem;
  object-fit: cover;
  width: 100%;
  max-height: 100%;
`;

export const MenuName = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: ${colors.red};
  text-align: center;
  margin: 0.3em;
`;

const MenuContainer = styled.div`
  margin: 0.3em;
  height: 22em;
  width: 15em;
  padding: 1.2em;
  background-color: ${colors.white};
  border-radius: 10px;
  & ${RightAlignedLink} {
    display: none;
  }
  &:hover {
    & ${RightAlignedLink} {
      display: block;
    }
  }
`;

const MenuDescription = styled.div`
  padding: 0.3em;
`;

const MenuType = styled.p`
  font-size: 1em;
  color: ${colors.grey};
  text-align: center;
  margin: 0.2em;
`;

const ImageContainer = styled.div`
  height: 60%;
  width: 100%;
`;

const SaleInfo = styled.div``;

export const Menu = ({
  menu,
  className,
  onClick,
  onDelete = false,
  children,
}) => {
  const image = menu.image ? menu.image : '/media/placeholder.jpg';
  const imageSrc =
    typeof image === 'object' ? URL.createObjectURL(image) : image;
  return (
    <MenuContainer className={className} onClick={onClick}>
      <ImageContainer>
        <MenuImage src={imageSrc} />
      </ImageContainer>
      <MenuDescription>
        <MenuName>{menu.name}</MenuName>
        <MenuType>{menu.menu_type}</MenuType>
      </MenuDescription>
      <SaleInfo>{children}</SaleInfo>
      {onDelete && (
        <RightAlignedLink onClick={onDelete}>
          <PrimaryIcon className="far fa-trash-alt fa-lg"></PrimaryIcon>
        </RightAlignedLink>
      )}
    </MenuContainer>
  );
};
