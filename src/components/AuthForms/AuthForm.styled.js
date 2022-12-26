import styled from 'styled-components';
import { Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';

export const AuthFormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;


  @media screen and (min-width: 768px) {
    width: 100%;
    padding-left: 16px;
    align-items: normal;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 0;
  }
`;

export const AuthFormTitle = styled.h3`
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 60px;
  align-items: center;
  text-align: center;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: calc(13 / 14);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fc842d;

  @media screen and (min-width: 768px) {
    margin-top: 160px;
    margin-left: 0;
    text-align: start;
  }
`;

export const AuthFormItemWrap = styled.div`
  width: 300px;
  position: relative;
  margin-bottom: 10px;
`;

export const AuthFormLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-family: 'Verdana';
  font-size: 14px;
  font-weight: 700;
  line-height: calc(17 / 14);
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

export const AuthFormItem = styled(Field)`
  display: inline-block;

  padding-bottom: 2px;
  width: 100%;
  height: 48px;
  background-color: transparent;
  outline: none;
  font-family: 'Verdana';
  font-size: 14px;
  line-height: calc(17 / 14);
  letter-spacing: 0.04em;
  color: #000000;
  border: none;
  border-bottom: 1px solid #e0e0e0;

  &:focus ~ label,
  &:valid ~ label {
    top: 0;
  }

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
`;

export const AuthFormNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  font-family: 'Verdana';
  min-width: 180px;
  height: 42px;
  padding-top: 8px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
  color: #fc842d;
  background-color: #ffffff;
  border: 2px solid #fc842d;
  border-radius: 30px;

  &:focus,
  &:hover {
    scale: 1.1;
  }
`;
