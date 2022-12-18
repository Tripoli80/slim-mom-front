import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  display: flex;
  align-items: flex-end;

  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #9b9faa;

  &.active {
    color: #212121;
  }
`;

export const DiaryLink = styled.div`
  padding-left: 20px;
  margin-right: 16px;
  border-left: 2px solid #e0e0e0;
`;
