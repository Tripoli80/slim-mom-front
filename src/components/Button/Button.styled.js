import styled from "styled-components";

const PrimaryBtn = styled.button`
  cursor: pointer;
  min-width: 180px;
  height: 42px;
  padding-left: 24px;
  padding-right: 24px;
  color: #FFFFFF;
  background-color: #FC842D;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;

  &:focus, &:hover {
    scale: 1.1;
  }
`;

const SecondaryBtn = styled.button`
  cursor: pointer;
  min-width: 180px;
  height: 42px;
  padding-left: 24px;
  padding-right: 24px;  
  color: #FC842D;
  background-color: #FFFFFF;
  border: 2px solid #FC842D;
  border-radius: 30px;

  &:focus, &:hover {
    scale: 1.1;
  }
`;

const RoundBtn = styled.button`
  cursor: pointer;
  width: 48px;
  height: 48px;
  color: #FFFFFF;
  background-color: #FC842D;
  border-radius: 50%;

  &:focus, &:hover {
    scale: 1.1;
  }
`;

export {
  PrimaryBtn,
  SecondaryBtn,
  RoundBtn
}
;