import { Formik } from 'formik';
import { useNavigate } from "react-router-dom";
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

const validationForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required("The field 'Email' is required")
    .email('Invalid email address'),
})

export const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      forgotPassword({
        email: values.email,
      })
    );
    navigate("/singin", { replace: true });
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationForgotPasswordSchema}
      initialValues={{ email: '' }}>
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
        </Button>
      </ForgotPasswordFormWrapper>
    </Formik>
  );
};
