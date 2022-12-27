import { useDispatch } from 'react-redux';
import { removeEatedProduct } from 'redux/products/operations';
import EllipsisText from 'react-ellipsis-text';
import { Button, Title, Weight, Calories } from './DiaryProductsListItem.styled';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { Translator } from 'components/language/translator';
import { useState } from 'react';
import { Loader } from 'components/Loading/Loading';
export const DiaryProductListItem = ({ id, title, weight, calories }) => {
  const dispatch = useDispatch();
  const windowWidth = useWindowWidth();
  const [isDel, setIsDel] = useState(false);
  return (
    <>
      <Title>
        <EllipsisText text={title} length={windowWidth < 768 ? 15 : 27} />
      </Title>
      <Weight>
        {weight} {Translator('g')}
      </Weight>
      <Calories>
        {calories} {Translator('kca')}
      </Calories>
      <Button
        type="button"
        onClick={() => {
          dispatch(removeEatedProduct(id));
          setIsDel(true);
        }}
      >
        {isDel ? (
          <Loader size={18} color={'#fc842d'}></Loader>
        ) : (
          <svg width="12" height="12">
            <path d="m1 1 10 10M1 11 11 1" strokeWidth="2" />
          </svg>
        )}
      </Button>
    </>
  );
};
