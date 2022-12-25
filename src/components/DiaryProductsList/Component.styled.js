import styled from '@emotion/styled';
import { Label } from 'components/Input/Input.styled';

export const List = styled.ul`
  margin-top: 32px;
  padding: 0 12px 0 14px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    padding-left: 32px;
    padding-right: 40px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
  }

  width: fit-content;

  max-height: 312px;
  @media screen and (min-width: 1280px) {
    background: linear-gradient(#ffffff01, #ffffff20 80%, #ffffff 100%);
  }
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #264061;
  }
`;
export const ListItem = styled.li`
  display: flex;

  width: auto;

  align-items: center;
`;
