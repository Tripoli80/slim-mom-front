import { Menu, Link, MenuContent, LinkWrapper } from './BurgerMenu.styled';

export const BurgerMenu = ({ active, setActive }) => {
  return (
    <Menu className={active ? 'active' : ''} onClick={() => setActive(false)}>
      <MenuContent onClick={e => e.stopPropagation()}>
        <LinkWrapper>
          <Link to="/diary">Diary</Link>
        </LinkWrapper>
        <Link to="/calculator">Calculator</Link>
      </MenuContent>
    </Menu>
  );
};
