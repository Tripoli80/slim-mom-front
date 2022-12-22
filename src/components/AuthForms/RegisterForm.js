import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { AuthFormWrapper, AuthFormLabel, AuthFormItem, AuthBtnsWrapper, AuthFormNavLink } from 'components/AuthForms/AuthForm.styled';
import { Button } from 'components/Button/Button';
import { Translator } from 'components/language/translator';

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
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ name: '', email: '', password: '' }}
    >
      <AuthFormWrapper>
        <AuthFormLabel>{Translator('name')}</AuthFormLabel>
        <AuthFormItem type="name" name="name" required />
        <AuthFormLabel>{Translator('email')}</AuthFormLabel>
        <AuthFormItem type="email" name="email" required />
        <AuthFormLabel>{Translator('password')}</AuthFormLabel>
        <AuthFormItem type="password" name="password" required />
        <AuthBtnsWrapper>
          <Button type="submit">{Translator('register')}</Button>
          <AuthFormNavLink to="/singin">{Translator('logIn')}</AuthFormNavLink>
        </AuthBtnsWrapper>
      </AuthFormWrapper>
    </Formik>
  );
};
