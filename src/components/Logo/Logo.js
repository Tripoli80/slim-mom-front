import picture from '../../favicon.png';
import { Wrapper, TextMom, TextSlim, Container } from './Logo.styled';
import { Translator } from 'components/language/translator';

export const Logo = () => {
  const Langu = ({ name }) => {
    return Translator(name);
  };
  return (
    <Wrapper>
      <img src={picture} alt=""></img>
      <Container>
        <TextSlim>{<Langu name="slim" />}</TextSlim>
        <TextMom>{<Langu name="mom" />}</TextMom>
      </Container>
    </Wrapper>
  );
};
