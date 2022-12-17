import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LoginFormWrapper, LoginFormLabel, LoginFormItem, LoginBtnsWrapper } from 'components/LoginForm/LoginForm.styled';
import { PrimaryBtn, SecondaryBtn } from 'components/Button/Button.styled';


function LoginForm() {

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ email: '', password: '' }}>
      <LoginFormWrapper>
        <LoginFormLabel></LoginFormLabel>
        <LoginFormItem type="email" name="email" placeholder="email *" required />
        <LoginFormLabel></LoginFormLabel>
        <LoginFormItem type="password" name="password" placeholder="password *" required />
        <LoginBtnsWrapper>
          <PrimaryBtn type="submit">Log in</PrimaryBtn>
        <SecondaryBtn type="button">Register</SecondaryBtn>
        </LoginBtnsWrapper>
      </LoginFormWrapper>
    </Formik>
  );
};

export default LoginForm; 