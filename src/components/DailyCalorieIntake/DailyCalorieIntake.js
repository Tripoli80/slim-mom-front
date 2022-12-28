import {
  Callories,
  CalloriesText,
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

const DailyCalorieIntake = ({ stats, onClose }) => {
  const len = useSelector(getLanguage);
  const { isLoggedIn } = useAuth();

  function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  }
  return (
    <>
      <Title>
        {Translator('yourRecommendedDaily')} {'\n'}
        {Translator('calorieIntakeIs')}
      </Title>
      <div>
        <WrapperCallories>
          <Callories>
            {stats.dailyCalorie}
            <CalloriesText> {Translator('kca')}</CalloriesText>
          </Callories>
        </WrapperCallories>

        <div>
          <TitleList>{Translator('foodsYouShouldNotEat')}</TitleList>
          <List>
            {stats.products.map(product => {
              return (
                <ListItem key={nanoid()}>
                  {ucFirst(product._id[len.toLowerCase()])}
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
      {isLoggedIn === true ? '' :
        <Button type="button" onClick={onClose}>
        {Translator('startLosingweight')}
      </Button>}
    </>
  );
};
export default DailyCalorieIntake;

/*
      <Button type="button" onClick={onClose}>
        {Translator('startLosingweight')}
      </Button>
*/