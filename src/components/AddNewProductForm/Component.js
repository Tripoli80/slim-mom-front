import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewProduct } from '../../redux/products/operations';

const AddNewProductForm = () => {
  const dispatch = useDispatch();
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const formdata = {
  //     title: form.elements.title.value,
  //     categories: form.elements.categories.value,
  //     calories: form.elements.calories.value,
  //   };
  //   console.log('formdata:', formdata);
  //   form.reset();
  // };

  return (
    <Formik
      initialValues={{ title: '', categories: '', calories: '' }}
      onSubmit={values => {
        // const form = e.currentTarget;
        // const formdata = {
        //   title: form.elements.title.value,
        //   categories: form.elements.categories.value,
        //   calories: form.elements.calories.value,
        // };
        dispatch(addNewProduct(values));
        console.log('values:', values);

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
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            title
            <input
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.titles}
            />
            {errors.title && touched.title && errors.title}
          </label>
          <label>
            categories
            <input
              type="text"
              name="categories"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.categories}
            />
            {errors.categories && touched.categories && errors.categories}
          </label>
          <label>
            calories
            <input
              type="number"
              name="calories"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.calories}
            />
            {errors.calories && touched.calories && errors.calories}
          </label>
          <button
            type="submit"
            // disabled={!values.titles || !values.categories || !values.calories}
          >
            Add product
          </button>
        </form>
      )}
    </Formik>
  );
};

export default AddNewProductForm;
