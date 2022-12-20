import {
  Menu,
  Link,
  MenuContent,
  LinkWrapper,
  Blur,
} from './BurgerMenu.styled';

export const BurgerMenu = () => {
  return (
    <Menu>
      <Blur>
        <MenuContent>
          <LinkWrapper>
            <Link to="/diary">Diary</Link>
          </LinkWrapper>
          <Link to="/calculator">Calculator</Link>
        </MenuContent>
      </Blur>
    </Menu>
  );
};
