import { useSelector } from 'react-redux';
import {  selectCategories } from '../../redux/products/selectors';
import Summary from './Summary';
import Diet from './Diet';
import {
  SidebarSection,
  SidebarWrap,
  Back
} from './Sidebar.styled';
// import privateDiet from './data/diet.json';

export default function Sidebar() {
  // const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(fetchPersonalDiet());
  // }, [dispatch]);

  // const diet = useSelector(selectPersonalDiet);
  // const privateDiet = diet.answer;
  const privateDiet = useSelector(selectCategories);

  return (
    <Back>
      <SidebarSection>
        <SidebarWrap>
          <Summary dailyCalorie={privateDiet ? privateDiet.dailyCalorie : 0}/>
          <Diet diet={privateDiet ? privateDiet.products : []} />
        </SidebarWrap>
      </SidebarSection>
    </Back>
  );
};



