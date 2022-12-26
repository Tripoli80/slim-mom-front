import {
  Callories,
  CalloriesText,
  List,
  ListItem,
  TitleList,
  WrapperCallories,
} from './DailyCalorieIntake.styled';

import { nanoid } from 'nanoid';

import { Translator } from 'components/language/translator';
import { useSelector } from 'react-redux';
import { getLanguage } from 'redux/services/languageSlice';


const DailyCalorieIntake = ({ stats }) => {
  const len = useSelector(getLanguage);
  function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  }
  return (
    <>
      <>
        <div>
          <WrapperCallories>
            <Callories>
              {stats.dailyCalorie}
              <CalloriesText> {Translator('kca')}</CalloriesText>
            </Callories>
          </WrapperCallories>
          <div>
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
        </div>
      </>
    </>
  );
};
export default DailyCalorieIntake;
