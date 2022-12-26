import { DiaryProductListItem } from 'components/DiaryProductsListItem/Component';

import { useSelector } from 'react-redux';
import { Translator } from 'components/language/translator';
import { selectEtedProductsByDate } from 'redux/products/selectors';
import { List, ListItem } from './Component.styled';
import { getLanguage } from 'redux/selectors';

export const DiaryProductList = () => {
  const products = useSelector(selectEtedProductsByDate);
  const timeToEat = Translator('timeToEat');
  const lang = useSelector(getLanguage).toLowerCase();
  return (
    <List>
      {products?.length > 0 ? (
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
      )}
    </List>
  );
};
