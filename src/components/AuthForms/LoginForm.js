import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { login } from 'redux/auth/authOperations';
import { AuthFormWrapper, AuthFormLabel, AuthFormItem, AuthBtnsWrapper, AuthFormNavLink } from 'components/AuthForms/AuthForm.styled';
import { Button } from 'components/Button/Button';
import { Translator } from 'components/language/translator';

const validationLoginSchema = yup.object().shape({
  email: yup.string().required("The field 'Email' is required").email("Invalid email address"),
  password: yup.string().required("The field 'Password' is required"),
});

export const LoginForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationLoginSchema}
      initialValues={{ email: '', password: '' }}
    >
      <AuthFormWrapper>
        <AuthFormLabel>{Translator('email')}</AuthFormLabel>
        <AuthFormItem type="email" name="email" required />
        <AuthFormLabel>{Translator('password')}</AuthFormLabel>
        <AuthFormItem type="password" name="password" required />
        <AuthBtnsWrapper>
          <Button type="submit">{Translator('logIn')}</Button>
          <AuthFormNavLink to="/registration">
            {Translator('register')}
          </AuthFormNavLink>
        </AuthBtnsWrapper>
      </AuthFormWrapper>
    </Formik>
  );
};
