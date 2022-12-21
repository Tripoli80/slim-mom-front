import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { Wrapper, UserName, Exit } from './UserInfo.styled';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const { user } = selectUser();

  return (
    <Wrapper>
      {user && <UserName>Nik {user.name}</UserName>}
      <Exit onClick={() => dispatch(logOut())}>Exit</Exit>
    </Wrapper>
  );
};
