import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Wrapper, UserName, Exit } from './UserInfo.styled';

export const UserInfo = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <UserName>Nik</UserName>
      <Exit onClick={() => dispatch(logOut())}>Exit</Exit>
    </Wrapper>
  );
};
