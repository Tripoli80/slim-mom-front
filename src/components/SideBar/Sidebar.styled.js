import styled from '@emotion/styled';
import leavesDesk1x from './sidebarBg/sidebar-leaves-desk-1x.png';
import leavesDesk2x from './sidebarBg/sidebar-leaves-desk-2x.png';
import leavesTab1x from './sidebarBg/sidebar-leaves-tab-1x.png';
import leavesTab2x from './sidebarBg/sidebar-leaves-tab-2x.png';

export const SidebarWrap = styled.div`
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: #F0F1F3;
  @media screen and (min-width: 768px) {
    padding: 80px 32px;
    flex-direction: row;
    gap: 96px;
    background-image: url(${leavesTab1x});
    @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
      background-image: url(${leavesTab2x});
    }
    background-repeat: no-repeat;
    background-size: 370px 350px;
    background-position: right 0 bottom 0
  }
  @media screen and (min-width: 1280px) {
    width: 517px;
    min-height: 850px;
    padding: 292px 16px 166px 106px;
    flex-direction: column;
    gap: 60px;
    background-image: url(${leavesDesk1x});
    @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
      background-image: url(${leavesDesk2x});
    }
    background-repeat: no-repeat;
    background-size: 517px 850px;
    background-position: right 0 top 20px;
  }
`;
export const SidebarTitle = styled.p`
  margin-bottom: 20px;
  font-family: Verdana, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #212121;
`;
export const SidebarText = styled.p`
  font-family: Verdana, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #9B9FAA;
`;
export const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 270px;
`;
export const SidebarItem = styled.li`
  display: flex;
  justify-content: space-between;
`;