import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addProduct } from 'redux/products/operations';
import {
  Form,
  Input,
  Button,
  LabelR,
  LabelL,
  InputR,
  FieldProduct,
  FieldWeight,
} from './Component.styled';

export const DiaryAddProductForm = () => {
  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');
  const dispatch = useDispatch();

  const handleAddProduct = e => {
    e.preventDefault();

    dispatch(addProduct({ title, weight }));
    resetForm();
  };

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
          onChange={e => setTitle(e.currentTarget.value)}
          name="title"
          required
        />
        <LabelL htmlFor="title">Enter product name</LabelL>
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
