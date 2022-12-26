import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/hooks';
import { addNewProduct } from '../../redux/products/operations';
// import Input from 'components/Input/Input';
// import { Button } from 'components/Button/Button';
import {
  AddNewProductFormStyled,
  AddNewProductInput,
  AddNewProductButton,
  ErrorMessage,
} from './Component.styled';
import { Translator } from 'components/language/translator';

const AddNewProductForm = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Formik
      initialValues={{ title: '', categories: '', calories: '', weight: '' }}
      onSubmit={values => {
        dispatch(addNewProduct(values));
        console.log(values);
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
        } else if (!values.weight) {
          errors.weight = 'Required';
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
        // isSubmitting,
      }) => (
        <AddNewProductFormStyled onSubmit={handleSubmit} autoComplete="off">
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
            placeHolder={Translator('kca')}
          />
          {errors.calories && touched.calories && (
            <ErrorMessage>{errors.calories}</ErrorMessage>
          )}
          <AddNewProductInput
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
          )}
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
