import styled from 'styled-components';
import { Form } from 'formik';
import { NavLink } from 'react-router-dom';

export const ForgotPasswordFormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: center;
  margin-top: 40px;
`;
export const LoaderWrapper = styled.div`
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

export const NotFoundToken= styled.h2`
  margin-bottom: 32px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 140%;
  color: #212121;
  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-bottom: 32px;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;
export const NavItem = styled(NavLink)`
  text-decoration: none;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
  &:hover {
    color: black;
  }
  &:focus {
    color: black;
  }
`;
