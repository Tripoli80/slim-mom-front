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
    position: fixed;
    height: 100%;
    z-index: -1;
    top: 0;
    box-shadow: 40px 1px 55px #e2e2e2;
    //  right: 126px;
    // width: 527px;
    // margin-left: 68px;
  }
`;
export const Back = styled.div`
  // width: 100%;
  // // background-color: #ffffff;
  // position: absolute;
  // border: solid;
  // width: 100vh;
  // height: 100vh;
  // background-color: var(--sidebar-bg);
  // z-index: -1;
  // // padding-top: 100px;
  // height: 400px;
  // // top: 0px;

  // right: 0;
  // @media screen and (min-width: 1280px) {
  //   top: 0px;
  //   height: 100%;
  // }
`;
export const SidebarWrap = styled.div`
  width: 100vh;
  // height: 100vh;
  // margin: 0 -40px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
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
    width: 588px;
    // width: 517px;
    height: auto;
    padding: 292px 140px 166px 0;
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
