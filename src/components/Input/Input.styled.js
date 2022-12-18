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
`;
export const InputRadio = styled.input`
  margin-right: 8px;
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
