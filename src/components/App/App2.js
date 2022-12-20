import { Routes, Route } from "react-router-dom";
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { PrivateRoute } from '../../redux/routes/PrivateRoute';
import { RestrictedRoute } from '../../redux/routes/RestrictedRoute';
import { Layout } from "./Layout";
import { useAuth } from "hooks/useAuth";
import { refreshUser } from "redux/auth/operations";

const MainPage = lazy(() => import('../pages/MainPage'));
const DailyPage = lazy(() => import('../pages/DailyPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<MainPage />} />
        <Route path="/register" element={
          <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
        }
        />
        <Route path="/login" element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
        }
        />
        <Route path="/daily" element={
          <PrivateRoute redirectTo="/login" component={<DailyPage />} />
        }
        />
      </Route>
    </Routes>
  );
};