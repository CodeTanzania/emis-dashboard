import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './dashboard';
// import global styles
import './utils.css';


function App() {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
