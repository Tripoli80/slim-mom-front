import React from 'react';
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
import { LoaderBox } from 'components/Loading/LoaderBox';
import { PrivateCalculatorPage } from 'pages/PrivateCalculatorPage';
import './App.css';

const DiaryPage = lazy(() => import('../../pages/DiaryPage'));
const CalculatorPage = lazy(() => import('../../pages/CalculatorPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ForgotPasswordPage = lazy(() => import('../../pages/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('../../pages/ResetPasswordPage'));
const GoogleRegistration = lazy(() => import('../../pages/GoogleRegistration'));
const DiaryAddProductPage = lazy(() =>
  import('../../pages/DiaryAddProductPage')
);
const NewProductPage = lazy(() => import('../../pages/NewProductPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

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
                <React.Suspense fallback={<LoaderBox />}>
                  <>
                    { isLoggedIn === true ? <PrivateCalculatorPage/> : <CalculatorPage/>}
                  </>
                </React.Suspense>
              }
            />
            <Route
              path="/registration"
              element={
                <PublicRoute
                  redirectTo="/diary"
                  component={
                    <React.Suspense fallback={<LoaderBox />}>
                      <>
                        <RegisterPage />
                        <Image />
                        <Image2 />
                      </>
                    </React.Suspense>
                  }
                />
              }
            />
            <Route
              path="/forgotpassword"
              element={
                <PublicRoute
                  redirectTo="/"
                  component={
                    <React.Suspense fallback={<LoaderBox />}>
                      <>
                        <ForgotPasswordPage />
                        <Image />
                        <Image2 />
                      </>
                    </React.Suspense>
                  }
                />
              }
            />
            <Route
              path="/reset/:token"
              element={
                <PublicRoute
                  redirectTo="/"
                  component={
                    <React.Suspense fallback={<LoaderBox />}>
                      <>
                        <ResetPasswordPage />
                        <Image />
                        <Image2 />
                      </>
                    </React.Suspense>
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
                    <React.Suspense fallback={<LoaderBox />}>
                      <>
                        <LoginPage />
                        <Image />
                        <Image2 />
                      </>
                    </React.Suspense>
                  }
                />
              }
            />
            <Route
              path="/diary/add-product"
              element={
                <React.Suspense fallback={<LoaderBox />}>
                  <PrivateRoute
                    redirectTo="/singin"
                    component={<DiaryAddProductPage />}
                  />
                </React.Suspense>
              }
            />
            <Route
              path="/diary/add-new-product"
              element={
                <React.Suspense fallback={<LoaderBox />}>
                  <PrivateRoute
                    redirectTo="/singin"
                    component={<NewProductPage />}
                  />
                </React.Suspense>
              }
            />
            <Route
              path="/google-registration"
              element={
                <PublicRoute
                  redirectTo="/diary"
                  component={
                    <React.Suspense fallback={<LoaderBox />}>
                      <GoogleRegistration />
                    </React.Suspense>
                  }
                />
              }
            />
            <Route
              path="/diary"
              element={
                <React.Suspense fallback={<LoaderBox />}>
                  <PrivateRoute
                    redirectTo="/singin"
                    component={<DiaryPage />}
                  />
                </React.Suspense>
              }
            />
            <Route
              path="/calculator"
              element={
                <React.Suspense fallback={<LoaderBox />}>
                  <PrivateRoute
                    redirectTo="/singin"
                    component={<PrivateCalculatorPage/>}
                  />
                </React.Suspense>
              }
            />
          </Route>
          <Route
            path="/diary"
            element={
              <React.Suspense fallback={<LoaderBox />}>
                <DiaryPage />
              </React.Suspense>
            }
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
