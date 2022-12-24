import styled from '@emotion/styled';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/Component';
import { DiaryDateСalendar } from 'components/DiaryDateСalendar/Component';
import { DiaryProductList } from 'components/DiaryProductsList/Component';
import { useWindowWidth } from 'hooks/useWindowWidth';
import Sidebar from 'components/SideBar/Sidebar';

const DiaryPageWrap = styled.div`
@media screen and (min-width: 1280px) {
  display: flex;
}
`
const DiaryPage = () => {
  const windowWidth = useWindowWidth();
  return (
    <DiaryPageWrap>
      <div>
        <DiaryDateСalendar />
        {windowWidth >= 768 && <DiaryAddProductForm />}
        <DiaryProductList />
      </div>
      <Sidebar />
    </DiaryPageWrap>
  );
};

export default DiaryPage;
