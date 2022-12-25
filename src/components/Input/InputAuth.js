import { Label, Box, InputValueField } from './Input.styled';

const InputAuth = props => {
  return (
    <>
      <Box>
        <InputValueField id={props.id} name={props.name} type={props.type} />
        <Label htmlFor={props.name}>{props.placeHolder}</Label>
      </Box>
    </>
  );
};
export default InputAuth;
