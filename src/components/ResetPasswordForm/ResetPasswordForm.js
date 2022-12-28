import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { resetPassword } from 'redux/auth/authOperations';
import {
  ForgotPasswordFormWrapper,
  ForgotPasswordFormItemWrap,
} from './ForgotPasswordForm.styled';
import { Button } from 'components/Button/Button';
import { Translator } from 'components/language/translator';
import InputAuth from 'components/Input/InputAuth';
import { useNavigate, useParams } from 'react-router-dom';

export const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      resetPassword({
        token: token,
        password: values.password,
      })
    );
    navigate("/singin");
    resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ password: '' }}>
      <ForgotPasswordFormWrapper>
        <ForgotPasswordFormItemWrap>
          <InputAuth
            placeHolder={Translator('password')}
            id="password"
            name="password"
            type="password"
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
