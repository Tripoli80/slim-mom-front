import { lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
const MainPage = lazy(() => import('pages/MainPage'));
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainPage />} path="/"></Route>
      </Routes>
    </div>
  );
}

export default App;
