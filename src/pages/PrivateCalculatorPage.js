import React from 'react';
import styled from '@emotion/styled';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Sidebar from 'components/SideBar/Sidebar';

const CalcPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
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

//