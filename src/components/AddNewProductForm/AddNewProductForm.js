import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewProduct } from '../../redux/products/operations';
import {
  AddNewProductFormStyled,
  Title,
  AddNewProductInput,
  AddNewProductButton,
  ErrorMessage,
} from './AddNewProductForm.styled';
import { Translator } from 'components/language/translator';
import { closeModal } from 'redux/services/modalSlice';
import { useLocation, useNavigate } from 'react-router';

const AddNewProductForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ title: '', categories: '', calories: '' }}
      onSubmit={values => {
        dispatch(addNewProduct({ ...values, weight: 100 }));
        dispatch(closeModal());
        location.state?.from && navigate(location.state?.from);
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
        
          <AddNewProductButton
            type="submit"
          >
            {Translator('add')}
          </AddNewProductButton>
        </AddNewProductFormStyled>
      )}
    </Formik>
  );
};

export default AddNewProductForm;
