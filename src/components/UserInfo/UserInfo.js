import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/hooks';
import { Wrapper, UserName, Exit, UserNameDefault } from './UserInfo.styled';
import { Translator } from 'components/language/translator';
import { Language } from 'components/language/index';
export const UserInfo = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      {user.username !== null ? (
        <UserName>{user.username}</UserName>
      ) : (
        <UserNameDefault>{Translator('nik')}</UserNameDefault>
      )}
      <Exit onClick={() => dispatch(logOut())}>{Translator('exit')}</Exit>
      <Language />
    </Wrapper>
  );
};
