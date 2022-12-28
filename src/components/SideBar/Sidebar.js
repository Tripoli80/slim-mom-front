import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectCategories } from '../../redux/products/selectors';
import { fetchPersonalDiet } from '../../redux/products/operations';
import Summary from './Summary';
import Diet from './Diet';
import {
  SidebarSection,
  SidebarWrap,
  Back
} from './Sidebar.styled';

export default function Sidebar() {
  const dispatch = useDispatch();
  const privateDiet = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchPersonalDiet());
  }, [dispatch]);

  const isGetDiet = () => {
    if (privateDiet || Object.keys(privateDiet).length !== 0) return true;
    return false;
  }

  return (
    <Back>
      <SidebarSection>
        <SidebarWrap>
          {isGetDiet && <Summary dailyCalorie={privateDiet.dailyCalorie || 0}/>}
          {isGetDiet && <Diet diet={privateDiet.products || []} />}
        </SidebarWrap>
      </SidebarSection>
    </Back>
  );
};



