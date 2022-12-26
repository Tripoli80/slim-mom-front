import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from '../../redux/routes/PrivateRoute';
import { PublicRoute } from '../../redux/routes/RestrictedRoute';
import { Layout } from 'components/Layout';
import { useAuth } from '../../hooks/hooks';
import { refreshUser } from 'redux/auth/authOperations';
import { Translator } from 'components/language/translator';
import Container from 'components/Container/Container';
import { Image, Image2 } from 'components/App/App.stiled';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import './App.css';

const DiaryPage = lazy(() => import('../../pages/DiaryPage'));
// const CalculatorPage = lazy(() => import('../../pages/CalculatorPage'));
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
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <DailyCaloriesForm />
                  <Image />
                  <Image2 />
                </>
              }
            />
            <Route
              path="/registration"
              element={
                <PublicRoute
                  redirectTo="/diary"
                  component={
                    <>
                      <RegisterPage />
                      <Image />
                      <Image2 />
                    </>
                  }
                />
              }
            />
            <Route
              path="/singin"
              element={
                <PublicRoute
                  redirectTo="/diary"
                  component={
                    <>
                      <LoginPage />
                      <Image />
                      <Image2 />
                    </>
                  }
                />
              }
            />
            {/* <Route
              path="/diary"
              element={
                <PrivateRoute redirectTo="/singin" component={<DiaryPage />} />
              }
            /> */}
            {/* <Route
              path="/calculator"
              element={
                <PrivateRoute redirectTo="/singin" component={<CalculatorPage />} />
              }
            /> */}
          </Route>
          <Route path="/diary" element={<DiaryPage />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
