import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  border-top: 2px solid #e0e0e0;

  background-color: #eff1f3;
  justify-content: flex-end;
  height: 40px;

  @media (min-width: 768px) {
    position: static;
    background: #fff;
    margin-left: auto;
    border: none;
    background-color: inherit;
  }

  @media (min-width: 1280px) {
    margin-left: auto;
    margin-bottom: 4px;
    align-items: flex-end;
  } ;
`;

export const UserName = styled.p`
  margin: 0;
  margin-right: 15px;

  color: #212121;
`;

export const UserNameDefault = styled.p`
  margin: 0;
  margin-right: 15px;
  color: #212121;
`;

export const Exit = styled.p`
  margin: 0;
  padding-left: 15px;
  padding-right: 15px;
  color: #9b9faa;
  border-left: 2px solid #e0e0e0;
  cursor: pointer;

  &.active {
    color: #212121;
  }
  :hover:not(.active),
  &:focus-visible:not(.active) {
    color: #212121;
  }
`;
