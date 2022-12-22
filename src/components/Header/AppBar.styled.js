import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1100;
  width: 100%;
  align-items: center;
  margin: 0;
  border-bottom: 2px solid #e0e0e0;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 20px 32px 16px 32px;
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
  position: absolute;
  top: 30px;
  right: 20px;

  @media (min-width: 768px) {
    position: static;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;
