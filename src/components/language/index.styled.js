import styled from 'styled-components';
export const SELECTOR = styled.select`
  cursor: pointer;
  border: none;
  color: #9b9faa;
  font-size: 12px;
  margin-left: 8px;
  border-left: 2px solid #e0e0e0;
  padding-left: 8px;
  margin-right: 21px;
  background-color: transparent;
  -moz-appearance: none;
  outline: none;

  :hover {
    color: #fc842d;
    border-left: 2px solid #e0e0e0;
    font-size: 16px;
  }

  @media (min-width: 768px) {
    margin-left: 14px;
    padding-left: 14px;
    font-size: 14px;
    margin-right: 58px;
  }

  @media (min-width: 1280px) {
    margin-right: 24px;
  }
`;
