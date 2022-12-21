import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { AuthFormWrapper, AuthFormLabel, AuthFormItem, AuthBtnsWrapper, AuthFormNavLink } from 'components/AuthForms/AuthForm.styled';
import { Button } from 'components/Button/Button';
import { Translator } from 'components/language/translator';


function LoginForm() {

  const Langu = ({ name }) => {
    return Translator(name);
  };

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
      <AuthFormWrapper>
        <AuthFormLabel></AuthFormLabel>
        <AuthFormItem
          type="email"
          name="email"
          placeholder={<Langu name="email" />}
          required
        />
        <AuthFormLabel></AuthFormLabel>
        <AuthFormItem
          type="password"
          name="password"
          placeholder={<Langu name="password" />}
          required
        />
        <AuthBtnsWrapper>
          <Button PrimeryBtn type="submit">
            {<Langu name="logIn" />}
          </Button>
          <AuthFormNavLink to="/register">
            {<Langu name="register" />}
          </AuthFormNavLink>
        </AuthBtnsWrapper>
      </AuthFormWrapper>
    </Formik>
  );
};

export default LoginForm; 