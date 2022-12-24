import styled from '@emotion/styled';
import Sidebar from 'components/SideBar/Sidebar';

const CalcPageWrap = styled.div`
@media screen and (min-width: 1280px) {
  display: flex;
}
`
const H2 = styled.h2`
  font-size: 40px;
  text-align: center;
  margin: 200px 0;
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
