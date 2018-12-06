import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
/* local dependencies */
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';
import * as API from '../API';

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
    // please read https://medium.com/@yeojz/redux-thunk-skipping-mocks-using-withextraargument-513d38d38554
    // to understand why we use redux thunk with arguments
    composeWithDevTools(
      applyMiddleware(epicMiddleware, thunk.withExtraArgument({ API }))
    )
  );

  // epicMiddleware.run(); add root epics here
  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
