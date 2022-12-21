import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/hooks';
import { Wrapper, UserName, Exit } from './UserInfo.styled';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      {user ? <UserName>{user.name}</UserName> : <>Nik</>}
      <Exit onClick={() => dispatch(logOut())}>Exit</Exit>
    </Wrapper>
  );
};
