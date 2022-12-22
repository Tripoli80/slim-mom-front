import styled from "styled-components";
import { Form, Field } from 'formik';
import { NavLink } from "react-router-dom";

export const AuthFormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;

  /* @media screen and (min-width: 480px) {
    width: 280px;
  } */

  @media screen and (min-width: 768px) {
    width: 100%;
    padding-top: 160px;
    padding-left: 16px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 0;
  }
`;

export const AuthFormTitle = styled.h3`
  
  margin: 0 auto;
  margin-bottom: 60px;
  align-items: center;
  text-align: center;
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: calc(13 / 14);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #FC842D;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`

export const AuthFormLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: #9b9faa;
`;

export const AuthFormItem = styled(Field)`
  margin-bottom: 40px;
  padding-bottom: 2px;
  width: 100%;
  background-color: transparent;
  outline: none;
  font-family: 'Verdana';
  font-size: 14px;
  line-height: calc(17 / 14);
  letter-spacing: 0.04em;
  color: #000000;
  border: none;
  border-bottom: 1px solid #E0E0E0;

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

export const AuthBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 60px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 32px;
  }
`

export const AuthFormNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  min-width: 180px;
  height: 42px;
  padding-top: 8px;
  padding-left: 24px;
  padding-right: 24px; 
  text-align : center;
  color: #FC842D;
  background-color: #FFFFFF;
  border: 2px solid #FC842D;
  border-radius: 30px;

  &:focus, &:hover {
    scale: 1.1;
  }  
`

