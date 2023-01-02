import { Field } from 'formik';
import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  margin: 26px 0 0 0;
  display: block;
  font-weight: 700;
  width: 100%;
`;
export const Label = styled.label`
  position: absolute;

  top: 50%;
  transform: translateY(-50%);

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  margin-left: 5px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  cursor: text;

  left: 0;
`;
export const InputValue = styled.input.attrs(props => ({}))`
  display: inline-block;
  height: 48px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #e0e0e0;
  padding-left: 8px;
  color: #212121;
  outline: none;
  background-color: rgb(255 255 255 / 70%);
  :hover,
  :focus {
    border-color: #fc842d;
  }

  &:focus ~ label,
  &:valid ~ label {
    top: 0px;
  }
`;
export const InputValueField = styled(Field).attrs(props => ({
  placeholder: ' ',
}))`
  display: inline-block;
  height: 48px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #e0e0e0;
  padding-left: 8px;
  color: #212121;
  outline: none;
  background-color: rgb(255 255 255 / 70%);
  :hover,
  :focus {
    border-color: #fc842d;
  }

  &:focus ~ label,
  &:valid ~ label,
  :not(:placeholder-shown) ~ label {
    border-color: green;
    top: 0px;
  }
`;

export const LabelRadio = styled.label`
  display: inline-flex;
  cursor: pointer;
`;
export const InputRadio = styled.input`
  margin-right: 8px;
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;

export const InputRadioStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  width: 20px;
  height: 20px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 50%;
  ${InputRadio}:checked + && {
    ::before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      background-color: #fc842d;
      border-radius: 50%;
    }
  }

  ${InputRadio}:focus + && {
    box-shadow: 0 0 0 1px #e0e0e0;
  }
`;

export const LabelRadioText = styled.span`
  display: inline-flex;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  ${InputRadio}:hover ~ && {
    color: #fc842d;
  }
  ${InputRadio}:checked ~ && {
    font-weight: 700;
    color: #fc842d;
  }
`;

export const WrapperRadio = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TitleRaioGroup = styled.span`
  display: block;
  color: #9b9faa;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;
export const BtnSub = styled.div`
  min-width: 100px;
  padding-top: 50px;
  @media (min-width: 768px) {
    margin-top: 60px;
    margin-left: 32px;
  }
  @media (min-width: 1260px) {
    margin-top: 60px;
    margin-left: 280px;
  }
`;
