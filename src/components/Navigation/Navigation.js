import { Link, Container, DiaryLink } from './Navigation.styled';
import { Logo } from '../Logo/Logo';
import { Translator } from 'components/language/translator';


export const Navigation = () => {
  const Langu = ({ name }) => {
    return Translator(name);
  };
  return (
    <Container>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <DiaryLink>
        <Link to="diary">{<Langu name="diary" />}</Link>
      </DiaryLink>
      <div>
        <Link to="calculator">{<Langu name="calculator" />}</Link>
      </div>
    </Container>
  );
};
