import { lazy } from 'react';
import './App.css';

import { AppBar } from '../Header/AppBar';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('pages/MainPage'));

// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));

function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route element={<MainPage />} path="/">
          {/* <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
