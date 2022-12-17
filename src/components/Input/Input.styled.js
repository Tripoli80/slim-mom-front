import styled from 'styled-components';
export const Box = styled.label`
  position: relative;
  margin: 15px;
  display: inline-block;
  font-weight: 700;
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
`;

export const Label = styled.label`
  display: flex;
  color: #9b9faa;
`;
