import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/hooks';
import { Wrapper, UserName, Exit } from './UserInfo.styled';
import { Translator } from 'components/language/translator';
export const UserInfo = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      {user ? <UserName>{user.name}</UserName> : <>{Translator('nik')}</>}
      <Exit onClick={() => dispatch(logOut())}>{Translator('exit')}</Exit>
    </Wrapper>
  );
};
