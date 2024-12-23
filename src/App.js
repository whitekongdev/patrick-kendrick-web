import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import HomePage from './pages/home/home';
import HireUsPage from './pages/hireus/hireuspage';

import './App.css';


const App = () => {
  return (
    <Router basename="/patrick-kendrick-web">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hire-us" element={<HireUsPage />} />
      </Routes>
    </Router>
  );
};
export default App;