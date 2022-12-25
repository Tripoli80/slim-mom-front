// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchDiet } from '../../redux/services/privateDietSlice';
// import { selectDiet, selectBodyData } from '../../redux/selectors';
import Summary from './Summary';
import Diet from './Diet';
import {
  SidebarSection,
  SidebarWrap,
  Back
} from './Sidebar.styled';
import privateDiet from './data/diet.json';

export default function Sidebar() {
  // const dispatch = useDispatch();
  // const privateDiet = useSelector(selectDiet);
  // const bodyData = useSelector(selectBodyData);
  // // const bodyData = {blood: 4, height: 178, age: 26, cWeight: 83, dWeight: 70};
  // useEffect(() => {
  //   dispatch(fetchDiet(bodyData));
  // }, [dispatch, bodyData]);

  // console.log('diet', privateDiet);

  return (
    <Back>
      <SidebarSection>
        <SidebarWrap>
          <Summary dailyCalorie={privateDiet.dailyCalorie || 0}/>
          <Diet diet={privateDiet.products || []} />
        </SidebarWrap>
      </SidebarSection>
    </Back>
  );
};

