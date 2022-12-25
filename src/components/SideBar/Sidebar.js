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

export default function Sidebar() {
  const dispatch = useDispatch();
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
  
  const privateDiet = useSelector(selectDiet);
  console.log('diet', privateDiet);

  return (
    <SidebarSection>
      <SidebarWrap>
        <Summary dailyCalorie={privateDiet.dailyCalorie}/>
        <Diet diet={privateDiet.products} />
      </SidebarWrap>
    </SidebarSection>
  );
};

