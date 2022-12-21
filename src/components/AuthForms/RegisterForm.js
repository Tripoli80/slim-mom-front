import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { AuthFormWrapper, AuthFormLabel, AuthFormItem, AuthBtnsWrapper, AuthFormNavLink } from 'components/AuthForms/AuthForm.styled';
import { Button } from 'components/Button/Button';


export const RegisterForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ name: '', email: '', password: '' }}>
      <AuthFormWrapper>
        <AuthFormLabel>name *</AuthFormLabel>
        <AuthFormItem type="name" name="name" required />
        <AuthFormLabel>email *</AuthFormLabel>
        <AuthFormItem type="email" name="email" required />
        <AuthFormLabel>password *</AuthFormLabel>
        <AuthFormItem type="password" name="password" required />
        <AuthBtnsWrapper>
          <Button type="submit">Register</Button>
          <AuthFormNavLink to="/singin">Log in</AuthFormNavLink>
        </AuthBtnsWrapper>
      </AuthFormWrapper>
    </Formik>
  );
};
