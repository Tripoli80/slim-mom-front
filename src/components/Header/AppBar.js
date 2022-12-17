import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserInfo } from '../UserInfo/UserInfo';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
      <AuthNav />
      <UserInfo />
    </header>
  );
};
