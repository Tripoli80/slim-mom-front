import { Link, Container, DiaryLink } from './Navigation.styled';
import { Logo } from '../Logo/Logo';

export const Navigation = () => {
  return (
    <Container>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <DiaryLink>
        <Link to="diary">Diary</Link>
      </DiaryLink>
      <div>
        <Link to="calculator">Calculator</Link>
      </div>
    </Container>
  );
};
