import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 32px;
  outline: 1px black dotted;
`;

export const Title = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  color: #212121;
  width: 100%;
  font-size: 18px;
  margin-bottom: 34px;
  padding-top: 32px;

  @media (min-width: 768px) {
    width: 700px;
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 32px;
    padding-top: 100px;
  }

  @media (min-width: 1264px) {
    width: 600px;
    padding-top: 25px;
  }
`;
