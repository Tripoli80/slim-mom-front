import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { resetPassword } from 'redux/auth/authOperations';
import {
  AuthFormWrapper,
  AuthFormItemWrap,
  AuthFormLabel,
  AuthFormItem,
} from '../AuthForms/AuthForm.styled';
import { Button } from 'components/Button/Button';
import { Translator } from 'components/language/translator';

export const ResetPasswordForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      resetPassword({
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ password: '' }}>
      <AuthFormWrapper>
        <AuthFormItemWrap>
          <AuthFormLabel>{Translator('Password')}</AuthFormLabel>
          <AuthFormItem id="password" name="password" type="password" required />
        </AuthFormItemWrap>
        <Button type="submit">{Translator('Submit')}</Button>
      </AuthFormWrapper>
    </Formik>
  );
};
