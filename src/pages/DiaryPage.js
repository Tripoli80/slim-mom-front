import styled from '@emotion/styled';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateСalendar } from 'components/DiaryDateСalendar/DiaryDateСalendar';
import { DiaryProductList } from 'components/DiaryProductsList/DiaryProductsList';
import { useWindowWidth } from 'hooks/useWindowWidth';
import Sidebar from 'components/SideBar/Sidebar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByDate } from 'redux/products/operations';
import { selectDate } from 'redux/products/selectors';
import { DiaryAddProductMobile } from 'components/DiaryAddProductForm/DiaryAddProductMobile';
import AddNewProductBlock from 'components/AddNewProductBlock/AddNewProductBlock';
import { useAuth } from '../hooks/hooks';

const DiaryPageWrap = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: solid;

  @media screen and (min-width: 1280px) {
    display: flex;
    width: 714px;
    padding: 0 38px;
    flex-direction: row;
  }
`;
const DiaryPage = () => {
  const windowWidth = useWindowWidth();
  const date = useSelector(selectDate);
  const dispatch = useDispatch();
  const { user } = useAuth();

  const getFromLocalStorage = JSON.parse(localStorage.getItem('persist:auth'));
  const { isLoading } = useSelector(store => store.products);
  useEffect(() => {
    if (getFromLocalStorage !== null && isLoading)
      dispatch(getProductsByDate(date));
  }, [date, dispatch, user, getFromLocalStorage, isLoading]);

  //не правильно написаний useEffect
  // useEffect(() => {
  //   dispatch(getProductsByDate(date));
  // }, [date, dispatch]);

  return (
    <DiaryPageWrap>
      <div>
        <DiaryDateСalendar />
        {windowWidth >= 768 && <DiaryAddProductForm />}
        <DiaryProductList />
        {windowWidth < 768 && <DiaryAddProductMobile />}
        <AddNewProductBlock />
      </div>
      <Sidebar />
    </DiaryPageWrap>
  );
};

export default DiaryPage;
