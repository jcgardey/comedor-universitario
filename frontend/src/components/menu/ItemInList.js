import { FlexContainer, RightAlignedLink, PrimaryIcon } from '../Layout';
import styled from 'styled-components';
import colors from '../../styles/colors';
import React from 'react';

export const ItemImage = styled.img`
  border-radius: 1.8rem;
  object-fit: cover;
  width: auto;
  height: 90%;
`;

export const ItemName = styled.p`
  font-size: 1.1em;
  font-weight: bold;
  margin: 0.3em;
  color: ${colors.lightred};
`;

const ItemInListContainer = styled(FlexContainer)`
  height: 10em;
  justify-content: flex-start;
  padding: 0.7em;
  & ${RightAlignedLink} {
    display: none;
  }
  &:hover {
    & ${RightAlignedLink} {
      display: block;
    }
  }
`;

export const ItemDescription = styled.div`
  padding: 0.5em;
  font-size: 1.1em;
  font-weight: bold;
  color: ${colors.green};
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 12em;
`;

export const ItemInList = ({
  imageSrc = '/media/placeholder.jpg',
  className,
  onClick,
  onDelete,
  children,
}) => {
  return (
    <ItemInListContainer className={className} onClick={onClick}>
      <ImageContainer>
        <ItemImage src={imageSrc} />
      </ImageContainer>
      <ItemDescription>{children}</ItemDescription>
      {onDelete && (
        <RightAlignedLink onClick={onDelete}>
          <PrimaryIcon className="far fa-trash-alt fa-lg"></PrimaryIcon>
        </RightAlignedLink>
      )}
    </ItemInListContainer>
  );
};
