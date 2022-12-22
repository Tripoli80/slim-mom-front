import { DiaryProductListItem } from 'components/DiaryProductsListItem/Component';
import { useSelector } from 'react-redux';
import { selectProducts } from 'redux/products/selectors';
import { List, ListItem } from './Component.styled';

export const DiaryProductList = () => {
  return (
    <List>
      {useSelector(selectProducts).map(({ id, title, weight, calories }) => (
        <ListItem key={id}>
          <DiaryProductListItem
            id={id}
            title={title}
            weight={weight}
            calories={calories}
          />
        </ListItem>
      ))}
    </List>
  );
};
