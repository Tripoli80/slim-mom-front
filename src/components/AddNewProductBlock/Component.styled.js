import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 32px;
  /* outline: 1px black dotted; */
`;

export const Title = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  color: #212121;
  width: 100%;
  font-size: 18px;
  margin-bottom: 34px;
  padding-top: 32px;

  @media (min-width: 768px) {
    width: 700px;
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 32px;
    padding-top: 100px;
  }

  @media (min-width: 1264px) {
    width: 600px;
    padding-top: 25px;
  }
`;

export const Button = styled.button`
  padding: 0px;
  width: 48px;
  height: 48px;

  background-color: #fc842d;
  color: #ffffff;

  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.3);
  outline: none;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 0.3),
    color 250ms cubic-bezier(0.4, 0, 0.2, 0.3);

  cursor: pointer;

  :hover,
  :focus {
    color: #fc842d;
    background-color: #ffffff;
    border: 2px solid #fc842d;
    box-shadow: none;
  }

  & svg {
    fill: currentColor;
  }
`;
