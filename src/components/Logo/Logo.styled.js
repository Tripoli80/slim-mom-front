import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0;
`;

export const Img = styled.img`
  width: 44px;
  height: 47px;

  @media screen and (min-width: 1200px) {
    width: 66px;
    height: 71px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: -15px;
  padding-right: 20px;

  font-size: 18px;
`;

export const TextMom = styled.p`
  text-transform: capitalize;
  color: #fc842d;
  margin: 0;
`;

export const TextSlim = styled.p`
  text-transform: capitalize;
  color: #212121;
  margin: 0 6px 0 0;
`;
