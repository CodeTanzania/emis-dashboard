import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies
import rootReducer from './rootReducer';

/**
 * Configure Redux store
 */
const configureStore = () => {
  const store = createStore(rootReducer, devToolsEnhancer());

  return store;
};


export default configureStore;
