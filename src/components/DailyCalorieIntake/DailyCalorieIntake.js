import {
  Callories,
  CalloriesText,
  List,
  ListItem,
  TitleList,
  WrapperCallories,
} from './DailyCalorieIntake.styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Translator } from 'components/language/translator';
import { useSelector } from 'react-redux';
import { getLanguage } from 'redux/services/languageSlice';
import defaultsBaseURL from '../../redux/auth/authOperations';
const DailyCalorieIntake = ({ data }) => {
  const len = useSelector(getLanguage);
  const [stats, setStats] = useState(null);
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      async function fetchMyAPI() {
        const response = await axios.post(defaultsBaseURL, data);

        setStats(response.data);
        setLoading(false);
      }

      fetchMyAPI();
    } catch (e) {
      console.log('====================================');
      console.log(e);
      console.log('====================================');
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      <div>
        <WrapperCallories>
          <Callories>
            {loading ? <Skeleton width={20} /> : stats.dailyCalorie}
            <CalloriesText>{Translator('kcal')}</CalloriesText>
          </Callories>
        </WrapperCallories>
        <div>
          <div>
            <TitleList>{Translator('foodsYouShouldNotEat')}</TitleList>
            <List>
              {loading ? (
                <Skeleton count={5} />
              ) : (
                stats.products.map(product => {
                  return <ListItem key={nanoid()}>{product._id[len.toLowerCase()]}</ListItem>;
                })
              )}
            </List>
          </div>
        </div>
      </div>
    </>
  );
};
export default DailyCalorieIntake;
