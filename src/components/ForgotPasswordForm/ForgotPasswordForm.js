import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { forgotPassword } from 'redux/auth/authOperations';
import {
  AuthFormWrapper,
  AuthFormItemWrap,
  AuthFormLabel,
  AuthFormItem,
} from '../AuthForms/AuthForm.styled';
import { Button } from 'components/Button/Button';
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
      <AuthFormWrapper>
        <AuthFormItemWrap>
          <AuthFormLabel>{Translator('email')}</AuthFormLabel>
          <AuthFormItem id="email" name="email" type="email" required />
        </AuthFormItemWrap>
        <Button type="submit">{Translator('submit')}</Button>
      </AuthFormWrapper>
    </Formik>
  );
};
