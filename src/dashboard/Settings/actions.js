/* Actions for the incident */ /* const actions */
export const CREATE_INCIDENT_TYPE_SUCCESS =
  'INCIDENTS_TYPE:CREATE_INCIDENT_TYPE';
export const SELECT_INCIDENT_TYPE = 'INCIDENTS_TYPE :SELECTE_INCIDENTS_TYPE ';
export const FETCH_INCIDENTS_TYPE_START =
  'INCIDENTS_TYPE :FETCH_INCIDENTS_TYPE_START';
export const FETCH_INCIDENTS_TYPE_SUCCESS =
  'INCIDENTS_TYPE :FETCH_INCIDENTS_TYPE_SUCCESS';
export const FETCH_INCIDENT_TYPE_FAILURE =
  'INCIDENTS_TYPE :FETCH_INCIDENT_TYPE_FAILURE';
export const UPDATE_INCIDENT_TYPE = 'INCIDENTS_TYPE :UPDATE_INCIDENT_TYPE';
export const SELECT_COLOR_AUTOFILL = 'INCIDENTS_TYPE :SELECT_COLOR_AUTOFILL';
export const SEARCH_INCIDENT_TYPE = 'INCIDENTS_TYPE :SEARCH_INCIDENT_TYPE';

/* Actions creater */


export const fetchIncidentsType = () => ({
  // type: FETCH_INCIDENTS_TYPE_START,
});
export const fetchIncidentsTypeSuccess = () => (
  dispatch,
  getState,
  { API }
) => {
  const { filters, page } = getState().incidentsType;
  dispatch({ type: FETCH_INCIDENTS_TYPE_START });
  API.getIncidentType({ filters, page })
    .then(result =>
      dispatch({
        type: FETCH_INCIDENTS_TYPE_SUCCESS,
        payload: { data: result },
      })
    )
    .catch(error =>
      dispatch({ type: FETCH_INCIDENT_TYPE_FAILURE, payload: { data: error } })
    );
};
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
  type: CREATE_INCIDENT_TYPE_SUCCESS,
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
