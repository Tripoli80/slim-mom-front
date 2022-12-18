import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/singin">Sign in</Link>
      <Link to="/registration">Registration</Link>
    </div>
  );
};
