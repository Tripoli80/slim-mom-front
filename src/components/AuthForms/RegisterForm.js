import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { AuthFormWrapper, AuthFormLabel, AuthFormItem, AuthBtnsWrapper, AuthFormNavLink } from 'components/AuthForms/AuthForm.styled';
import { Button } from 'components/Button/Button';


function RegisterForm() {

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
        <AuthFormLabel></AuthFormLabel>
        <AuthFormItem type="name" name="name" placeholder="name *" required />
        <AuthFormLabel></AuthFormLabel>
        <AuthFormItem type="email" name="email" placeholder="email *" required />
        <AuthFormLabel></AuthFormLabel>
        <AuthFormItem type="password" name="password" placeholder="password *" required />
        <AuthBtnsWrapper>
          <Button PrimeryBtn type="submit">Register</Button>
          <AuthFormNavLink to="/login">Log in</AuthFormNavLink>
        </AuthBtnsWrapper>
      </AuthFormWrapper>
    </Formik>
  );
};

export default RegisterForm; 