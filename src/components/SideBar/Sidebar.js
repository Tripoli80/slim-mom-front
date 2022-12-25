import { useEffect } from 'react';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDiet } from '../../redux/services/privateDietSlice';
import { selectDiet } from '../../redux/selectors';
import Summary from './Summary';
import Diet from './Diet';
import {
  SidebarSection,
  SidebarWrap,
} from './Sidebar.styled';
// import privateDiet from './data/diet.json';

const Sidebar = () => {
  const dispatch = useDispatch();
  const privateDiet = useSelector(selectDiet);

  useEffect(() => {
    dispatch(
      fetchDiet({
        blood: 4,
        height: 178,
        age: 26,
        cWeight: 83,
        dWeight: 70,
      })
    );
  }, [dispatch]);

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