import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0;
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9b9faa;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #9b9faa;
  &.active {
    color: #212121;
  }
`;

export const SignInText = styled.div`
  margin-right: 16px;
`;
