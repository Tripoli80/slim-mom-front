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

import InputAuth from 'components/Input/InputAuth';

const passwordShema = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,100}$/;
const emailShema =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const validationRegisterSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must contain minimum 3 characters')
    .max(254, 'Name must contain maximum 254 characters')
    .required('Name is required'),
  email: yup
    .string()
    .min(3, 'Email must contain minimum 3 characters')
    .max(254, 'Email must contain maximum 254 characters')
    .required('Email is required')
    .matches(emailShema, 'Wrong type of email. Example: myemail@gmail.com'),
  password: yup
    .string()
    .min(
      8,
      'Password must contain minimum 3 characters, includes latin letters and numbers. Symbols are not allowed'
    )
    .max(
      100,
      'Password must contain maximum 100 characters, includes latin letters and numbers. Symbols are not allowed'
    )
    .matches(
      passwordShema,
      'Password must contain minimum 3 characters, includes latin letters and numbers. Symbols are not allowed'
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
              <GoogleLink
                href={`${process.env.REACT_APP_BASE_URL}api/users/google`}
              >
                {Translator('continueWithGoogle')}
              </GoogleLink>
            </AuthBtnsWrapper>
          </AuthFormWrapper>
        )}
      </Formik>
    </>
  );
};
