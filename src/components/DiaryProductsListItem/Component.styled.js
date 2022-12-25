import styled from '@emotion/styled';

export const Text = styled.span`
  display: block;
  padding-top: 20px;
  padding-bottom: 8px;

  @media screen and (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 20px;
  }

  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #212121;
  mix-blend-mode: lighten;
  border-bottom: 1px solid #e0e0e0;
`;

export const Title = styled(Text)`
  margin-right: 8px;
  width: 130px;
  @media screen and (min-width: 768px) {
    margin-right: 22px;
    width: 240px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 48px;
  }

  text-align: left;
`;

export const Weight = styled(Text)`
  margin-right: 8px;
  width: max-content;
  @media screen and (min-width: 768px) {
    margin-right: 22px;
    width: 106px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
  }

  text-align: right;
`;
export const Calories = styled(Text)`
  margin-right: 17px;
  width: max-content;
  @media screen and (min-width: 768px) {
    margin-right: 32px;
    width: 106px;
  }

  text-align: right;
`;

export const Button = styled.button`
  padding: 0;

  background-color: transparent;
  color: #9b9faa;
  border: none;
  font-size: 12px;
  outline: none;
  @media screen and (min-width: 1280px) {
    mix-blend-mode: lighten;
  }

  /* transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1); */
  cursor: pointer;

  :hover,
  :focus {
    color: #fc842d;
  }

  & svg {
    stroke: currentColor;
  }
`;
