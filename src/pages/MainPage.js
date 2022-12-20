import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loading/Loading';
import { lazy, useEffect, Suspense } from 'react';
import * as authOperations from '../redux/auth/authOperations';
import Header from '../components/Header/Component';
import { PublicRoute } from '../redux/routes/RestrictedRoute';
import { PrivateRoute } from '../redux/routes/PrivateRoute';
import { useNavigate } from 'react-router-dom';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';

// ПРИВ'ЯЖІТЬ свої сторінки!

// export const Home = lazy(() => import('./views/HomeView/HomeView'));
// export const SignIn = lazy(() => import('components/SignIn/SignIn'));
// export const Product = lazy(() => import('./components/Product'));
export const NotFound = lazy(() => import('../components/NotFound/NotFound'));
// export const SignUp = lazy(() => import('components/SingUp/SignUp'));

function MainPage() {
  const dispatch = useDispatch();
  const pendingUserData = useSelector(state => state.auth.pendingUserData);
  const currentPath = useSelector(state => state.auth.currentPath);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    currentPath && navigate(currentPath);
  }, [currentPath, dispatch, navigate]);

  return (
    <>
      <DailyCaloriesForm>
        {!pendingUserData && (
          <>
            <Header />
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route
                  path="/"
                  element={<PublicRoute>{/* <Home /> */}</PublicRoute>}
                />
                <Route
                  path="/register"
                  element={
                    <PublicRoute path={'/'} restricted>
                      {/* <SignUp /> */}
                    </PublicRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PublicRoute path={'/'} restricted>
                      {/* <SignIn /> */}
                    </PublicRoute>
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute path={'/'}>{/* <Product /> */}</PrivateRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </>
        )}
      </DailyCaloriesForm>
    </>
  );
}

export default MainPage;
