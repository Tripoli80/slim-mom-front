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

export default function Diet({ diet }) {
  const leng = useSelector(getLanguage);
  const lengUse = leng !== false ? leng.toLowerCase() : 'en';
  const categoriesArray = diet.length!==0 && diet.flatMap((product) => product._id);
  const categories = diet.length!==0 ? categoriesArray.map((el) => el[lengUse]) : [];

  function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  const isGetDiet = () => {
    if (diet || diet.length !== 0) return true;
    return false;
  }
  return (
    <div>
      <SidebarTitle>{Translator('foodNotRecommended')}</SidebarTitle>
      {!isGetDiet && (<SidebarText>{Translator('yourDietWill')}</SidebarText>)}
      {isGetDiet && (
        <SidebarList>
          {categories.map((category) => (
            <SidebarItem key={nanoid()}>
              <SidebarText>{ucFirst(category)}</SidebarText>
            </SidebarItem>
          ))}
        </SidebarList>)}
    </div>
  );
}
