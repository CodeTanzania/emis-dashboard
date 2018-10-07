import {
  STORE_INCIDENTS_TYPE,
  SELECTED_INCIDENT_TYPE, 
  TRIGGER_GET_INCIDENTS_TYPE} from './actions';

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
 **/

const initialState = {
  filters: [],
  data: [],
  total: 0,
  isLoading: false,
  error: null,
};


export default function incidentsType(state = initialState, action) {
  switch (action.type) {
    case TRIGGER_GET_INCIDENTS_TYPE:
    return  {
        state,
        isLoading: true,
        error: null,
        total: 0
    };
  
    case STORE_INCIDENTS_TYPE:  {
      return {
        data: action.incidentsType,
        total: action.incidentsType.length,
        isLoading: false,
        error: null,
        incidentType:action.incidentsType[0]
      };
    }
      case SELECTED_INCIDENT_TYPE:
      return {
        ...state,
        incidentType: action.incidentSelected,
      };
    default:
      return state;
  }
}






