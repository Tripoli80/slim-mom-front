import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { AuthFormWrapper, AuthFormLabel, AuthFormItem, AuthBtnsWrapper, AuthFormNavLink } from 'components/AuthForms/AuthForm.styled';
import { Button } from 'components/Button/Button';


function LoginForm() {

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
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
          <Button PrimeryBtn type="submit">Log in</Button>
          <AuthFormNavLink to="/register">Register</AuthFormNavLink>
        </AuthBtnsWrapper>
      </AuthFormWrapper>
    </Formik>
  );
};

export default LoginForm; 