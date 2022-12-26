import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEatedProduct, getProductsByTitle } from 'redux/products/operations';
import { Translator } from 'components/language/translator';

// import { useDispatch } from 'react-redux';
// import { addEatedProduct } from 'redux/products/operations';

import {
  Form,
  Input,
  Button,
  LabelR,
  LabelL,
  InputR,
  FieldProduct,
  FieldWeight,
  FilteredList,
} from './Component.styled';
import { selectDate, selectSelectedProducts } from 'redux/products/selectors';
import { getLanguage } from 'redux/selectors';

export const DiaryAddProductForm = () => {
  const [title, setTitle] = useState('');
  const [product, setProduct] = useState(null);
  const [weight, setWeight] = useState('');




  const date = useSelector(selectDate);
  const dispatch = useDispatch();
  const lang = useSelector(getLanguage).toLowerCase();
  let sp = useSelector(selectSelectedProducts);

  const handleAddProduct = e => {
    e.preventDefault();
    dispatch(addEatedProduct({ product, weight, date }));

    resetForm();
  };

  // useEffect(() => {
  //   dispatch(getProductsByDate(date));
  // }, [date, dispatch]);

  useEffect(() => {
    if (title.length > 3) dispatch(getProductsByTitle(title));
  }, [dispatch, title]);

  const resetForm = () => {
    setTitle('');
    setWeight('');
  };

  return (
    <Form onSubmit={handleAddProduct}>
      <FieldProduct>
        <Input
          id="title"
          type="text"
          value={title}
          onChange={e => {
            setTitle(e.currentTarget.value);
          }}
          name="title"
          required
        />
        <LabelL htmlFor="title">{Translator('enterProductName')}</LabelL>
        <FilteredList>
          {title.length > 3 &&
            sp.map(({ _id, title }) => (
              <li key={_id}>
                <button
                  type="button"
                  onClick={() => {
                    setTitle(title[lang]);
                    setProduct(_id);
                  }}
                >
                  {title[lang]}
                </button>
              </li>
            ))}
        </FilteredList>
      </FieldProduct>

      <FieldWeight>
        <InputR
          id="weight"
          type="number"
          value={weight}
          onChange={e => setWeight(e.currentTarget.value)}
          name="weight"
          pattern="^[0-9]*$"
          required
        />
        <LabelR htmlFor="weight">{Translator('grams')}</LabelR>
      </FieldWeight>
      <Button type="submit">
        <svg width="14" height="14">
          <path d="M13.72 7.96H7.96v5.76H6.04V7.96H.28V6.04h5.76V.28h1.92v5.76h5.76v1.92Z" />
        </svg>
      </Button>
    </Form>
  );
};
