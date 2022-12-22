const { default: styled } = require('styled-components');

export const ContainerStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    max-width: 1280px;
    padding: 0 32px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }
`;
