import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;

  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 53px;
    padding-left: 32px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 60px;
    padding-left: 16px;
  }

  align-items: center;
`;

export const FieldProduct = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    margin-right: 22px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 48px;
  }
  width: 240px;
`;

export const FieldWeight = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    margin-right: 67px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 60px;
  }

  width: 107px;
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
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

export const Input = styled.input`
  display: inline-block;
  height: 48px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #e0e0e0;

  color: #212121;
  outline: none;

  :hover,
  :focus {
    border-color: #fc842d;
  }

  &:focus ~ label,
  &:valid ~ label {
    top: 0px;
  }
`;

export const LabelR = styled(Label)`
  right: 0;
`;
export const LabelL = styled(Label)`
  left: 0;
`;

export const InputR = styled(Input)`
  text-align: right;
`;

export const Button = styled.button`
  padding: 0px;
  width: 48px;
  height: 48px;

  background-color: #fc842d;
  color: #ffffff;

  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  outline: none;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover,
  :focus {
    color: #fc842d;
    background-color: #ffffff;
    border: 2px solid #fc842d;
    box-shadow: none;
  }

  & svg {
    fill: currentColor;
  }
`;

export const FilteredList = styled.ul`
  z-index: 10;
  position: absolute;
  background-color: #f0f1f3;
  width: max-content;

  li {
    width: 100%;
    border-bottom: 1px solid #264061;
    border-top: 1px solid #e0e0e0;
  }
  button {
    padding: 4px;
    border: none;
    width: 100%;
    font-size: 14px;
    color: #264061;
    background-color: #f0f1f3;
    cursor: pointer;
    outline: none;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  button:focus,
  button:hover {
    color: #fc842d;
  }
`;
