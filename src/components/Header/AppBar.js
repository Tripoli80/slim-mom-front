import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserInfo } from '../UserInfo/UserInfo';
import { Header } from './AppBar.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { useAuth } from '../../hooks/hooks';
import { Logo } from '../Logo/Logo';
import { Link, BurgerMenuStyle } from './AppBar.styled';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const [menuActive, setMenuActive] = useState(false);

  return (
    <Header>
      <Link to="/">
        <Logo />
      </Link>
      {isLoggedIn ? (
        <>
          <Navigation />
          <UserInfo />
          <BurgerMenuStyle onClick={() => setMenuActive(!menuActive)}>
            {menuActive ? <GrClose size={24} /> : <GiHamburgerMenu size={24} />}
          </BurgerMenuStyle>
          <BurgerMenu active={menuActive} setActive={setMenuActive} />
        </>
      ) : (
        <AuthNav />
      )}
    </Header>
  );
};
