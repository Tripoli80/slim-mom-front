import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDiet } from '../../redux/services/privateDietSlice';
// import { fetchDaily } from '../../redux/services/privateDailySlice';
import { selectToken, selectDiet } from '../../redux/selectors';
import { selectDate } from '../../redux/products/selectors';
import axios from 'axios';
import Summary from './Summary';
//
import Diet from './Diet';
import defaultsBaseURL from '../../redux/auth/authOperations';
import { SidebarSection, SidebarWrap, Back } from './Sidebar.styled';
// import dailyData from './data/dailyData.json';

export default function Sidebar() {
  // const [diet, setDiet] = useState({});
  const [eated, setEated] = useState([]);

  const currentDate = format(Date.now(), 'yyyy-MM-dd');
  const dateSelected = useSelector(selectDate);
  const date =
    dateSelected !== null
      ? dateSelected.split('.').reverse().join('-')
      : currentDate;
  // console.log('date', dateSelected, date);

  const token = useSelector(selectToken);
  // console.log('token', token);

  const dispatch = useDispatch();
  const privateDiet = useSelector(selectDiet);
  // const privateDaily = useSelector(selectDaily);

  useEffect(() => {
    const bodyData = {
      blood: 4,
      height: 178,
      age: 26,
      cWeight: 83,
      dWeight: 70,
    };
    dispatch(fetchDiet({ body: { bodyData }, token: { token } }));
  }, [dispatch, token]);

  // useEffect(() => {
  //   async function getDiet() {
  //     const bodyData = {blood: 4, height: 178, age: 26, cWeight: 83, dWeight: 70};
  //     try {
  //       const response = await axios.post(
  //         'https://creepy-tan-parrot.cyclic.app/api/diet/personal',
  //         bodyData,
  //         { headers: { Authorization: `Bearer ${token}` },},
  //       );
  //       setDiet(response.data);
  //     } catch (err) {console.log(err);}
  //   }
  //   getDiet();
  // }, [token]);

  useEffect(() => {
    async function getEated() {
      try {
        const response = await axios.get(
          `https://creepy-tan-parrot.cyclic.app/api/daily?date=${date}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setEated(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getEated();
  }, [token, date]);

  console.log('diet', privateDiet);
  console.log('daily', eated);

  return (
    <Back>
      <SidebarSection>
        <SidebarWrap>
          <Summary
            dailyCalorie={privateDiet.dailyCalorie}
            dailyData={eated}
            date={dateSelected}
          />
          <Diet diet={privateDiet.products} />
        </SidebarWrap>
      </SidebarSection>
    </Back>
  );
}
