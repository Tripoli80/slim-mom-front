import styled from 'styled-components';

import Banan from '../App/img/Layer-9.png';
import Vector from '../App/img/Vector3.png';
import Lust from '../App/img/Layer-41.png';
import Strawberry from '../App/img/Strawberry-Big-PNG.png';
import FrameDeck from '../App/img/Frame1.png';
import FrameDeck2 from '../App/img/Frame2.png';

export const Image = styled.div`
  height: 100%;

  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
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
    background-image: url(${FrameDeck});
    background-size: 980px 520px;
    background-position: right 0 top 0;
  }
  @media (min-width: 2200px) {
    background-image: url(${FrameDeck}), url(${Lust}), url(${Strawberry});
    background-size: 980px 520px, 531px 602px, 300px 300px;
    background-position: right 0 top 0, left 0 top 0, right 40% top 50%;
  }
`;
export const Image2 = styled.div`
  width: 100%;
  height: 778px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: -2;
  background-repeat: no-repeat;

  @media (min-width: 1264px) {
    background-image: url(${FrameDeck2});
    background-size: 720px 820px;
    background-position: right 0 bottom 0;
  }
`;

