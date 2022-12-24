import { DiaryAddProductForm } from 'components/DiaryAddProductForm/Component';
import { DiaryDateСalendar } from 'components/DiaryDateСalendar/Component';
import { DiaryProductList } from 'components/DiaryProductsList/Component';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByDate } from 'redux/products/operations';
import { selectDate } from 'redux/products/selectors';

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
    <>
      <DiaryDateСalendar />
      {windowWidth >= 768 && <DiaryAddProductForm />}
      <DiaryProductList />
    </>
  );
};

export default DiaryPage;
