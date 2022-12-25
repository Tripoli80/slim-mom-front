// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchDiet } from '../../redux/services/privateDietSlice';
// import { selectToken, selectDiet } from '../../redux/selectors';
import Summary from './Summary';
import Diet from './Diet';
import {
  SidebarSection,
  SidebarWrap,
} from './Sidebar.styled';
import privateDiet from './data/diet.json';

const Sidebar = () => {
  // const [privateDiet, setPrivateDiet] = useState({});
  // const token = useSelector(selectToken);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   async function getDiet() {
  //     const bodyData = {blood: 4, height: 178, age: 26, cWeight: 83, dWeight: 70};
  //       try {
  //         const response = await axios.post(
  //           'https://creepy-tan-parrot.cyclic.app/api/diet/personal',
  //           bodyData,
  //           { headers: { Authorization: `Bearer ${token}` },},
  //         );
  //         setPrivateDiet(response.data);
  //       } catch (err) {console.log(err);}
  //   }
  //   getDiet();
  // }, [token]);
  
  // useEffect(() => {
  //   const bodyData = {blood: 4, height: 178, age: 26, cWeight: 83, dWeight: 70};
  //   dispatch(fetchDiet({bodyData: bodyData, token: {token}}));
  // }, [dispatch, token]);

  // useEffect(() => {
  //   const bodyData = {blood: 4, height: 178, age: 26, cWeight: 83, dWeight: 70};
  //   try {
  //     async function fetchDiet() {
  //       const response = await axios.post(
  //         'https://creepy-tan-parrot.cyclic.app/api/diet',
  //         bodyData
  //       );
  //       setPrivateDiet(response.data);
  //     }
  //     fetchDiet();
  //   } catch (e) {console.log(e);}
  // }, []);
  
  // const privateDiet = useSelector(selectDiet);
  // console.log('token', token);
  console.log('diet', privateDiet);

  return (
    <SidebarSection>
      <SidebarWrap>
        <Summary dailyCalorie={privateDiet.dailyCalorie}/>
        <Diet diet={privateDiet.products} />
      </SidebarWrap>
    </SidebarSection>
  );
}

export default Sidebar;