/* Actions for the incident */ /* const actions */
export const CREATE_INCIDENT_TYPE_SUCCESS =
  'INCIDENTS_TYPE:CREATE_INCIDENT_TYPE';
export const GET_INCIDENTS_START =
  'INCIDENTS_TYPE :FETCH_INCIDENTS_TYPE_START';
export const GET_INCIDENTS_SUCCESS =
  'INCIDENTS_TYPE :FETCH_INCIDENTS_TYPE_SUCCESS';
export const GET_INCIDENT_FAILURE =
  'INCIDENTS_TYPE :FETCH_INCIDENT_TYPE_FAILURE';

/* Actions creater */

export const fetchIncidentsType = () => ({
  // type: FETCH_INCIDENTS_TYPE_START,
});
export const fetchIncidentsTypeSuccess = page => (
  dispatch,
  getState,
  { API }
) => {
  dispatch({ type: GET_INCIDENTS_START });
  API.getIncidentType({ page })
    .then(result =>
      dispatch({
        type: GET_INCIDENTS_SUCCESS,
        payload: { data: result },
      })
    )
    .catch(error =>
      dispatch({ type: GET_INCIDENT_FAILURE, payload: { data: error } })
    );
};
export const fetchIncidentsTypeFailure = message => ({
  type: GET_INCIDENT_FAILURE,
  payload: message,
});

export const addIncidentType = incidentType => (
  dispatch,
  getState,
  { API }
) => {
  dispatch({ type: CREATE_INCIDENT_TYPE_SUCCESS });
  API.createIncidentType(incidentType)
    .then(() => {
      dispatch(fetchIncidentsTypeSuccess());
    })
    .catch(error =>
      dispatch({ type: GET_INCIDENT_FAILURE, payload: { data: error } })
    );
};

export const searchIncidentType = searchValue => (
  dispatch,
  getState,
  { API }
) => {
  // init search
  dispatch({ type: GET_INCIDENTS_START });
  API.searchIncidentsType(searchValue)
    .then(result =>
      dispatch({
        type: GET_INCIDENTS_SUCCESS,
        payload: { data: result },
      })
    )
    .catch(error =>
      dispatch({ type: GET_INCIDENT_FAILURE, payload: { data: error } })
    );
};

