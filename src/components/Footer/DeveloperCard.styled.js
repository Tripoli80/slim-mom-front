import styled from '@emotion/styled';
import avatar from './img/ava.png';
export const CardContainer = styled.div`
  display: flex;
  width: 450px;
  padding: 15px;

  margin-top: 40px;
  flex-direction: column;
  align-items: center;
`;
export const CardPhoto = styled.div`
  margin: 0 auto;
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Photo = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 100px;
  background: ${props =>
    props.photo ? `url(${props.photo})` : `url(${avatar})`};
  background-size: 60px;
  background-repeat: no-repeat;
  margin: 6px;
`;

export const CardTitles = styled.span`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  margin: 6px;
  color: #212121;
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 100%;
`;
export const Circle = styled.a`
  height: 40px;
  width: 40px;
  border-radius: 100px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: #fc842d;
  :hover,
  :focus {
    background-color: #f7f7f7;
  }
`;
export const CirclesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
