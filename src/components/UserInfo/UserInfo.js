import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/hooks';
import { Wrapper, UserName, Exit, UserNameDefault } from './UserInfo.styled';
import { Translator } from 'components/language/translator';
import { Language } from 'components/language/index';
import { setDate, setEatedProducts } from 'redux/products/slice';
import { NavLink, useLocation } from 'react-router-dom';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const location = useLocation();
  return (
    <Wrapper>
      {location.state?.from && (
        <NavLink to={location.state?.from}>
          <svg width="15" height="9" fill="none">
            <path d="M14 1.5v3H2m0 0L5.5 1M2 4.5 5.5 8" strokeWidth="2" />
          </svg>
        </NavLink>
      )}

      {user.username !== null ? (
        <UserName>{user.username}</UserName>
      ) : (
        <UserNameDefault>{Translator('nik')}</UserNameDefault>
      )}
      <Exit
        onClick={() => {
          dispatch(logOut());
          dispatch(setEatedProducts());
          dispatch(setDate(null));
        }}
      >
        {Translator('exit')}
      </Exit>
      <Language />
    </Wrapper>
  );
};
