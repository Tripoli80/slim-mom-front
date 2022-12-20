import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectPendingUserData,
} from '../redux/auth/authSelectors';
// import {
//   getAuth,
//   getNotifyMassage,
//   getNotifyStatus,
//   getReflashing,
//   getUserName,
//   getIsLoading,
// } from '../redux/selectors';


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

// export const useReflashing = () => {
//   return useSelector(getReflashing);
// };

// export const useNotify = () => {
//   return useSelector(getNotifyStatus);
// };
// export const useNotifyMassege = () => {
//   return useSelector(getNotifyMassage);
// };
// export const useToken = () => {
//   return useSelector(getAuth);
// };
// export const useUserName = () => {
//   return useSelector(getUserName);
// };
// export const useIsLoading = () => {
//   return useSelector(getIsLoading);
// };
