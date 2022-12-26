import styled from 'styled-components';
import { Form } from 'formik';

export const AddNewProductFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 0;
  outline: 1px tomato dotted;

  /* @media screen and (min-width: 480px) {
    width: 280px;
  } */

  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 14px 0;
    padding-left: 16px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 0;
  }
`;

export const ErrorMessage = styled.p`
  /* position: absolute; */
  color: rgb(200, 10, 65);
`;
