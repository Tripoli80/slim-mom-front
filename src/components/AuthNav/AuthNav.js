import { Link, Wrapper, SignInText } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <SignInText>
        <Link to="/singin">Sign in</Link>
      </SignInText>
      <div>
        <Link to="/registration">Registration</Link>
      </div>
    </Wrapper>
  );
};
