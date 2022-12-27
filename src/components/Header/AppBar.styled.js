import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin: 0;
  padding-top: 20px;

  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #e0e0e0;

  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;

    padding-bottom: 20px;
  }

  @media (min-width: 1280px) {
    padding-top: 80px;
    border-bottom: none;
    align-items: flex-end;
    justify-content: flex-start;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #9b9faa;

  &.active {
    color: #212121;
  }
`;

export const BurgerMenuStyle = styled.div`
  cursor: pointer;
  color: #696969;
  position: absolute;
  right: 25px;
  top: 30px;

  @media (min-width: 768px) {
    position: inherit;
    display: flex;
    align-items: center;
    padding-left: 20px;
    // top: 26px;
    right: 84px;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;
