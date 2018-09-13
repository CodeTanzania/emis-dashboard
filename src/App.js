import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux/configureStore';
import Dashboard from './dashboard';
/* import global styles */
import './utils.css';

/* local constants */
const store = configureStore();

/**
 * Render the React application
 *
 * @function
 * @name App
 *
 * @version 0.1.0
 * @since 0.1.0
 */
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
