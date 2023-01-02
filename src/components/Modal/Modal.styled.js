import styled from 'styled-components';

import { MdClose } from 'react-icons/md';
import { FiCornerDownLeft } from 'react-icons/fi';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.12);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 672px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 767px) {
    top: 485px;
    border-radius: 0px;
    box-shadow: none;
  }
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 672px;
    height: 572px;
  }
`;

export const CloseBtn = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  padding: 0;
  z-index: 10;
  @media screen and (max-width: 767px) {
  }
`;

export const Title = styled.h2`
  display: block;
  margin-right: 20px;
  margin-left: 20px;
  padding-top: 20px;
  font-family: 'Verdana';
  font-weight: 700;
  color: #212121;
  font-size: 18px;
  line-height: 1.44;
  white-space: pre-line;

  @media screen and (min-width: 767px) {
    font-size: 26px;
    font-weight: 700;

    line-height: 31.6px;
    text-align: center;
    margin-right: 82px;
    margin-left: 82px;
    padding-top: 64px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  height: 42px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
  color: #fc842d;
  border: 2px solid #fc842d;
  border-radius: 30px;
  background-color: transparent;
  &:focus,
  &:hover {
    scale: 1.1;
  }
`;

export const BackArrow = styled(FiCornerDownLeft)`
  position: absolute;
  top: -30px;
  left: 20px;
  @media only screen and (min-width: 767px) {
    display: none;
    visibility: hidden;
  }
`;
