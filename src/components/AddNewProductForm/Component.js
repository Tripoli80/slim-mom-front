import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewProduct } from '../../redux/products/operations';
import {
  AddNewProductFormStyled,
  Title,
  AddNewProductInput,
  AddNewProductButton,
  ErrorMessage,
} from './Component.styled';
import { Translator } from 'components/language/translator';
import { closeModal } from 'redux/services/modalSlice';

const AddNewProductForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ title: '', categories: '', calories: '' }}
      onSubmit={values => {
        dispatch(addNewProduct({ ...values, weight: 100 }));
        // console.log({ ...values, weight: Number(100) });
        dispatch(closeModal());
        // form.reset();
      }}
      validate={values => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Required';
        } else if (!values.categories) {
          errors.categories = 'Required';
        } else if (!values.calories) {
          errors.calories = 'Required';
        }
        // } else if (!values.weight) {
        //   errors.weight = 'Required';
        // }
        return errors;
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <AddNewProductFormStyled onSubmit={handleSubmit} autoComplete="off">
          <Title>{Translator('addNewProduct')}</Title>
          <AddNewProductInput
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.titles}
            placeHolder={Translator('enterProductName')}
          />
          {errors.title && touched.title && (
            <ErrorMessage>{errors.title}</ErrorMessage>
          )}
          <AddNewProductInput
            type="text"
            name="categories"
            id="categories"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.categories}
            placeHolder={Translator('categories')}
          />
          {errors.categories && touched.categories && (
            <ErrorMessage>{errors.categories}</ErrorMessage>
          )}
          <AddNewProductInput
            type="number"
            name="calories"
            id="calories"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.calories}
            placeHolder={Translator('kca100g')}
          />
          {errors.calories && touched.calories && (
            <ErrorMessage>{errors.calories}</ErrorMessage>
          )}
          {/* <AddNewProductInput
            type="number"
            name="weight"
            id="weight"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.weight}
            placeHolder={Translator('grams')}
          />
          {errors.weight && touched.weight && (
            <ErrorMessage>{errors.weight}</ErrorMessage>
          )} */}
          <AddNewProductButton
            type="submit"
            // disabled={!values.titles || !values.categories || !values.calories}
          >
            {Translator('add')}
          </AddNewProductButton>
        </AddNewProductFormStyled>
      )}
    </Formik>
  );
};

export default AddNewProductForm;
