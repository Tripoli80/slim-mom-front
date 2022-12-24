import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from '../../redux/routes/PrivateRoute';
import { PublicRoute } from '../../redux/routes/RestrictedRoute';
import { Layout } from 'components/Layout';
import { useAuth } from '../../hooks/hooks';
import { refreshUser } from 'redux/auth/authOperations';
import Container from 'components/Container/Container';
import { Image } from 'components/App/App.stiled';
import { Translator } from 'components/language/translator';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';

const DiaryPage = lazy(() => import('../../pages/DiaryPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>{Translator('refreshingUser')}</b>
  ) : (
    <>
      <Image />
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DailyCaloriesForm />} />
            <Route
              path="/registration"
              element={
                <PublicRoute redirectTo="/diary" component={<RegisterPage />} />
              }
            />
            <Route
              path="/singin"
              element={
                <PublicRoute redirectTo="/diary" component={<LoginPage />} />
              }
            />
            <Route
              path="/diary"
              element={
                <PrivateRoute redirectTo="/singin" component={<DiaryPage />} />
              }
            />
          </Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
