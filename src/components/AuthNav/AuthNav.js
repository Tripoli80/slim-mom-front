import { Link, Wrapper, SignInText, RegistrationText } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <SignInText>
        <Link to="/singin">Sign in</Link>
      </SignInText>
      <RegistrationText>
        <Link to="/registration">Registration</Link>
      </RegistrationText>
    </Wrapper>
  );
};
