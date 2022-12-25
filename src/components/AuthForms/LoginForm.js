import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { login } from 'redux/auth/authOperations';
import {
  AuthFormWrapper,
  AuthBtnsWrapper,
  AuthFormNavLink,
  AuthFormItemWrap,
} from 'components/AuthForms/AuthForm.styled';
import { Button } from 'components/Button/Button';
import { Translator } from 'components/language/translator';

import InputAuth from 'components/Input/InputAuth';

const validationLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("The field 'Email' is required")
    .email('Invalid email address'),
  password: yup.string().required("The field 'Password' is required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log('====================================');
    console.log(values);
    console.log('====================================');
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
        <AuthFormItemWrap>
          <InputAuth
            placeHolder={Translator('email')}
            id="email"
            name="email"
            type="email"
            required
          />
          <InputAuth
            placeHolder={Translator('password')}
            id="password"
            name="password"
            type="password"
            required
          />
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
