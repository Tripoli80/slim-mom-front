import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { forgotPassword } from 'redux/auth/authOperations';
import {
  ForgotPasswordFormWrapper,
  ForgotPasswordFormItemWrap,
} from './ForgotPasswordForm.styled';
import { Button } from 'components/Button/Button';
import InputAuth from 'components/Input/InputAuth';
import { Translator } from 'components/language/translator';

export const ForgotPasswordForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      forgotPassword({
        email: values.email,
      })
    );
    resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ email: '' }}>
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
