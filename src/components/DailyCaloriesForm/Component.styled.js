import styled from 'styled-components';
import Banan from './img/Layer-9.png';
import Vector from './img/Vector3.png';
import Lust from './img/Layer-41.png';
import Strawberry from './img/Strawberry-Big-PNG.png';
import FrameDeck from './img/Frame1.png';
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
export const Title = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  color: #212121;
  width: 100%;
  font-size: 18px;
  margin-bottom: 34px;
  @media (min-width: 768px) {
    width: 700px;
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 32px;
  }
  @media (min-width: 1264px) {
    width: 600px;
    margin-top: 150px;
  }
`;
export const Wrapper = styled.div`
  width: 240px;
  @media (min-width: 768px) {
    width: 600px;
    display: flex;
  }
`;
export const Section = styled.div`
  @media (min-width: 768px) {
    margin-right: 32px;
  }
`;

export const Image = styled.div`
  height: 100%;
  @media (min-width: 768px) {
    height: 1004px;

    background-image: url(${Lust}), url(${Strawberry}), url(${Banan}),
      url(${Vector});
    background-repeat: no-repeat;
    background-size: 531px 602px, 300px 300px, 740px 527px, 803px 750px;
    background-position: left 0 bottom 0, right 200px bottom 200px,
      right 0 bottom 0, right 0 bottom 0;
  }
  @media (min-width: 1264px) {
    height: 800px;
    background-image: url(${FrameDeck});
    background-size: 980px 820px;
    background-position: right 0 top 0;
  }
`;
