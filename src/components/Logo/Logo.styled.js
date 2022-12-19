import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0;
  flex-grow: 1;

  @media (min-width: 1280px) {
    margin-right: 20px;
  }
`;

export const Img = styled.img`
  width: 44px;
  height: 47px;

  @media (min-width: 1280px) {
    width: 66px;
    height: 71px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-size: 18px;

  @media (min-width: 768px) {
    margin-left: 10px;
    margin-bottom: 20px;
  }

  @media (min-width: 1280px) {
    margin-left: -15px;
    margin-bottom: 0;
  }
`;

export const TextMom = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: block;
    text-transform: capitalize;
    color: #fc842d;
    margin: 0;
  }
`;

export const TextSlim = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: block;
    text-transform: capitalize;
    color: #212121;
    margin: 0 6px 0 0;
  }
`;
