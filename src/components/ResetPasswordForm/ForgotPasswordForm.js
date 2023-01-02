import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { forgotPassword } from 'redux/auth/authOperations';
import {
  ForgotPasswordFormWrapper,
  ForgotPasswordFormItemWrap,
} from './ForgotPasswordForm.styled';
import { Button } from 'components/Button/Button';
import InputAuth from 'components/Input/InputAuth';
import { Translator } from 'components/language/translator';
import { useState } from 'react';
import { Spiner } from 'components/AuthForms/AuthForm.styled';
import { Loader } from 'components/Loading/Loading';

const validationForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required("The field 'Email' is required")
    .email('Invalid email address'),
});

export const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    setIsLoading(true);
    const nav = () => {
      navigate('/singin', { replace: true });
    };
    dispatch(
      forgotPassword({
        email: values.email,
        setIsLoading,
        nav,
        resetForm
      })
    );
    
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationForgotPasswordSchema}
      initialValues={{ email: '' }}
    >
      <ForgotPasswordFormWrapper>
        <ForgotPasswordFormItemWrap>
          <InputAuth
            placeHolder={Translator('email')}
            id="email"
            name="email"
            type="email"
            required
          />
        </ForgotPasswordFormItemWrap>
        <Button type="submit" style={{ width: '200px' }}>
          {Translator('submit')}
          <Spiner>
            {isLoading ? <Loader size={18} color={'#fff'}></Loader> : <></>}
          </Spiner>
        </Button>
      </ForgotPasswordFormWrapper>
    </Formik>
  );
};
