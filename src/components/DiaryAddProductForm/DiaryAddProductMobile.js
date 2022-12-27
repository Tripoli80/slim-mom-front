import { Button, DivCtnterd } from './DiaryAddProductForm.styled';
import { Modal } from 'components/Modal/Modal';
import { DiaryAddProductForm } from './DiaryAddProductForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsOpenModal } from 'redux/products/selectors';
import { setIsOpenModal } from 'redux/products/slice';

export const DiaryAddProductMobile = () => {
  const dispatch = useDispatch();

  return (
    <>
      <DivCtnterd>
        <Button type="button" onClick={() => dispatch(setIsOpenModal(true))}>
          <svg width="14" height="14">
            <path d="M13.72 7.96H7.96v5.76H6.04V7.96H.28V6.04h5.76V.28h1.92v5.76h5.76v1.92Z" />
          </svg>
        </Button>
      </DivCtnterd>
      {useSelector(selectIsOpenModal) && (
        <Modal onClose={() => dispatch(setIsOpenModal(false))}>
          <DiaryAddProductForm />
        </Modal>
      )}
    </>
  );
};
