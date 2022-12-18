import picture from '../../favicon.png';
import { Wrapper, TextMom, TextSlim, Container } from './Logo.styled';

export const Logo = () => {
  return (
    <Wrapper>
      <img src={picture} alt=""></img>
      <Container>
        <TextSlim>Slim</TextSlim>
        <TextMom>Mom</TextMom>
      </Container>
    </Wrapper>
  );
};
