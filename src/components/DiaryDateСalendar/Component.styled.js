import styled from '@emotion/styled';

export const DateForm = styled.div`
  display: flex;
  gap: 21px;
  margin-left: 20px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-left: 32px;
    margin-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 16px;
    margin-top: 140px;
  }
`;

export const DateInput = styled.input`
  padding: 0;
  border: none;
  width: 116px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  @media screen and (min-width: 768px) {
    width: 219px;
    font-size: 34px;
    line-height: 41px;
  }
  cursor: pointer;
  color: #212121;
`;
export const DateButton = styled.button`
  background-color: transparent;
  color: #9b9faa;
  border: none;

  outline: none;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover,
  :focus {
    color: #fc842d;
  }
  & svg {
    fill: currentColor;
  }
`;
