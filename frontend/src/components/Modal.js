import styled from 'styled-components';
import React from 'react';
import {RightAlignedLink} from './Layout';

const ModalMain = styled.div`
    position:fixed;
    background: white;
    width: 70%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    padding: 1em;
`;
const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
`;

const Modal = ({ handleClose, show, children, className, title }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={`${className} ${showHideClassName}`}>
      <ModalMain>
        <ModalHeader>
          <h3>{title}</h3>
          <RightAlignedLink onClick={handleClose}><i className="fas fa-times"></i></RightAlignedLink>
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
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: ${props => !props.show ? 'none' : 'block'};
    z-index: 2;
  `;
