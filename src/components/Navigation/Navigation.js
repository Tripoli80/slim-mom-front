import { Link, Container, DiaryLink } from './Navigation.styled';
import { Translator } from 'components/language/translator';
export const Navigation = () => {
  return (
    <Container>
      <DiaryLink>
        <Link to="/diary">{Translator('diary')}</Link>
      </DiaryLink>
      <div>
        {/* <Link to="/">{Translator('calculator')}</Link> */}
        <Link to="/calculator">{Translator('calculator')}</Link>
      </div>
    </Container>
  );
};
