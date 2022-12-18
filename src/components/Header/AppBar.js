import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserInfo } from '../UserInfo/UserInfo';
import { Header } from './AppBar.styled';
import { GiHamburgerMenu } from 'react-icons/gi';

export const AppBar = () => {
  return (
    <Header>
      <Navigation />
      <AuthNav />
      <UserInfo />
      <GiHamburgerMenu />
    </Header>
  );
};
