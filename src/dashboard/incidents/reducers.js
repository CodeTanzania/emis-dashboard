import { STORE_INCIDENTS } from './actions';


export default function incidents(state = [], action) {
  switch (action.type) {
    case STORE_INCIDENTS:
      return Object.assign({}, state, {
        data: action.incidents,
      });
    default:
      return state;
  }
}