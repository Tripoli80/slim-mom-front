import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  SidebarWrap,
  SidebarTitle,
  SidebarText,
  SidebarList,
  SidebarItem,
} from './Sidebar.styled';
import { Translator } from 'components/language/translator';
export default function Sidebar({ date, summary, diet }) {
  const currentDate = format(Date.now(), 'dd/MM/yyyy');
  return (
    <SidebarWrap>
      <div>
        <SidebarTitle>
          {date ? `Summary for ${date}` : `Summary for ${currentDate}`}
        </SidebarTitle>
        <SidebarList>
          <SidebarItem>
            <SidebarText>{Translator('left')}</SidebarText>
            <SidebarText>{`${summary.left || '000'} kcal`}</SidebarText>
          </SidebarItem>
          <SidebarItem>
            <SidebarText>{Translator('consumed')}</SidebarText>
            <SidebarText>{`${summary.consumed || '000'} kcal`}</SidebarText>
          </SidebarItem>
          <SidebarItem>
            <SidebarText>{Translator('dailyRate')}</SidebarText>
            <SidebarText>{`${summary.dailyRate || '000'} kcal`}</SidebarText>
          </SidebarItem>
          <SidebarItem>
            <SidebarText>{Translator('nOfNormal')}</SidebarText>
            <SidebarText>{`${summary.partOfNormal || '00'} %`}</SidebarText>
          </SidebarItem>
        </SidebarList>
      </div>
      <div>
        <SidebarTitle>{Translator('foodNotRecommended')}</SidebarTitle>
        {!diet.length ? (
          <SidebarText>{Translator('yourDietWill')}</SidebarText>
        ) : (
          diet.map(({ id, product }) => (
            <SidebarList>
              <li key={id}>
                <SidebarText>{product}</SidebarText>
              </li>
            </SidebarList>
          ))
        )}
      </div>
    </SidebarWrap>
  );
}

Sidebar.propTypes = {
  date: PropTypes.string,
  summary: PropTypes.shape({
    left: PropTypes.number,
    consumed: PropTypes.number,
    dailyRate: PropTypes.number,
    partOfNormal: PropTypes.number,
  }),
  diet: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      product: PropTypes.string,
    }),
  ),
};

Sidebar.defaultProps = { date: '', summary: {}, diet: [] };