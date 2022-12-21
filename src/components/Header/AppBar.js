import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserInfo } from '../UserInfo/UserInfo';
import { Header } from './AppBar.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Language } from 'components/language/index';

export const AppBar = () => {
  return (
    <Header>
      <Navigation />
      <AuthNav />
      <UserInfo />
      <GiHamburgerMenu />
      <Language />
    </Header>
  );
};
