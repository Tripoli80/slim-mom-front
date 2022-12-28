import React from 'react';
import styled from '@emotion/styled';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Sidebar from 'components/SideBar/Sidebar';

const CalcPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    width: 714px;
    flex-direction: row;
    justify-content: space-between;
  }
`
export const PrivateCalculatorPage = () => {
  return (
    <CalcPageWrap>
      <DailyCaloriesForm />
      <Sidebar/>
    </CalcPageWrap>
  );
};
