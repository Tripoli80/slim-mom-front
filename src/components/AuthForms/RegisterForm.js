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
  GoogleLink,
  Error,
} from 'components/AuthForms/AuthForm.styled';
import { Button } from 'components/Button/Button';
import { Translator } from 'components/language/translator';
import defaultsBaseURL from '../../redux/auth/authOperations';

import InputAuth from 'components/Input/InputAuth';

const passwordShema = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,100}$/;
const emailShema =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const validationRegisterSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be 3 characters or more')
    .max(254, 'Name must be 254 characters or less')
    .required('Name is required'),
  email: yup
    .string()
    .min(3, ' Email must be 3 characters or more')
    .max(254, 'Name must be 254 characters or less')
    .required('Email is required')
    .matches(emailShema, 'Wrong type of email. Example: myemail@gmail.com'),
  password: yup
    .string()
    .min(
      8,
      'Password must be 8 characters or more, includes latin letters and numbers, Symbols are not allowed '
    )
    .max(
      100,
      'Password must be 100 characters or less, includes latin letters and numbers, Symbols are not allowed'
    )
    .matches(
      passwordShema,
      'Password must be 8 characters or more, includes latin letters and numbers, Symbols are not allowed'
    )
    .required('Password is required'),
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
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationRegisterSchema}
        initialValues={{ name: '', email: '', password: '' }}
      >
        {({ errors, touched }) => (
          <AuthFormWrapper>
            <AuthFormTitle>{Translator('register')}</AuthFormTitle>
            <AuthFormItemWrap>
              <InputAuth
                placeHolder={Translator('name')}
                id="name"
                name="name"
                required
              />
              {errors.name && touched.name && <Error>{errors.name}</Error>}
              <InputAuth
                placeHolder={Translator('email')}
                id="email"
                name="email"
                type="email"
                required
              />
              {errors.email && touched.email && <Error>{errors.email}</Error>}
              <InputAuth
                placeHolder={Translator('password')}
                id="password"
                name="password"
                type="password"
                required
              />
              {errors.password && touched.password && (
                <Error>{errors.password}</Error>
              )}
            </AuthFormItemWrap>

            <AuthBtnsWrapper>
              <Button type="submit">{Translator('register')}</Button>
              <AuthFormNavLink to="/singin">
                {Translator('logIn')}
              </AuthFormNavLink>
              <GoogleLink href={`${defaultsBaseURL}api/users/google`}>
                {Translator('continueWithGoogle')}
              </GoogleLink>
            </AuthBtnsWrapper>
          </AuthFormWrapper>
        )}
      </Formik>
    </>
  );
};
