
import { STORE_STAKEHOLDERS, SELECTED_STAKEHOLDER } from './actions';
/**
 * Contacts Reducers
 */

export function filters(state = [], action) {
  return state;
}

export function contacts(state = { data: [], total: 0, selected: {} }, action) {
  switch (action.type) {
    case STORE_STAKEHOLDERS:
      return Object.assign({}, state, {
        data: action.stakeholders,
        total: action.stakeholders.length,
      });
    case SELECTED_STAKEHOLDER:
      return Object.assign({}, state, {
        selected: action.stakeholder,
      });
    default:
      return state;
  }
}
