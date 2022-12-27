const { default: styled } = require('styled-components');

export const ContainerStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  // padding: 0 5px;

  // box-shadow: rgb(0 0 0 / 20%) 0px 8px 11px 4px,
  //  rgb(0 0 0 / 14%) 0px 2px 2px 0px,
  //  rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  @media (min-width: 768px) {
    max-width: 1279px;
    padding: 0 32px;
  }
  @media (min-width: 1280px) {
    // max-width: 1280px;
    // padding: 0 16px;
  }
`;
