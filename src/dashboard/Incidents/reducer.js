import {
  GET_INCIDENTS_SUCCESS,
  GET_INCIDENT_FAILURE,
  GET_INCIDENTS_START,
  SELECT_INCIDENT_SUCCESS,
} from './actions';

/**
 * Incident reducers
 *
 * @function
 * @name Incidents
 *
 * @param {Object} state - Initial state
 * @param {Object} action - Redux action object
 * @param {string} action.type - Action type
 *
 * @version 0.1.0
 * @since 0.1.0
 * */

const initialState = {
  data: [],
  error: null,
  page: 1,
  total: 0,
};

export function incidents(state = initialState, action) {
  switch (action.type) {
    case GET_INCIDENTS_START:
      return {
        state,
        isLoading: true,
        error: null,
      };

    case GET_INCIDENTS_SUCCESS:
      return {
        data: action.payload.data.data,
        total: action.payload.data.total,
        error: null,
      };
    case GET_INCIDENT_FAILURE:
      return {
        data: [],
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export function selectedIncident(state = [], action) {
  switch (action.type) {
    case SELECT_INCIDENT_SUCCESS:
      return {
        ...state,
        incident: action.payload.data,
      };
    default:
      return state;
  }
}
