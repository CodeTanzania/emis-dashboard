import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies
import { createEpicMiddleware } from 'redux-observable';
/* local dependencies */
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';


/* local constants */
const epicMiddleware = createEpicMiddleware();

// fake data store
const fakeStore = {
  filters: [
    { group: 'phases', data: [{ name: 'Mitigation', count: 100, isActive: true }, { name: 'Preparedness', count: 20 }] },
    { group: 'types', data: [] },
    { group: 'roles', data: [] },
    { group: 'functions', data: [] },
  ],
  criteria: {
    filter: {
      $and: [{ phases: { $in: ['Mitigation'] } }, { types: { $in: ['Agency'] } }],
    },
  },
  contacts: {
    data: [],
    total: 0,
    selected: {},
    isDrawerOpen: false,
  },
  alerts: {
    data: []
  }  
};


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
  const store = createStore(rootReducer, fakeStore, composeWithDevTools(
    applyMiddleware(epicMiddleware),
  ));

  // epicMiddleware.run(); add root epics here
  epicMiddleware.run(rootEpic);

  return store;
};


export default configureStore;