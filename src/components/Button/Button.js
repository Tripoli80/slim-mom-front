import { PrimaryBtn, SecondaryBtn, RoundBtn } from 'components/Button/Button.styled';

const buttonsByStyleName = {
  primary: PrimaryBtn,
  secondary: SecondaryBtn,
  round: RoundBtn
};

const Button = ({
  children, onclick, styleName, ...attrs
}) => {

  const Tag = buttonsByStyleName[styleName];

  return (
    <Tag
      {...attrs}
      onclick={onclick}
    >{children}</Tag>
  );
};

export default Button;

