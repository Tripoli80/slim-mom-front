import { DiaryAddProductForm } from 'components/DiaryAddProductForm/Component';
import { DiaryDateСalendar } from 'components/DiaryDateСalendar/Component';
import { DiaryProductList } from 'components/DiaryProductsList/Component';
import { useWindowWidth } from 'hooks/useWindowWidth';

const DiaryPage = () => {
  const windowWidth = useWindowWidth();
  return (
    <>
      <DiaryDateСalendar />
      {windowWidth >= 768 && <DiaryAddProductForm />}
      <DiaryProductList />
    </>
  );
};

export default DiaryPage;
