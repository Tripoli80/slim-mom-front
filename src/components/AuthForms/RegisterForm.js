import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import * as yup from 'yup';
import {
  AuthFormTitle,
  AuthFormWrapper,
  AuthBtnsWrapper,
  AuthFormNavLink,
  AuthFormItemWrap,
} from 'components/AuthForms/AuthForm.styled';
import { Button } from 'components/Button/Button';
import { Translator } from 'components/language/translator';

import InputAuth from 'components/Input/InputAuth';

const validationRegisterSchema = yup.object().shape({
  name: yup.string().required("The field 'Name' is required"),
  email: yup
    .string()
    .required("The field 'Email' is required")
    .email('Invalid email address'),
  password: yup.string().required("The field 'Password' is required"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        username: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <>
    <AuthFormTitle>REGISTER</AuthFormTitle>
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationRegisterSchema}
      initialValues={{ name: '', email: '', password: '' }}
    >
      <AuthFormWrapper>
        <AuthFormItemWrap>
          <InputAuth
            placeHolder={Translator('name')}
            id="name"
            name="name"
            required
          />
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
          <Button type="submit">{Translator('register')}</Button>
          <AuthFormNavLink to="/singin">{Translator('logIn')}</AuthFormNavLink>
        </AuthBtnsWrapper>
      </AuthFormWrapper>
    </Formik>
    </>
  );
};
