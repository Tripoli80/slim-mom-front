import styled from 'styled-components';
export const SELECTOR = styled.select`
  cursor: pointer;
  border: none;
  color: #9b9faa;
  border-left: 2px solid #e0e0e0;
  background-color: transparent;
  -moz-appearance: none;
  outline: none;
  margin-left: 8px;
  padding-left: 8px;
  font-size: 11px;

  @media (min-width: 420px) {
    padding-left: 8px;
    font-size: 12px;
  }
  @media (min-width: 768px) {
    margin-left: 14px;
    padding-left: 14px;
    font-size: 14px;
  }

  @media (min-width: 1280px) {
  }

  :hover {
    color: #fc842d;
  }
  :focus {
    color: #9b9faa;
  }
`;
