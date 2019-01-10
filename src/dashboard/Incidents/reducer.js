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
  SHOW_MAP_POINTS,
  GET_TASKS_START,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  GET_TASK_START,
  GET_TASK_SUCCESS,
  GET_TASK_ERROR,
  SEARCH_INCIDENT_START,
  SELECT_INCIDENT_START,
  GET_INCIDENT_ACTION_START,
  SHOW_MAP_POINT,
  STORE_FEATUREPOLYGON_SUCCESS,
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
  total: 0,
  incidentActionsData: [],
  incident: null,
  isLoading: false,
  isSelected: false,
};

const initialselectedState = {
  incidentAction: null,
  incidentTasks: [],
  incidentTask: null,
  isLoadingData: false,
};

const initialFilters = {
  incidentDateFilter: [],
};
const initialMapState = {
  showPoints: false,
  showPoint: false,
};

export function incidents(state = initialState, action) {
  switch (action.type) {
    case GET_INCIDENTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_INCIDENTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data.data,
        total: action.payload.data.total,
        isLoading: false,
        isSelected: false,
      };
    case GET_INCIDENT_FAILURE:
      return {
        ...state,
        data: [],
        isLoading: false,
        error: null,
      };
    case GET_ACTIONS_START:
      return {
        ...state,
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
        ...state,
        incidentActionData: [],
        isLoading: false,
        error: null,
      };
    case POST_INCIDENT_SUCCESS:
      return {
        ...state,
        data: [action.payload.incident, ...state.data],
      };
    case SELECT_INCIDENT_START:
      return {
        ...state,
        isLoading: true,
      };
    case SELECT_INCIDENT_SUCCESS:
      return {
        ...state,
        incident: action.payload.data,
        isLoading: false,
        isSelected: true,
      };
    case SEARCH_INCIDENT_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    default:
      return state;
  }
}

export function selectedIncident(state = initialselectedState, action) {
  switch (action.type) {
    case GET_INCIDENT_ACTION_START:
      return {
        ...state,
        isLoadingData: true,
      };
    case GET_INCIDENT_ACTION_SUCCESS:
      return {
        ...state,
        incidentAction: action.payload.data,
        isLoadingData: false,
      };
    case GET_INCIDENT_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoadingData: false,
      };
    case GET_TASKS_START:
      return {
        ...state,
      };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        incidentTasks: action.payload.data.data,
      };
    case GET_TASKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_TASK_START:
      return {
        ...state,
        isLoadingData: true,
      };
    case GET_TASK_SUCCESS:
      return {
        ...state,
        incidentTask: action.payload.data,
        isLoadingData: false,
      };
    case GET_TASK_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoadingData: false,
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

export function renderMapMarkers(state = initialMapState, action) {
  switch (action.type) {
    case SHOW_MAP_POINTS:
      return {
        ...state,
        showPoints: action.payload.data,
      };
    case SHOW_MAP_POINT:
      return {
        ...state,
        showPoint: action.payload.data,
      };
    default:
      return state;
  }
}

export function featureCollection(state = [], action) {
  switch (action.type) {
    case STORE_FEATUREPOLYGON_SUCCESS:
      return [...state, { geometry: action.payload.data }];
    default:
      return state;
  }
}
