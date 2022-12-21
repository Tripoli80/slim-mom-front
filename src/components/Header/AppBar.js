import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserInfo } from '../UserInfo/UserInfo';
import { Header } from './AppBar.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuth } from '../../hooks/hooks';
import { Logo } from '../Logo/Logo';
import { Link, BurgerMenuStyle } from './AppBar.styled';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

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
          <BurgerMenuStyle onClick={() => setMenuactive(!menuActive)}>
            <GiHamburgerMenu size={24} />
            <BurgerMenu active={menuActive} setActive={setMenuactive} />
          </BurgerMenuStyle>
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
    //   <BurgerMenuStyle onClick={() => setMenuactive(!menuActive)}>
    //     <GiHamburgerMenu size={24} />
    //     <BurgerMenu active={menuActive} setActive={setMenuactive} />
    //   </BurgerMenuStyle>
    //   {isLoggedIn && <AuthNav />}
    // </Header>
  );
};
