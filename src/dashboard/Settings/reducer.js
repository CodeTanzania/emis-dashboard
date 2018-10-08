import {
  STORE_INCIDENTS_TYPE,
  SELECTED_INCIDENT_TYPE, 
  TRIGGER_GET_INCIDENTS_TYPE,
  ADD_NEW_INCIDENT_TYPE,
  UPDATE_INCIDENT_TYPE} from './actions';

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
      case ADD_NEW_INCIDENT_TYPE:
      return {
        ...state,
        data: [action.incidentType, ...state.data],
      };
    case UPDATE_INCIDENT_TYPE: {
      const data = [...state.data]; 
      const { incidentType } = action; 
      const index = data.findIndex(item => item._id === incidentType._id);
      data[index] = incidentType;
      return {
        ...state,
        data,
        incidentsType: incidentType,
      };
    }
    default:
      return state;
  }
}






