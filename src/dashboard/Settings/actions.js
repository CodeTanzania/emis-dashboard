/* Actions for the incident */ /* const actions */
export const ADD_INCIDENT_TYPE = 'INCIDENTS_TYPE:ADD_NEW_INCIDENT_TYPE';
export const SELECT_INCIDENT_TYPE = 'INCIDENTS_TYPE :SELECTED_INCIDENTS_TYPE ';
export const GET_INCIDENTS_TYPE = 'INCIDENTS_TYPE :TRIGER_GET';
export const STORE_INCIDENTS_TYPE = 'INCIDENTS_TYPE:STORE';
export const UPDATE_INCIDENT_TYPE = 'INCIDENTS_TYPE :UPDATE_INCIDENT_TYPE';
export const SELECT_COLOR_AUTOFILL = 'INCIDENTS_TYPE :COLOR_AUTOFILL';
export const SEARCH_INCIDENT_TYPE = 'INCIDENTS_TYPE :SEARCH_INCIDENT_TYPE';

/* Actions creater */

export const getIncidentstype = () => ({ type: GET_INCIDENTS_TYPE });

export const storeIncidents = (incidentsType = []) => ({
  type: STORE_INCIDENTS_TYPE,
  payload: {
    incidentsType,
  },
});

export const selectIncidentType = incidentSelected => ({
  type: SELECT_INCIDENT_TYPE,
  payload:{
    incidentSelected,
  }
});

export const addIncidentType = incidentType => ({
  type: ADD_INCIDENT_TYPE,
  payload : {
     incidentType,
  }
});

export const updateIncidentType = incidentType => ({
  type: UPDATE_INCIDENT_TYPE,
  payload: {
    incidentType,
  }
});

export const searchIncidentType = searchValue => ({
  type: SEARCH_INCIDENT_TYPE,
  payload:{
    searchValue,
  }
});

export const selectColorAutofill = colorSelected => ({
  type: SELECT_COLOR_AUTOFILL,
 payload:{
   colorSelected,
 } 
});
