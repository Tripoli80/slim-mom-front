import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink className={css.link} to="/">
        Logo
      </NavLink>
      <NavLink className={css.link} to="diary">
        Diary
      </NavLink>
      <NavLink className={css.link} to="calculator">
        Calculator
      </NavLink>
    </nav>
  );
};
