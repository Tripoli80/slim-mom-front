import styled from 'styled-components';
import Banan from './img/Layer-9.png';
import Vector from './img/Vector3.png';
import Lust from './img/Layer-41.png';
import Strawberry from './img/Strawberry-Big-PNG.png';
import FrameDeck from './img/Frame1.png';

export const Image = styled.div`
  height: 100%;

  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100%;

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
  @media (min-width: 2200px) {
    background-image: url(${FrameDeck}), url(${Strawberry}), url(${Lust});
    background-size: 980px 820px, 300px 300px, 531px 602px;
    background-position: right 0 top 0, right 1000px bottom 200px,
      left 0 bottom 0;
  }
`;