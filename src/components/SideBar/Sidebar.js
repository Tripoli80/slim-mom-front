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


  function isGetDiet () {
    if (privateDiet === undefined || Object.keys(privateDiet).length === 0) return false;
    return true;
  }


  // console.log('diet', privateDiet);
  // console.log(isGetDiet());
  return (
    <Back>
      <SidebarSection>
        <SidebarWrap>

          {!isGetDiet() && <Summary dailyCalorie={0}/>}
          {isGetDiet() && <Summary dailyCalorie={privateDiet.dailyCalorie}/>}
          {!isGetDiet() && <Diet diet={[]} />}
          {isGetDiet() && <Diet diet={privateDiet.products} />}

        </SidebarWrap>
      </SidebarSection>
    </Back>
  );
};