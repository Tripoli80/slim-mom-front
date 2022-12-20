import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  align-items: center;
  margin: 0;
  padding: 20px 20px 16px 20px;
  border-bottom: 2px solid #e0e0e0;
  position: relative;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
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

export const BurgerMenu = styled.div`
  @media (min-width: 1280px) {
    display: none;
  }
`;
