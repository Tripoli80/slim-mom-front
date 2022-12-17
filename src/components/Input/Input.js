import { Label, InputValue, Box } from './Input.styled';

const Input = props => {
  return (
    <>
      <Box>
        <Label>{props.placeHolder}</Label>
        <InputValue {...props} />
      </Box>
    </>
  );
};
export default Input;
