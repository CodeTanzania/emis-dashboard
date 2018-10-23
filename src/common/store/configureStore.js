import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
/* local dependencies */
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';
import * as API from '../API/api';

/* local constants */
const epicMiddleware = createEpicMiddleware();

/**
 * Configure Redux store
 * Enable redux dev tools
 * Setup redux observables as async library
 *
 * @function
 * @name configureStore
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(epicMiddleware, thunk.withExtraArgument(API))
    )
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
