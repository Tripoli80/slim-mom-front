import { Menu, Link, MenuContent, LinkWrapper } from './BurgerMenu.styled';
import { Translator } from 'components/language/translator';
export const BurgerMenu = ({ active, setActive }) => {
  return (
    <Menu className={active ? 'active' : ''} onClick={() => setActive(false)}>
      <MenuContent onClick={e => e.stopPropagation()}>
        <LinkWrapper>
          <Link to="/diary" onClick={() => setActive(false)}>
            {Translator('diary')}
          </Link>
        </LinkWrapper>
        <Link to="/calculator" onClick={() => setActive(false)}>
          {Translator('calculator')}
        </Link>
      </MenuContent>
    </Menu>
  );
};
