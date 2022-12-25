// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Translator } from '../language/translator';
import { useSelector } from 'react-redux';
import { getLanguage } from '../../redux/selectors';
import {
  SidebarTitle,
  SidebarText,
  SidebarList,
  SidebarItem,
} from './Sidebar.styled';
// import dietData from './data/diet.json';

export default function Diet({ diet }) {
  const leng = useSelector(getLanguage);
  const lengUse = leng !== false ? leng.toLowerCase() : 'en';
  const categoriesArray = diet.length!==0 && diet.flatMap((product) => product._id);
  const categories = diet.length!==0 ? categoriesArray.map((el) => el[lengUse]) : [];
  console.log('categories', categories);
  // console.log('leng', leng, lengUse);
  return (
    <div>
      <SidebarTitle>{Translator('foodNotRecommended')}</SidebarTitle>
      {!categories.length
        ? (<SidebarText>{Translator('yourDietWill')}</SidebarText>)
        : (
          <SidebarList>
            {categories.map((category) => (
              <SidebarItem key={nanoid()}>
                <SidebarText>{category}</SidebarText>
              </SidebarItem>
            ))}
          </SidebarList>
        )}
    </div>
  );
}

// Diet.propTypes = {
//   diet: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.shape(
//         PropTypes.string,
//       ),
//     }),
//   ),
// };

// Diet.defaultProps = { diet: [] };
