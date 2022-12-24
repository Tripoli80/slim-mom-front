import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByTitle } from 'redux/products/operations';
// import debounce from 'lodash.debounce';

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
import { selectSelectedProducts } from 'redux/products/selectors';

export const DiaryAddProductForm = () => {
  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');
  const dispatch = useDispatch();
  // const DEBOUNCE_DELAY = 300;
  const sp = useSelector(selectSelectedProducts);
  const handleAddProduct = e => {
    e.preventDefault();
    // dispatch(getProductsByTitle(title));
    // dispatch(addProduct({ title, weight }));
    resetForm();
  };

  // const handleChangeTitle = val => {};

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
          // value={title}
          // onChange={e => {
          //   setTitle(e.currentTarget.value);
          //   if (e.currentTarget.value.length > 3)
          //     dispatch(getProductsByTitle(e.currentTarget.value));
          // }}
          name="title"
          required
        />
        <LabelL htmlFor="title">Enter product name</LabelL>
        <FilteredList>
          {title.length > 3 &&
            sp.map(({ _id, title }) => (
              <li key={_id}>
                <button type="button" onClick={() => setTitle(title.ua)}>
                  {title.ua}
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
        <LabelR htmlFor="weight">Grams</LabelR>
      </FieldWeight>
      <Button type="submit">
        <svg width="14" height="14">
          <path d="M13.72 7.96H7.96v5.76H6.04V7.96H.28V6.04h5.76V.28h1.92v5.76h5.76v1.92Z" />
        </svg>
      </Button>
    </Form>
  );
};
