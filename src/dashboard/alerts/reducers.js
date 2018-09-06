import { STORE_ALERTS,  } from './actions';
/**
 * Alerts Reducers
 */



export function alerts(state = [], action) {
  switch (action.type) {
    case STORE_ALERTS:
      return Object.assign({}, state, {
        data: action.alerts
      });
    default:
      return state;
  }
}