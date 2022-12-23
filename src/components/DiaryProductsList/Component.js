import { DiaryProductListItem } from 'components/DiaryProductsListItem/Component';
import { useSelector } from 'react-redux';
import { selectFilteredProducts } from 'redux/products/selectors';
import { List, ListItem } from './Component.styled';

export const DiaryProductList = () => {
  return (
    <List>
      {useSelector(selectFilteredProducts).map(
        ({ id, title, weight, calories }) => (
          <ListItem key={id}>
            <DiaryProductListItem
              id={id}
              title={title}
              weight={weight}
              calories={calories}
            />
          </ListItem>
        )
      )}
    </List>
  );
};
