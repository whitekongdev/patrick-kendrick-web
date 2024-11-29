import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import HomePage from './pages/home/home';
import TeamPage from './pages/TeamPage/TeamPage';

import './App.css';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<HomePage />} />

        {/* Ruta para otra página */}
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
};
export default App;