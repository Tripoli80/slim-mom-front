import Input from 'components/Input/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form } from './Component.styled';

const KEY_DAILY_CALORIE = 'dailyCalorie';
const DailyCaloriesForm = () => {
  const validation = Yup.object().shape({
    height: Yup.number()
      .typeError('Must be a number')
      .min(100, 'Minimal 120')
      .max(260, 'Max 260')
      .required('Required!'),
    age: Yup.number()
      .typeError('Must be a number')
      .min(18, 'Minimal 18')
      .max(120, 'Max 120')
      .required('Required!'),
    currentWeight: Yup.number()
      .typeError('Must be a number')
      .min(50, 'Minimal 50')
      .max(250, 'Max 250')
      .required('Required!'),
    desiredWeight: Yup.number()
      .typeError('Must be a number')
      .min(45, 'Minimal 45')
      .max(
        Yup.ref('currentWeight'),
        'The maximum value cannot be greater than the current one.'
      )
      .required('Required!'),
    bloodType: Yup.number().required('Required!'),
  });
  const getFromLocalStorage = JSON.parse(
    localStorage.getItem(KEY_DAILY_CALORIE)
  );
  const initialValues = getFromLocalStorage
    ? {
        height: getFromLocalStorage.height,
        age: getFromLocalStorage.age,
        currentWeight: getFromLocalStorage.currentWeight,
        desiredWeight: getFromLocalStorage.desiredWeight,
        bloodType: getFromLocalStorage.bloodType,
      }
    : {
        height: '',
        age: '',
        currentWeight: '',
        desiredWeight: '',
        bloodType: '',
      };
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: values => {
      localStorage.setItem(KEY_DAILY_CALORIE, JSON.stringify(values));
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik);

  return (
    <>
      <h2>Calculate your daily calorie intake right now</h2>

      <Form onSubmit={formik.handleSubmit}>
        <div>
          <Input
            placeHolder="Heigth*"
            id="height"
            name="height"
            onChange={formik.handleChange}
            value={formik.values.height}
          />
          {formik.touched.height && <p>{formik.errors.height}</p>}
        </div>
        <div>
          <Input
            placeHolder="Age*"
            id="age"
            name="age"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
          {formik.touched.age && <p>{formik.errors.age}</p>}
        </div>
        <div>
          <Input
            placeHolder="Current weight*"
            id="currentWeight"
            name="currentWeight"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.currentWeight}
          />
          {formik.touched.currentWeight && <p>{formik.errors.currentWeight}</p>}
        </div>
        <div>
          <Input
            placeHolder="Desired weight*"
            id="desiredWeight"
            name="desiredWeight"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.desiredWeight}
          />
          {formik.touched.desiredWeight && <p>{formik.errors.desiredWeight}</p>}
        </div>
        <div>
          <label htmlFor="bloodType">bloodType</label>
          <input
            id="1-radio-button"
            name="bloodType"
            type="radio"
            value="1"
            onChange={formik.handleChange}
          />
          <input
            id="2-radio-button"
            name="bloodType"
            type="radio"
            onChange={formik.handleChange}
            value="2"
          />
          <input
            id="3-radio-button"
            name="bloodType"
            type="radio"
            onChange={formik.handleChange}
            value="3"
          />
          <input
            id="4-radio-button"
            name="bloodType"
            type="radio"
            onChange={formik.handleChange}
            value="4"
          />
        </div>

        {formik.touched.bloodType && <p>{formik.errors.bloodType}</p>}

        <button type="submit">Submit</button>
      </Form>
    </>
  );
};
export default DailyCaloriesForm;
