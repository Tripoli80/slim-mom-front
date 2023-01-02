import styled from 'styled-components';

const PrimaryBtn = styled.button`
  cursor: pointer;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
  border: 2px solid #fc842d;
  color: #fc842d;

  text-decoration: none;
  font-size: 14px;
  height: 42px;
  font-weight: 500;
  min-width: 180px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  color: #ffffff;
  border: none;
  background-color: #fc842d;

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
    scale: 1.1;
  }

  &:active {
    background-color: #eeeeee;
    scale: 1.1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
      0 0 0 3px #c8dafc;
  }
`;

const SecondaryBtn = styled.button`
  cursor: pointer;
  min-width: 180px;
  height: 42px;
  padding-left: 24px;
  padding-right: 24px;
  color: #fc842d;
  background-color: #ffffff;
  border: 2px solid #fc842d;
  border-radius: 30px;
  transition: scale 250ms;

  &:focus,
  &:hover {
    scale: 1.1;
  }
`;

const RoundBtn = styled.button`
  cursor: pointer;
  width: 48px;
  height: 48px;
  color: #ffffff;
  background-color: #fc842d;
  border-radius: 50%;
  transition: 250ms;

  &:focus,
  &:hover {
    scale: 1.1;
  }
`;

export { PrimaryBtn, SecondaryBtn, RoundBtn };
