import { combineReducers } from 'redux';
/**
 * Contacts Reducers
 */

function filters(state = [], action) {
  return state;
}

function contacts(state = { data: [], total: 0 }, action) {
  return state;
}


export default combineReducers({ filters, contacts });
