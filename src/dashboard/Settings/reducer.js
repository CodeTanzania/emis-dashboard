import {  STORE_INCIDENTS_TYPE } from './actions';

/**
 * Incident reducers
 * 
 * @function
 * @name IncidentsType
 *
 * @param {Object} state - Initial state
 * @param {Object} action - Redux action object
 * @param {string} action.type - Action type
 *
 * @version 0.1.0
 * @since 0.1.0
 **/

export default function incidentsType(state = [], action) {
  switch (action.type) {
    case STORE_INCIDENTS_TYPE:
      return Object.assign({}, state, {
        data: action.incidentsType,
      });
    default:
      return state;
  }
}