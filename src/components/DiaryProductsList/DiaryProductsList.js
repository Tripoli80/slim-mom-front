import { DiaryProductListItem } from 'components/DiaryProductsListItem/DiaryProductsListItem';

import { useSelector } from 'react-redux';
import { Translator } from 'components/language/translator';
import {
  selectEtedProductsByDate,
  selectIsLoading,
} from 'redux/products/selectors';
import { List, ListItem } from './DiaryProductsList.styled';
import { getLanguage } from 'redux/selectors';
import { LoaderBox } from 'components/Loading/LoaderBox';

export const DiaryProductList = () => {
  const products = useSelector(selectEtedProductsByDate);
  const timeToEat = Translator('timeToEat');
  const lang = useSelector(getLanguage).toLowerCase();
  const itemsOfEated =
    products?.length > 0 ? (
      products.map(({ _id, product, weight, intakeCalories }) => (
        <ListItem key={_id}>
          <DiaryProductListItem
            id={_id}
            title={product.title[lang]}
            weight={weight}
            calories={intakeCalories}
          />
        </ListItem>
      ))
    ) : (
      <h3>{timeToEat}</h3>
    );
  return (
    <>
      {useSelector(selectIsLoading) && <LoaderBox />}
      <List>{itemsOfEated}</List>
    </>
  );
};
