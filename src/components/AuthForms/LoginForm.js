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
        <AuthFormLabel></AuthFormLabel>
        <AuthFormItem type="email" name="email" placeholder="email *" required />
        <AuthFormLabel></AuthFormLabel>
        <AuthFormItem type="password" name="password" placeholder="password *" required />
        <AuthBtnsWrapper>
          <Button type="submit">Log in</Button>
          <AuthFormNavLink to="/register">Register</AuthFormNavLink>
        </AuthBtnsWrapper>
      </AuthFormWrapper>
    </Formik>
  );
};
