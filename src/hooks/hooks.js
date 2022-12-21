import {
  getAuth,
  getNotifyMassage,
  getNotifyStatus,
  getReflashing,
  getSigIn,
} from '../redux/selectors';
import { getIsLoading, selectUser } from '../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  return useSelector(getSigIn);
};

export const useReflashing = () => {
  return useSelector(getReflashing);
};

export const useNotify = () => {
  return useSelector(getNotifyStatus);
};
export const useNotifyMassege = () => {
  return useSelector(getNotifyMassage);
};
export const useToken = () => {
  return useSelector(getAuth);
};
export const useUserName = () => {
  const user = useSelector(selectUser);
  return user;
};

export const useIsLoading = () => {
  const isLoggedIn = useSelector(getIsLoading);
  return isLoggedIn;
};
