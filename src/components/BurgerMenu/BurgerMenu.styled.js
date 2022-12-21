import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 82px;
  left: 0;
  transform: translateX(-100%);
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &.active {
    transform: translateX(0);
  }

  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @media (min-width: 768px) {
    top: 82px;
  }
`;

export const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  transition: all 0.4s;

  background-color: #264061;

  @media (min-width: 768px) {
    padding-top: 100px;
  }
`;

export const LinkWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #9b9faa;

  &.active {
    color: #ffffff;
  }

  :hover:not(.active),
  &:focus-visible:not(.active) {
    color: #212121;
  }
`;
