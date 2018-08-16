
import { STORE_STAKEHOLDERS } from './actions';
/**
 * Contacts Reducers
 */

export function filters(state = [], action) {
  return state;
}

export function contacts(state = { data: [], total: 0 }, action) {
  switch (action.type) {
    case STORE_STAKEHOLDERS:
      return Object.assign({}, state, {
        data: action.stakeholders,
        total: action.stakeholders.length,
      });
    default:
      return state;
  }
}
