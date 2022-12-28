import styled from '@emotion/styled';

export const DivCtnterd = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  padding-top: 80px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    display: flex;

    align-items: center;
    margin-top: 53px;

    padding-top: 0;
    padding-left: 32px;
    padding-right: 0;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 60px;
    padding-left: 16px;
  }

  align-items: center;
`;

export const FieldProduct = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-right: 22px;
    width: 240px;
  }
`;

export const FieldWeight = styled.div`
  position: relative;
  width: 100%;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-right: 67px;
    width: 107px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 60px;
  }
`;
export const Label = styled.label`
  position: absolute;

  top: 50%;
  transform: translateY(-50%);

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 0.3);

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

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield; /* Firefox */
  }
`;

export const LabelWeight = styled(Label)`
  left: 0;
  @media screen and (min-width: 768px) {
    left: auto;
    right: 0;
  }
`;
export const LabelTitle = styled(Label)`
  left: 0;
`;

export const InputWeight = styled(Input)`
  @media screen and (min-width: 768px) {
    text-align: right;
  }
  text-align: left;
`;

export const Button = styled.button`
  margin-top: 0;

  padding: 0px;
  width: 48px;
  height: 48px;

  background-color: #fc842d;
  color: #ffffff;

  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.3);
  outline: none;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 0.3),
    color 250ms cubic-bezier(0.4, 0, 0.2, 0.3);

  cursor: pointer;

  :enabled:hover,
  :enabled:focus {
    color: #fc842d;
    background-color: #ffffff;
    border: 2px solid #fc842d;
    box-shadow: none;
  }
  :disabled {
    background-color: #fc842d50;
    box-shadow: none;
  }
  & svg {
    fill: currentColor;
  }
`;

export const FilteredList = styled.ul`
  z-index: 10;
  position: absolute;
  background-color: #ffffff;

  width: 100%;
  @media screen and (min-width: 768px) {
    width: 630px;
  }

  li {
    width: 100%;
  }
  button {
    padding: 8px;
    border: none;
    width: 100%;

    color: #deb887;
    background-color: transparent;
    text-align: left;
    cursor: pointer;
    outline: none;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  button:focus,
  button:hover {
    color: #fc842d;
  }
`;

export const ButtonAdd = styled(Button)`
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;
  width: 176px;
  height: 44px;
  border-radius: 22px;
`;
export const ButtonIcon = styled(Button)`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
