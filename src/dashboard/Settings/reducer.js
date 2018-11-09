import {
  FETCH_INCIDENTS_TYPE_SUCCESS,
  SELECT_INCIDENT_TYPE,
  FETCH_INCIDENTS_TYPE_START,
  UPDATE_INCIDENT_TYPE,
  SELECT_COLOR_AUTOFILL,
  FETCH_INCIDENT_TYPE_FAILURE,
} from './actions';

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
 * */

const initialState = {
  filters: [],
  data: [],
  total: 0,
  isLoading: false,
  error: null,
};

export default function incidentsTypes(state = initialState, action) {
  switch (action.type) {
    case FETCH_INCIDENTS_TYPE_START:
      return {
        state,
        isLoading: true,
        error: null,
        total: 0,
      };

    case FETCH_INCIDENTS_TYPE_SUCCESS:
      return {
        data: action.payload.data.data,
        total: action.payload.data.total,
        isLoading: false,
        error: null,
        incidentType: action.payload.data.data[0],
      };
    case FETCH_INCIDENT_TYPE_FAILURE:
      return {
        data: [],
        isLoading: false,
        error: action.payload,
      };

    case SELECT_INCIDENT_TYPE:
      return {
        ...state,
        incidentType: action.payload.incidentSelected,
      };

    case UPDATE_INCIDENT_TYPE: {
      const data = [...state.data];
      const { incidentType } = action;
      console.log("log data");
      console.log(action)
      const { _id: id } = incidentsTypes;
      const index = data.findIndex(({ _id }) => _id === id);
      data[index] = incidentType;
      return {
        ...state,
        data,
        incidentType,
      };
    }

    case SELECT_COLOR_AUTOFILL:
      return {
        ...state,
        colorSelected: action.payload.colorSelected,
      };

    default:
      return state;
  }
}
