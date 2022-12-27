import * as Yup from 'yup';

const validation = Yup.object().shape({
  height: Yup.number()
    .typeError('Must be a number')
    .min(100, 'Minimal 100')
    .max(250, 'Max 250')
    .required('Required!'),
  age: Yup.number()
    .typeError('Must be a number')
    .min(18, 'Minimal 18')
    .max(100, 'Max 100')
    .required('Required!'),
  cWeight: Yup.number()
    .typeError('Must be a number')
    .min(20, 'Minimal 20')
    .max(500, 'Max 500')
    .required('Required!'),
  dWeight: Yup.number()
    .typeError('Must be a number')
    .min(20, 'Minimal 20')
    .max(
      Yup.ref('cWeight'),
      'The maximum value cannot be greater than the current one.'
    )
    .required('Required!'),
  blood: Yup.number().required('Required!'),
});
export default validation;
