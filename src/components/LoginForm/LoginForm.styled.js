import styled from "styled-components";
import { Form, Field } from 'formik';

export const LoginFormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;

  @media screen and (min-width: 480px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    padding-top: 160px;
    padding-left: 16px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 0;
  }
`;

export const LoginFormTitle = styled.h3`
  
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

export const LoginFormLabel = styled.label`
  font-size: 14px;
`;

export const LoginFormItem = styled(Field)`
  margin-bottom: 40px;
  padding-bottom: 20px;
  width: 100%;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  line-height: calc(17 / 14);
  letter-spacing: 0.04em;
  color: #9B9FAA;
  border: none;
  border-bottom: 1px solid #E0E0E0;

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

