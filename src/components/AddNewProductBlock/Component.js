import Container from 'components/Container/Container';
import { Wrapper, Inner, Title, Button } from './Component.styled';
import AddNewProductForm from 'components/AddNewProductForm/Component';
import { Translator } from 'components/language/translator';
import { Modal } from 'components/Modal/Component';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from 'redux/services/modalSlice';

const AddNewProductBlock = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(store => store.modal);
  const onOpenModal = async () => {
    await dispatch(openModal());
  };

  return (
    <Wrapper>
      <Container>
        <Inner>
          <Title>{Translator('addNewProduct')}</Title>
          <Button type="button" onClick={onOpenModal}>
            <svg width="14" height="14">
              <path d="M13.72 7.96H7.96v5.76H6.04V7.96H.28V6.04h5.76V.28h1.92v5.76h5.76v1.92Z" />
            </svg>
          </Button>
        </Inner>
      </Container>
      {isOpen && (
        <Modal
          onClose={() => {
            dispatch(closeModal());
          }}
        >
          <AddNewProductForm />
        </Modal>
      )}
    </Wrapper>
  );
};

export default AddNewProductBlock;
