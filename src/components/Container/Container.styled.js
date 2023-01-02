const { default: styled } = require('styled-components');

export const ContainerStyled = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 1279px;
  }
  @media (min-width: 1280px) {
  }
`;
