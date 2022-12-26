import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { resetPassword } from "redux/auth/authOperations";
import {
  AuthFormWrapper,
  AuthFormItemWrap,
  AuthFormLabel,
  AuthFormItem,
} from "../AuthForms/AuthForm.styled";
import { Button } from "components/Button/Button";
import { Translator } from 'components/language/translator';

export const ResetPasswordForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      resetPassword({
        email: values.email,
      })
    );
    resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ email: '' }}
      >
        <AuthFormWrapper>
          <AuthFormItemWrap>
            <AuthFormLabel>{Translator('Email')}</AuthFormLabel>
            <AuthFormItem id="email" name="email" type="email" required/>
          </AuthFormItemWrap>
          <Button type="submit">{ Translator('Submit')}</Button>
        </AuthFormWrapper>
      </Formik>
    </>
  )
}

