import picture from '../../favicon.png';
import { Wrapper, TextMom, TextSlim, Container, Img } from './Logo.styled';

import { useIsLoading } from '../../hooks/hooks';

export const Logo = () => {
  const { isLoggedIn } = useIsLoading();

  return (
    <Wrapper>
      <Img src={picture} alt="logo"></Img>
      <Container user={isLoggedIn}>
        <TextSlim>Slim</TextSlim>
        <TextMom>Mom</TextMom>
      </Container>
    </Wrapper>
  );
};
