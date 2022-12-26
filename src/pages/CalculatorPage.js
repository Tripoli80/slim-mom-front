import styled from '@emotion/styled';
import Sidebar from 'components/SideBar/Sidebar';

const CalcPageWrap = styled.div`
@media screen and (min-width: 1280px) {
  display: flex;
}
`
const H2 = styled.h2`
  font-size: 33px;
  text-align: center;
  margin: 200px 18px;
`
const CalculatorPage = () => {
  return (
    <CalcPageWrap>
      <H2>Тут буде форма розрахунку дієти</H2>
      <Sidebar />
    </CalcPageWrap>
  );
};

export default CalculatorPage;
