import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserInfo } from '../UserInfo/UserInfo';
import { Header } from './AppBar.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuth } from '../../hooks/hooks';
import { Logo } from '../Logo/Logo';
import { Link, BurgerMenu } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Link to="/">
        <Logo />
      </Link>
      {isLoggedIn && (
        <>
          <Navigation />
          <UserInfo />
          <BurgerMenu>
            <GiHamburgerMenu />
          </BurgerMenu>
        </>
      )}
      <AuthNav />
    </Header>

    // <Header>
    //   <Link to="/">
    //     <Logo />
    //   </Link>
    //   <Navigation />
    //   <UserInfo />
    //   <BurgerMenu>
    //     <GiHamburgerMenu />
    //   </BurgerMenu>
    //   {isLoggedIn && <AuthNav />}
    // </Header>
  );
};
