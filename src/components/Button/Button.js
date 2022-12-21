import { PrimaryBtn } from 'components/Button/Button.styled';

// const buttonsByStyleName = {
//   primary: PrimaryBtn,
//   secondary: SecondaryBtn,
//   round: RoundBtn
// };

export const Button = ({
  children, onclick,  ...attrs
}) => {

  //const Tag = buttonsByStyleName[styleName];

  return (
    <PrimaryBtn
      {...attrs}
      onclick={onclick}
    >{children}</PrimaryBtn>
  );
};

