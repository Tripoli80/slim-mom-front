import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Wrapper, UserName, Exit } from './UserInfo.styled';
import { useUserName } from '../../hooks/hooks';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const { user } = useUserName();

  return (
    <Wrapper>
      {user && <UserName>Nik {user.name}</UserName>}
      <Exit onClick={() => dispatch(logOut())}>Exit</Exit>
    </Wrapper>
  );
};
