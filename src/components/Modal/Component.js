import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalWindow,
  Title,
  CloseBtn,
  // Button,
  BackArrow,
} from './Component.styled';
import { Button } from 'components/Button/Button';
// import { useNavigate } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';
import { Translator } from 'components/language/translator';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  // const navigate = useNavigate();
  // const goToRegistrationPage = () =>
  //   navigate('/registration', { replace: true });

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
        <Title>
          {Translator('yourRecommendedDaily')} {'\n'}
          {Translator('calorieIntakeIs')}
        </Title>
        {children}
        <Button type="button" onClick={onClose}>
          {Translator('startLosingweight')}
        </Button>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
