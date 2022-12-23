import { Link, Wrapper, SignInText, RegistrationText } from './AuthNav.styled';
import { Translator } from 'components/language/translator';
import { Language } from 'components/language/index';
export const AuthNav = () => {
  return (
    <Wrapper>
      <SignInText>
        <Link to="/singin">{Translator('signIn')}</Link>
      </SignInText>
      <RegistrationText>
        <Link to="/registration">{Translator('registration')}</Link>
      </RegistrationText>
      <Language />
    </Wrapper>
  );
};
