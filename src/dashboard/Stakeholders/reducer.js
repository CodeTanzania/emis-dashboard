
import {
  FETCH_STAKEHOLDERS,
  FETCH_STAKEHOLDERS_SUCCESS,
  FETCH_STAKEHOLDERS_FAILURE,
  SELECT_STAKEHOLDER,
  ADD_NEW_STAKEHOLDER_SUCCESS,
  UPDATE_STAKEHOLDER_SUCCESS
} from './actions';
/**
 * Stakeholders Reducers
 */


const initialState = {
  data: [],
  total: 0,
  isLoading: false,
  error: null,
  selected: null
};

export function stakeholders(state = initialState, action) {
  switch (action.type) {
    case FETCH_STAKEHOLDERS:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case FETCH_STAKEHOLDERS_SUCCESS:
      return {
        data: [...action.payload.data],
        total: action.payload.total,
        isLoading: false,
        error: null,
        selected: null
      }
    case FETCH_STAKEHOLDERS_FAILURE:
      return {
        data: [],
        isLoading: false,
        error: action.payload,
      }
    case SELECT_STAKEHOLDER:
      return {
        ...state,
        selected: action.stakeholder,
      }
    case ADD_NEW_STAKEHOLDER_SUCCESS:
      return {
        ...state,
        data: [action.stakeholder, ...state.data]
      }
    case UPDATE_STAKEHOLDER_SUCCESS:
      const data = [...state.data]; // grab stakeholder array
      const { stakeholder } = action; // grab stakeholder
      const foundIndex = data.findIndex(item => item._id === stakeholder._id);
      data[foundIndex] = stakeholder;
      return {
        ...state,
        data,
        selected: stakeholder
      }
    default:
      return state;
  }
}
