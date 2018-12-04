import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './common/store/configureStore';
import Dashboard from './dashboard';
import { getPlans } from './dashboard/Plans/actions';
/* import global styles */
import './utils.css';

/* local constants */
const store = configureStore();
store.dispatch(getPlans());

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
