import picture from '../../favicon.png';
import { Wrapper, TextMom, TextSlim, Container, Img } from './Logo.styled';

import { useAuth } from '../../hooks/hooks';

export const Logo = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrapper>
      <Img src={picture} alt="logo"></Img>
      <Container>
        <TextSlim user={isLoggedIn}>Slim</TextSlim>
        <TextMom user={isLoggedIn}>Mom</TextMom>
      </Container>
    </Wrapper>
  );
};
