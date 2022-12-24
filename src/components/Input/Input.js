import { Label, InputValue, Box } from './Input.styled';

const Input = props => {
  return (
    <>
      <Box>
        <InputValue {...props} />
        <Label htmlFor={props.name}>{props.placeHolder}</Label>
      </Box>
    </>
  );
};
export default Input;
