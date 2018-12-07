import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie9'; // For IE 9-11 support as CRA doesn't support IE by default
/* import components */
import App from './App';
/* import styles */
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('root')); // eslint-disable-line no-undef
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line  global-require
    render(NextApp);
  });
}
