import { PrimaryBtn } from 'components/Button/Button.styled';

export const Button = ({ children, onclick, ...attrs }) => {
  return (
    <PrimaryBtn {...attrs} onclick={onclick}>
      {children}
    </PrimaryBtn>
  );
};
