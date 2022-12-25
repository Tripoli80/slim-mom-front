import styled from '@emotion/styled';
import leavesDesk1x from './sidebarBg/sidebar-leaves-desk-1x.png';
import leavesDesk2x from './sidebarBg/sidebar-leaves-desk-2x.png';
import leavesTab1x from './sidebarBg/sidebar-leaves-tab-1x.png';
import leavesTab2x from './sidebarBg/sidebar-leaves-tab-2x.png';

export const SidebarSection = styled.div`
  width: 100%;
  background-color: var(--sidebar-bg);
  @media screen and (min-width: 1280px) {
    width: 517px;
    position: absolute;
    // border: solid;
    height: 100%;
    z-index: -1;
    top: 0;
    right: 0;
    width: 550px;
  }
`;
export const SidebarWrap = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 768px) {
    width: 768px;
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
    height: auto;
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
    background-size: 517px auto;
    background-position: right 0 top 20px;
  }
`;
export const SidebarTitle = styled.p`
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: var(--primary-text-color);
`;
export const SidebarText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: var(--secondary-text-color);
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
