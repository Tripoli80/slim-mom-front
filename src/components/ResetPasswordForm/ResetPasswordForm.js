import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { checkToken, resetPassword } from 'redux/auth/authOperations';
import {
  ForgotPasswordFormWrapper,
  ForgotPasswordFormItemWrap,
  LoaderWrapper,
  NotFoundToken,
  NavItem,
  Text,
} from './ForgotPasswordForm.styled';
import { Button } from 'components/Button/Button';
import { Translator } from 'components/language/translator';
import InputAuth from 'components/Input/InputAuth';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loading/Loading';
import { passwordShema } from 'components/AuthForms/RegisterForm';


const validationResetSchema = yup.object().shape({
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

export const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const [nativeToken, setNativeToken] = useState(false);
  const [isChaked, setIsChaked] = useState(false);

  const navigate = useNavigate();
  const { token } = useParams();
  useEffect(() => {
    setIsChaked(false);
    dispatch(
      checkToken({
        token,
        setNativeToken,
        setIsChaked,
      })
    );
  }, [token, dispatch]);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      resetPassword({
        token: token,
        password: values.password,
      })
    );
    navigate('/singin');
    resetForm();
  };
  const form = (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationResetSchema}
      initialValues={{ password: '' }}
    >
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

  const spiner = (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
  const notFound = (
    <LoaderWrapper>
      <NotFoundToken>Token not found</NotFoundToken>
      <Text>
        {
          <NavItem to="/forgotpassword">
            Go back to the forgot password page
          </NavItem>
        }
      </Text>
    </LoaderWrapper>
  );

  return (
    <>
      {!isChaked && spiner}
      {isChaked && !nativeToken && notFound}
      {isChaked && nativeToken && form}
    </>
  );
};
