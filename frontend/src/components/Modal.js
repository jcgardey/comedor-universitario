import styled from 'styled-components';
import React from 'react';
import { Title } from './Layout';
import { Link } from 'react-router-dom';

const ModalMain = styled.div`
  position: fixed;
  background: white;
  width: 70%;
  max-height: 700px;
  overflow-y: scroll;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const CloseButton = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ModalTitle = styled(Title)`
  margin: 0;
`;

const Modal = ({ handleClose, show, children, className, title }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={`${className} ${showHideClassName}`}>
      <ModalMain>
        <CloseButton onClick={handleClose}>
          <i className="fas fa-times fa-lg"></i>
        </CloseButton>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        {children}
      </ModalMain>
    </div>
  );
};

export default styled(Modal)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${(props) => (!props.show ? 'none' : 'block')};
  z-index: 2;
`;
