import { Link, Container, DiaryLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Container>
      <DiaryLink>
        <Link to="diary">Diary</Link>
      </DiaryLink>
      <div>
        <Link to="calculator">Calculator</Link>
      </div>
    </Container>
  );
};
