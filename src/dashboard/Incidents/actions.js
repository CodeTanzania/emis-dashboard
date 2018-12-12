import { incidentToGeojson } from '../../common/lib/mapUtil'; /* const actions */

/* Actions for the incident */
export const CREATE_INCIDENT_TYPE_SUCCESS = 'INCIDENTS:CREATE_INCIDENT_TYPE';
export const GET_INCIDENTS_START = 'INCIDENTS :GET_INCIDENTS_START';
export const GET_INCIDENTS_SUCCESS = 'INCIDENTS :GET_INCIDENTS_SUCCESS';
export const GET_INCIDENT_FAILURE = 'INCIDENTS :GET_INCIDENTS_FAILURE';
export const SELECT_INCIDENT_START = 'INCIDENTS :SELECT_INCIDENT_START';
export const SELECT_INCIDENT_SUCCESS = 'INCIDENTS :SELECT_INCIDENT_SUCCESS';
export const SELECT_INCIDENT_ERROR = 'INCIDENTS :SELECT_INCIDENT_ERROR';
export const SELECT_ACTIVE_INCIDENT = 'SELECT_ACTIVE_INCIDENT';
export const GET_ACTIONS_START = 'GET_ACTIONS_START';
export const GET_ACTIONS_SUCCESS = 'GET_ACTIONS_SUCCESS';
export const GET_ACTIONS_ERROR = 'GET_ACTIONS_ERROR';
export const GET_INCIDENT_ACTION_ERROR = 'GET_INCIDENT_ACTION_ERROR';
export const GET_INCIDENT_ACTION_START = 'GET_INCIDENT_ACTION_START';
export const GET_INCIDENT_ACTION_SUCCESS = 'GET_INCIDENT_ACTION_SUCCESS';
export const POST_INCIDENT_START = 'POST_INCIDENT_START';
export const POST_INCIDENT_SUCCESS = 'POST_INCIDENT_SUCCESS';
export const POST_INCIDENT_ERROR = 'POST_INCIDENT_ERROR';
export const FILTER_INCIDENT_BY_DATE = 'FILTER_INCIDENT_BY_DATE';
export const SET_FILTER_INCIDENTTYPE = 'SET_FILTER_INCIDENTTYPE';

/* Actions creater */

export const getIncidentsStart = () => ({
  type: GET_INCIDENTS_START,
});

export const getIncidentsError = message => ({
  type: GET_INCIDENT_FAILURE,
  payload: message,
});

export const selectIncidentStart = (id = null) => ({
  type: SELECT_INCIDENT_START,
  payload: id,
});

export const selectIncidentError = message => ({
  type: SELECT_INCIDENT_ERROR,
  payload: message,
});

export const selectIncidentSuccess = incident => ({
  type: SELECT_INCIDENT_SUCCESS,
  payload: { data: incident },
});

export const getActionsStart = () => ({
  type: GET_ACTIONS_START,
});

export const getActionsSuccess = incidentsActions => ({
  type: GET_ACTIONS_SUCCESS,
  payload: { data: incidentsActions },
});

export const getActionsError = message => ({
  type: GET_ACTIONS_ERROR,
  payload: { message },
});

export const setIncidentActionStart = id => ({
  type: GET_INCIDENT_ACTION_START,
  payload: {
    id,
  },
});

export const setIncidentActionSuccess = incidentAction => ({
  type: GET_INCIDENT_ACTION_SUCCESS,
  payload: { data: incidentAction },
});

export const setIncidentActionError = message => ({
  type: GET_INCIDENT_ACTION_ERROR,
  payload: { message },
});

export const getNavActive = activeItem => ({
  type: SELECT_ACTIVE_INCIDENT,
  payload: { activeItem },
});

export const filterIncidentByDate = selectedDate => ({
  type: FILTER_INCIDENT_BY_DATE,
  payload: { selectedDate },
});

export const filterByIncidentType = filteredIncident => ({
  type: SET_FILTER_INCIDENTTYPE,
  payload: { filteredIncident },
});

export const createIncidentStart = () => ({
  type: POST_INCIDENT_START,
});

export const createIncidentFail = message => ({
  type: POST_INCIDENT_ERROR,
  payload: {
    message,
  },
});

export const getIncidentsSuccess = () => (dispatch, getState, { API }) => {
  dispatch(getIncidentsStart());
  const state = getState();
  const { filter } = state;
  API.getIncidents(filter)
    .then(results => {
      const { data: receivedIncidents } = results;
      const data = receivedIncidents.map(result => {
        const epicentre = incidentToGeojson(result);

        return { ...result, epicentre };
      });

      dispatch({
        type: GET_INCIDENTS_SUCCESS,
        payload: { data: { ...results, data } },
      });
    })
    .catch(error => dispatch(getIncidentsError(error)));
};

export const createIncidentSuccess = incident => (
  dispatch,
  getState,
  { API }
) => {
  dispatch(createIncidentStart);
  API.createIncident(incident)
    .then(() => {
      dispatch(getIncidentsSuccess());
    })
    .catch(error => dispatch(createIncidentFail(error)));
};

export const getSelectedIncident = (incidentId = null) => (
  dispatch,
  getState,
  { API }
) => {
  dispatch(selectIncidentStart(incidentId));
  API.getIncidentById(incidentId)
    .then(incident => {
      const areaSelected = incidentToGeojson(incident);
      dispatch(selectIncidentSuccess({ ...incident, areaSelected }));
    })
    .catch(error => dispatch(selectIncidentError(error)));
};

export const getIncidentActions = () => (dispatch, getState, { API }) => {
  dispatch(getActionsStart());
  API.getIncidentsActions()
    .then(actions => {
      dispatch(getActionsSuccess(actions));
    })
    .catch(error => dispatch(getActionsError(error)));
};

export const activeIncidentAction = (incidentId = null) => (
  dispatch,
  getState,
  { API }
) => {
  dispatch(setIncidentActionStart(incidentId));
  API.getIncidentActionById(incidentId)
    .then(activeAction => {
      dispatch(setIncidentActionSuccess(activeAction));
    })
    .catch(error => dispatch(setIncidentActionError(error)));
};
