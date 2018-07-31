import React from 'react';
import ReactDOM from 'react-dom';
// import components
import App from './App';
// import styles
import './index.css';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

const render = (Component) => { ReactDOM.render(<Component />, document.getElementById('root')); };

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line  global-require
    render(NextApp);
  });
}
