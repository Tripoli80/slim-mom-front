import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectEtedProductsByDate } from '../../redux/products/selectors';
import { selectDate } from '../../redux/products/selectors';
import { format } from 'date-fns';
import { Translator } from 'components/language/translator';
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

  const summaryFor = Translator('summaryFor');
  const leftTitl = Translator('left');
  const consumedTitle = Translator('consumed');
  const dailyRateTitle = Translator('dailyRate');
  const nOfNormal = Translator('nOfNormal');
  const kca = Translator('kca');

  return (
    <div>
      <SidebarTitle>{summaryFor} {summaryDate}</SidebarTitle>
      <SidebarList>
        <SidebarItem>
          <SidebarText>{leftTitl}</SidebarText>
          <SidebarText>{left || '000'} {kca}</SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SidebarText>{consumedTitle}</SidebarText>
          <SidebarText>{consumed || '000'} {kca}</SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SidebarText>{dailyRateTitle}</SidebarText>
          <SidebarText>{dailyRate || '000'} {kca}</SidebarText>
        </SidebarItem>
        <SidebarItem>
          <SidebarText>{nOfNormal}</SidebarText>
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
