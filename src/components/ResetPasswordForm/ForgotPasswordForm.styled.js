import styled from 'styled-components';
import { Form } from 'formik';

export const ForgotPasswordFormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: center;
  margin-top: 40px;
`;

export const ForgotPasswordFormItemWrap = styled.div`
  width: 300px;
  margin-bottom: 40px;
`;
