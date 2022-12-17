import {
  getAuth,
  getIsLoading,
  getNotifyMassage,
  getNotifyStatus,
  getReflashing,
  getSigIn,
  getUserName,
} from 'components/redux/selectors';
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
  return useSelector(getIsLoading);
};
