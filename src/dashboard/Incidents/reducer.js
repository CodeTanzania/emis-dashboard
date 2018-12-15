import {
  GET_INCIDENTS_SUCCESS,
  GET_INCIDENT_FAILURE,
  GET_INCIDENTS_START,
  SELECT_INCIDENT_SUCCESS,
  SELECT_ACTIVE_INCIDENT,
  GET_ACTIONS_START,
  GET_ACTIONS_SUCCESS,
  GET_ACTIONS_ERROR,
  GET_INCIDENT_ACTION_SUCCESS,
  GET_INCIDENT_ACTION_ERROR,
  POST_INCIDENT_SUCCESS,
  FILTER_INCIDENT_BY_DATE,
  SET_FILTER_INCIDENTTYPE,
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
  incidentActionsData: [],
};

const initialselectedState = {
  incident: null,
  incidentAction: null,
};

const initialFilters = {
  incidentDateFilter: [],
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
        error: null,
      };
    case GET_ACTIONS_START:
      return {
        state,
        isLoading: true,
        error: null,
      };
    case GET_ACTIONS_SUCCESS:
      return {
        ...state,
        incidentActionsData: action.payload.data.data,
        total: action.payload.data.total,
        error: null,
      };
    case GET_ACTIONS_ERROR:
      return {
        incidentActionData: [],
        isLoading: false,
        error: null,
      };
    case POST_INCIDENT_SUCCESS:
      return {
        ...state,
        data: [action.payload.incident, ...state.data],
      };
    case SET_FILTER_INCIDENTTYPE:
      return {
        ...state,
        data: [action.payload.filteredIncident, ...state.data],
      };
    default:
      return state;
  }
}

export function selectedIncident(state = initialselectedState, action) {
  switch (action.type) {
    case SELECT_INCIDENT_SUCCESS:
      return {
        ...state,
        incident: action.payload.data,
      };
    case GET_INCIDENT_ACTION_SUCCESS:
      return {
        ...state,
        incidentAction: action.payload.data,
      };
    case GET_INCIDENT_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export function activeNav(state = { activeItem: 'list' }, action) {
  switch (action.type) {
    case SELECT_ACTIVE_INCIDENT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export function filter(state = initialFilters, action) {
  switch (action.type) {
    case FILTER_INCIDENT_BY_DATE:
      return {
        ...state,
        incidentDateFilter: action.payload.selectedDate,
      };
    default:
      return state;
  }
}