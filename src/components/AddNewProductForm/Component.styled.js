import styled from 'styled-components';
import { Form } from 'formik';
import Input from 'components/Input/Input';
import { Button } from 'components/Button/Button';

export const AddNewProductFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 18px;
  /* outline: 1px tomato dotted; */

  @media screen and (min-width: 480px) {
    padding: 40px 26px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 40px 38px;
  }
`;

export const Title = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  color: #212121;
  width: 100%;
  font-size: 26px;
  margin-bottom: 34px;
  padding-top: 32px;

  @media (min-width: 768px) {
    width: 700px;
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 32px;
    padding-top: 40px;
  }

  @media (min-width: 1264px) {
    width: 600px;
    padding-top: 25px;
  }
`;

export const AddNewProductInput = styled(Input)`
  margin: 16px 0 0 0;
  width: 100%;

  @media screen and (min-width: 768px) {
  }
`;

export const AddNewProductButton = styled(Button)`
  margin: 16px 0 0 0;

  @media screen and (min-width: 480px) {
    width: 180px;
    margin: 24px auto;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const ErrorMessage = styled.p`
  /* position: absolute; */
  color: rgb(200, 10, 65);
`;
