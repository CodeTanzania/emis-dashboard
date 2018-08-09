import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './configureStore';
import Dashboard from './dashboard';
// import global styles
import './utils.css';

// local constants
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
