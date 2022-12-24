import styled from '@emotion/styled';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/Component';
import { DiaryDateСalendar } from 'components/DiaryDateСalendar/Component';
import { DiaryProductList } from 'components/DiaryProductsList/Component';
import { useWindowWidth } from 'hooks/useWindowWidth';
import Sidebar from 'components/SideBar/Sidebar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByDate } from 'redux/products/operations';
import { selectDate } from 'redux/products/selectors';
// test AddNewProductForm
import AddNewProductBlock from 'components/AddNewProductBlock/Component';

const DiaryPageWrap = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;
const DiaryPage = () => {
  const windowWidth = useWindowWidth();
  const date = useSelector(selectDate);
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getProductsByDate(date));
  }, [date, dispatch]);

  return (
    <DiaryPageWrap>
      <AddNewProductBlock />
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
