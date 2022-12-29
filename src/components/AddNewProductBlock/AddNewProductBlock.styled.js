import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  /* outline: 1px black dotted; */
`;

export const Inner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* padding: 0 16px; */
  /* outline: 1px black dotted; */

  @media screen and (min-width: 768px) {
    padding-left: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
  }
`;

export const Title = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  color: #212121;
  font-size: 14px;

  /* @media (min-width: 768px) {
    font-size: 26px;
  } */
`;

export const Button = styled.button`
  padding: 0px;
  margin-left: 32px;
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
