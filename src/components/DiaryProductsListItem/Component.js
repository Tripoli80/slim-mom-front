import { useDispatch } from 'react-redux';
import { removeEatedProduct } from 'redux/products/operations';
import EllipsisText from 'react-ellipsis-text';
import { Button, Title, Weight, Calories } from './Component.styled';
import { useWindowWidth } from 'hooks/useWindowWidth';

export const DiaryProductListItem = ({ id, title, weight, calories }) => {
  const dispatch = useDispatch();
  const windowWidth = useWindowWidth();

  return (
    <>
      <Title>
        <EllipsisText text={title} length={windowWidth < 768 ? 15 : 27} />
      </Title>
      <Weight>{weight} g</Weight>
      <Calories>{calories} kcal</Calories>
      <Button type="button" onClick={() => dispatch(removeEatedProduct(id))}>
        <svg width="12" height="12">
          <path d="m1 1 10 10M1 11 11 1" strokeWidth="2" />
        </svg>
      </Button>
    </>
  );
};
