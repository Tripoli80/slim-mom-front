import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/hooks';
import { addNewProduct } from '../../redux/products/operations';
import Input from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { AddNewProductFormStyled, ErrorMessage } from './Component.styled';
import { Translator } from 'components/language/translator';

const AddNewProductForm = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Formik
      initialValues={{ title: '', categories: '', calories: '', weight: '' }}
      onSubmit={values => {
        dispatch(
          addNewProduct({
            newProduct: values,
            user: user,
          })
        );
        console.log({
          newProduct: values,
          user: user,
        });
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
        isSubmitting,
      }) => (
        <AddNewProductFormStyled onSubmit={handleSubmit} autoComplete="off">
          <Input
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
          <Input
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
          <Input
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
          <Input
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
          <Button
            type="submit"
            // disabled={!values.titles || !values.categories || !values.calories}
          >
            {Translator('add')}
          </Button>
        </AddNewProductFormStyled>
      )}
    </Formik>
  );
};

export default AddNewProductForm;
