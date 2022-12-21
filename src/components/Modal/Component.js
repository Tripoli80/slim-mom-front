import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalWindow,
  Title,
  CloseBtn,
  Button,
  BackArrow,
} from './Component.styled';
import { Translator } from 'components/language/translator';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  const Langu = ({ name }) => {
    return Translator(name);
  };

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
          {<Langu name="yourRecommendedDaily" />} {'\n'}
          {<Langu name="calorieIntakeIs" />}
        </Title>
        <Button type="button" onClick={onClose}>
          {<Langu name="startLosingweight" />}
        </Button>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
