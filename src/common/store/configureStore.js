import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import * as API from '../API';
import rootEpic from './rootEpic';
/* local dependencies */
import rootReducer from './rootReducer';

/* local constants */
const epicMiddleware = createEpicMiddleware({
  // see https://redux-observable.js.org/docs/recipes/InjectingDependenciesIntoEpics.html
  dependencies: { API },
});

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
      applyMiddleware(epicMiddleware, thunk.withExtraArgument({ API }))
    )
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
