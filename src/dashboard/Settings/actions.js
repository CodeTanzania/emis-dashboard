/* Actions for the incident */ /* const actions */
export const CREATE_INCIDENT_TYPE = 'INCIDENTS_TYPE:CREATE_INCIDENT_TYPE';
export const SELECT_INCIDENT_TYPE = 'INCIDENTS_TYPE :SELECTE_INCIDENTS_TYPE ';
export const GET_INCIDENTS_TYPE = 'INCIDENTS_TYPE :GET_INCIDENT_TYPE';
export const STORE_INCIDENTS_TYPE_SUCCESS =
  'INCIDENTS_TYPE:STORE_INCIDENTS_TYPE_SUCCESS';
export const UPDATE_INCIDENT_TYPE = 'INCIDENTS_TYPE :UPDATE_INCIDENT_TYPE';
export const SELECT_COLOR_AUTOFILL = 'INCIDENTS_TYPE :SELECT_COLOR_AUTOFILL';
export const SEARCH_INCIDENT_TYPE = 'INCIDENTS_TYPE :SEARCH_INCIDENT_TYPE';
export const FETCH_INCIDENT_TYPE_FAILURE =
  'INCIDENTS_TYPE :FETCH_INCIDENT_TYPE_FAILURE';

/* Actions creater */

export const getIncidentstype = () => ({ type: GET_INCIDENTS_TYPE });

export const storeIncidents = (incidentsType = []) => ({
  type: STORE_INCIDENTS_TYPE_SUCCESS,
  payload: {
    incidentsType,
  },
});
export const fetchIncidentsTypeFailure = message => ({
  type: FETCH_INCIDENT_TYPE_FAILURE,
  payload: message,
});

export const selectIncidentType = incidentSelected => ({
  type: SELECT_INCIDENT_TYPE,
  payload: {
    incidentSelected,
  },
});

export const addIncidentType = incidentType => ({
  type: CREATE_INCIDENT_TYPE,
  payload: {
    incidentType,
  },
});

export const updateIncidentType = (incidentTypeId, update) => ({
  type: UPDATE_INCIDENT_TYPE,
  payload: {
    incidentTypeId,
    update,
  },
});

export const searchIncidentType = searchValue => ({
  type: SEARCH_INCIDENT_TYPE,
  payload: {
    searchValue,
  },
});

export const selectColorAutofill = colorSelected => ({
  type: SELECT_COLOR_AUTOFILL,
  payload: {
    colorSelected,
  },
});
