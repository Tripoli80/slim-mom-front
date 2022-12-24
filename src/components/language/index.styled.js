import styled from 'styled-components';
export const SELECTOR = styled.select`
  cursor: pointer;
  border: none;
  color: #9b9faa;
  font-size: 14px;
  margin-left: 14px;
  margin-right: 45px;
  border-left: 2px solid #e0e0e0;
  padding-left: 14px;
  :hover {
    color: #212121;
  }

  @media (min-width: 768px) {
    margin-right: 0;
  }

  @media (min-width: 1280px) {
    // margin-left: 45px;
  }
`;

