import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectPendingUserData,
} from '../redux/auth/authSelectors';



export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectPendingUserData);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
