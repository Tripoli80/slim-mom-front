import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { AuthFormWrapper, AuthFormLabel, AuthFormItem, AuthBtnsWrapper, AuthFormNavLink, AuthFormItemWrap } from 'components/AuthForms/AuthForm.styled';
import { Button } from 'components/Button/Button';
import { Translator } from 'components/language/translator';

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
        <AuthFormItemWrap>
          <AuthFormItem type="email" name="email" id="email" required />
          <AuthFormLabel htmlFor='email'>{Translator('email')}</AuthFormLabel>       
        </AuthFormItemWrap>
        <AuthFormItemWrap>
          <AuthFormItem type="password" name="password" id="password" required />
          <AuthFormLabel htmlFor='password'>{Translator('password')}</AuthFormLabel>       
        </AuthFormItemWrap>
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
