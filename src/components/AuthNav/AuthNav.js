import { Link, Wrapper, SignInText } from './AuthNav.styled';
import { Translator } from 'components/language/translator';

export const AuthNav = () => {

  const Langu = ({ name }) => {
    return Translator(name);
  };


  return (
    <Wrapper>
      <SignInText>
        <Link to="/singin">{<Langu name="signIn" />}</Link>
      </SignInText>
      <div>
        <Link to="/registration">{<Langu name="register" />}</Link>
      </div>
    </Wrapper>
  );
};
