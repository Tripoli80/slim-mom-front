import { Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Logo</Link>
      <Link to="diary">Diary</Link>
      <Link to="calculator">Calculator</Link>
    </nav>
  );
};
