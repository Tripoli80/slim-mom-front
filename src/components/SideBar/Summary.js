import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectEtedProductsByDate } from '../../redux/products/selectors';
import { selectDate } from '../../redux/products/selectors';
import { format } from 'date-fns';
// import { Translator } from 'components/language/translator';
import {
  SidebarTitle,
  SidebarText,
  SidebarList,
  SidebarItem,
} from './Sidebar.styled';

export default function Summary({ dailyCalorie }) {
  const currentDate = format(Date.now(), 'yyyy-MM-dd');
  const dateSelected = useSelector(selectDate);
  const date = dateSelected !== null||'' ? dateSelected : currentDate;
  const summaryDate = date.split('-').reverse().join('/');

  const dailyData = useSelector(selectEtedProductsByDate);
  const calories = dailyData.length !==0 ? dailyData.flatMap((el) => el.intakeCalories) : [];
  // console.log('calories', calories);
  const consumed = dailyData.length !==0 ? Math.round(calories.reduce((a,b)=>a+b)) : 0;
  // console.log('consumed', consumed);
  const dailyRate = dailyCalorie;
  const left = dailyRate - consumed;
  const partOfNormal = dailyRate !== 0 ? Math.round((consumed * 100) / dailyRate) : 0;

  return (
    <div>
      <SidebarTitle>Summary for {summaryDate}</SidebarTitle>
      <SidebarList>
        <SidebarItem>
          <SidebarText>Left</SidebarText>
          <SidebarText>{`${left || '000'} kcal`}</SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SidebarText>Consumed</SidebarText>
          <SidebarText>{`${consumed || '000'} kcal`}</SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SidebarText>Daily rate</SidebarText>
          <SidebarText>{`${dailyRate || '000'} kcal`}</SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SidebarText>n% of normal</SidebarText>
          <SidebarText>{`${partOfNormal || '00'} %`}</SidebarText>
        </SidebarItem>
      </SidebarList>
    </div>
  );
}

Summary.propTypes = {
  dailyCalorie: PropTypes.number,
};
Summary.defaultProps = { dailyCalorie: 0 };
