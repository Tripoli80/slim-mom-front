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
  margin-left: 20px;
  display: none;

  flex-wrap: wrap;

  @media (min-width: 1280px) {
    display: flex;
    margin-bottom: 4px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #9b9faa;

  &.active {
    color: #212121;
  }

  :hover:not(.active),
  &:focus-visible:not(.active) {
    color: #fc842d;
  }
`;

export const DiaryLink = styled.div`
  padding-left: 20px;
  margin-right: 16px;

  @media (min-width: 1280px) {
    border-left: 2px solid #e0e0e0;
  }
`;
