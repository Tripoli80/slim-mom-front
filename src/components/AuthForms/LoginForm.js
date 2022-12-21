import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { AuthFormWrapper, AuthFormLabel, AuthFormItem, AuthBtnsWrapper, AuthFormNavLink } from 'components/AuthForms/AuthForm.styled';
import { Button } from 'components/Button/Button';


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
    <Formik onSubmit={handleSubmit} initialValues={{ email: '', password: '' }}>
      <AuthFormWrapper>
        <AuthFormLabel>email *</AuthFormLabel>
        <AuthFormItem type="email" name="email" required />
        <AuthFormLabel>password *</AuthFormLabel>
        <AuthFormItem type="password" name="password" required />
        <AuthBtnsWrapper>
          <Button type="submit">Log in</Button>
          <AuthFormNavLink to="/registration">Register</AuthFormNavLink>
        </AuthBtnsWrapper>
      </AuthFormWrapper>
    </Formik>
  );
};
