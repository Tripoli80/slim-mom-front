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
  function isGetDiet () {
    if (diet === undefined || diet.length === 0) return false;
    return true;
  };
  function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);

  };

  return (
    <div>
      <SidebarTitle>{Translator('foodNotRecommended')}</SidebarTitle>
      {!isGetDiet() && (<SidebarText>{Translator('yourDietWill')}</SidebarText>)}
      {isGetDiet() && (
        <SidebarList>
          {diet.map((product) => (
            <SidebarItem key={nanoid()}>
              <SidebarText>{ucFirst(product._id[lengUse])}</SidebarText>
            </SidebarItem>
          ))}
        </SidebarList>)}

    </div>
  );
}
