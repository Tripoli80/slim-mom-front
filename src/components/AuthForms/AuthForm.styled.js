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
    padding: 0 40px;
  }

  @media screen and (min-width: 1280px) {
    // padding-left: 0;
  }
`;

export const AuthFormTitle = styled.h3`
  margin: 0 auto;
  padding: 0 40px;
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
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 32px;
  }
`;

export const AuthFormNavLink = styled(NavLink)`
  transition: background-color 0.3s, box-shadow 0.3s;
  cursor: pointer;
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
  border: 2px solid #fc842d;
  color: #fc842d;

  text-decoration: none;
  font-size: 14px;
  height: 42px;
  font-weight: 500;
  min-width: 180px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  background-color: rgb(255 255 255 / 70%);
  background-repeat: no-repeat;

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
    scale: 1.1;
  }

  &:active {
    background-color: #eeeeee;
    scale: 1.1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
      0 0 0 3px #c8dafc;
  }
`;

export const GoogleLink = styled.a`
  transition: background-color 0.3s, box-shadow 0.3s;
  cursor: pointer;
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 30px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);

  text-decoration: none;
  color: #757575;
  font-size: 14px;
  height: 42px;
  font-weight: 500;
  border: 2px solid #fc842d;
  min-width: 205px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: rgb(255 255 255 / 70%);
  background-repeat: no-repeat;
  background-position: 12px 11px;

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
    scale: 1.1;
  }

  &:active {
    background-color: #eeeeee;
    scale: 1.1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
      0 0 0 3px #c8dafc;
  }
`;
