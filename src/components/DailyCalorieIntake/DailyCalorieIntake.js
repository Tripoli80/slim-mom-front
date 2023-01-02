import {
  Callories,
  CalloriesText,
  DivCenteredMobile,
  List,
  ListItem,
  TitleList,
  WrapperCallories,
} from './DailyCalorieIntake.styled';
import { useAuth } from '../../hooks/hooks';

import { nanoid } from 'nanoid';

import { Translator } from 'components/language/translator';
import { useSelector } from 'react-redux';
import { getLanguage } from 'redux/services/languageSlice';
import { Title } from 'components/Modal/Modal.styled';
import { Button } from 'components/Button/Button';
import { selectCategories } from 'redux/products/selectors';
import { Navigate } from 'react-router-dom';

const DailyCalorieIntake = ({ stats, onClose }) => {
  const categories = useSelector(selectCategories);
  const len = useSelector(getLanguage);
  const { isLoggedIn } = useAuth();

  function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  }

  return !categories ? (
    <Navigate to={'/'} />
  ) : (
    <>
      <Title>
        {Translator('yourRecommendedDaily')} {'\n'}
        {Translator('calorieIntakeIs')}
      </Title>
      <div>
        <WrapperCallories>
          <Callories>
            {categories.dailyCalorie}
            <CalloriesText> {Translator('kca')}</CalloriesText>
          </Callories>
        </WrapperCallories>

        <div>
          <TitleList>{Translator('foodsYouShouldNotEat')}</TitleList>
          <List>
            {categories.products.map(product => {
              return (
                <ListItem key={nanoid()}>
                  {ucFirst(product._id[len.toLowerCase()])}
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
      {isLoggedIn === true ? (
        ''
      ) : (
        <DivCenteredMobile>
          <Button type="button" onClick={onClose}>
            {Translator('startLosingweight')}
          </Button>
        </DivCenteredMobile>
      )}
    </>
  );
};
export default DailyCalorieIntake;