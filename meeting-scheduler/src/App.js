import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './modules/HomePage';
import InputForm from './modules/InputForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inputForm" element={<InputForm />} />
      </Routes>
    </Router>
  );
}

export default App;
