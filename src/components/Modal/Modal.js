import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { Overlay, ModalWindow, CloseBtn, BackArrow } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <ModalWindow onClose={onClose}>
        <CloseBtn type="button" onClick={onClose}></CloseBtn>
        <BackArrow color="black" size="20px" onClick={onClose} left="20px" />

        {children}
        <NavLink to="/registration"></NavLink>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
