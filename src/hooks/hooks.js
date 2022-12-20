import {
  getAuth,
  // getIsLoading,
  getNotifyMassage,
  getNotifyStatus,
  getReflashing,
  getSigIn,
  getUserName,
} from '../redux/selectors';
import { getIsLoading } from '../redux/auth/selectors';
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
  return useSelector(getUserName);
};
export const useIsLoading = () => {
  const isLoggedIn = useSelector(getIsLoading);
  return isLoggedIn;
};
