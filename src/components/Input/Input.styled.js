import styled from 'styled-components';
export const Box = styled.div`
  position: relative;
  margin: 0 0 32px 0;
  display: block;
  font-weight: 700;
  width: 100%;
`;
export const InputValue = styled.input.attrs(props => ({
  type: props.type || 'text',
  placeholder: ' ',
}))`
  border: none;
  border-bottom: 1px solid #9b9faa;
  font: inherit;
  color: #9b9faa;
  background-color: transparent;
  outline: none;
  width: 100%;
`;
export const Label = styled.label`
  display: flex;
  color: #9b9faa;
`;
export const LabelRadio = styled.label`
  display: inline-flex;
  cursor: pointer;
`;
export const InputRadio = styled.input`
  margin-right: 8px;
  /* hidden */
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; */
`;

export const InputRadioStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  width: 20px;
  height: 20px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
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
`;
export const BtnSub = styled.button`
  width: 100px;
  margin: 0 auto;
  @media (min-width: 768px) {
    margin-top: 60px;
    margin-left: 32px;
  }
`;
