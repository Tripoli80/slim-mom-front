import { lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('pages/MainPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Diary" element={<DiaryPage />} />
      </Routes>
    </div>
  );
}

export default App;
