import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  AuthFormWrapper,
  AuthFormLabel,
  AuthFormItem,
  AuthBtnsWrapper,
  AuthFormNavLink,
} from 'components/AuthForms/AuthForm.styled';
import { Button } from 'components/Button/Button';
import { Translator } from 'components/language/translator';

function RegisterForm() {
  const Langu = ({ name }) => {
    return Translator(name);
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ name: '', email: '', password: '' }}
    >
      <AuthFormWrapper>
        <AuthFormLabel></AuthFormLabel>
        <AuthFormItem
          type="name"
          name="name"
          placeholder={<Langu name="name" />}
          required
        />
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
            {<Langu name="register" />}
          </Button>
          <AuthFormNavLink to="/login">
            {<Langu name="logIn" />}
          </AuthFormNavLink>
        </AuthBtnsWrapper>
      </AuthFormWrapper>
    </Formik>
  );
}

export default RegisterForm;
