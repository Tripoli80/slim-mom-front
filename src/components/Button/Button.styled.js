import styled from "styled-components";

const PrimaryBtn = styled.button`
  cursor: pointer;
  min-width: 180px;
  height: 42px;
  padding-left: 24px;
  padding-right: 24px;
  color: #ffffff;
  border: none;
  background-color: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  /* transition: scale 250ms; */

  &:focus,
  &:hover {
    scale: 1.1;
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
  transition:  250ms;

  &:focus,
  &:hover {
    scale: 1.1;
  }
`;

export {
  PrimaryBtn,
  SecondaryBtn,
  RoundBtn
}
;