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
export const fetchIncidentsTypeSuccess = page => (
  dispatch,
  getState,
  { API }
) => {
  dispatch({ type: FETCH_INCIDENTS_TYPE_START });
  API.getIncidentType({ page })
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

export const addIncidentType = incidentType => (
  dispatch,
  getState,
  { API }
) => {
  dispatch({ type: CREATE_INCIDENT_TYPE_SUCCESS });
  API.createIncidentType(incidentType)
    .then(() => {
      fetchIncidentsTypeSuccess();
    })
    .catch(error =>
      dispatch({ type: FETCH_INCIDENT_TYPE_FAILURE, payload: { data: error } })
    );
};
export const updateIncidentTypeInit = ( incidentTypeId, update ) => ({
  type: UPDATE_INCIDENT_TYPE,
    incidentTypeId,
    update,
});
export const updateIncidentTypeSuccess = (incidentTypeId,update) => (
  dispatch,
  getState,
  { API }
) => {
  dispatch(updateIncidentTypeInit(incidentTypeId, update));
  API.updateIncidentType(incidentTypeId, update)
    .then(() => {
      fetchIncidentsTypeSuccess();
    })
    .catch(error =>
      dispatch({ type: FETCH_INCIDENT_TYPE_FAILURE, payload: { data: error } })
    );
};

export const searchIncidentType = searchValue => (
  dispatch,
  getState,
  { API }
) => {
  // init search
  dispatch({ type: FETCH_INCIDENTS_TYPE_START });
  API.searchIncidentsType(searchValue)
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

export const selectColorAutofill = colorSelected => ({
  type: SELECT_COLOR_AUTOFILL,
  payload: {
    colorSelected,
  },
});
