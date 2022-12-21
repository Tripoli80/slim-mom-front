import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  border-top: 2px solid #e0e0e0;

  background-color: #eff1f3;
  justify-content: flex-end;
  height: 40px;

  @media (min-width: 768px) {
    position: static;
    background: #fff;
    margin-left: 300px;
    border: none;
  }

  @media (min-width: 1280px) {
    margin-left: 760px;
  } ;
`;

export const UserName = styled.p`
  margin: 0;
  padding-right: 15px;
  border-right: 2px solid #e0e0e0;
  color: #212121;
`;

export const Exit = styled.p`
  margin: 0;
  padding-left: 15px;
  padding-right: 15px;
  color: #9b9faa;
  cursor: pointer;
`;
