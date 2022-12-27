import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: rgba(33, 33, 33, 0.12);
`;

export const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
