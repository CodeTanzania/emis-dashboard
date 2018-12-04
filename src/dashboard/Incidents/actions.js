import { incidentToGeojson } from '../../common/lib/mapUtil'; /* const actions */

/* Actions for the incident */ export const CREATE_INCIDENT_TYPE_SUCCESS =
  'INCIDENTS:CREATE_INCIDENT_TYPE';
export const GET_INCIDENTS_START = 'INCIDENTS :GET_INCIDENTS_START';
export const GET_INCIDENTS_SUCCESS = 'INCIDENTS :GET_INCIDENTS_SUCCESS';
export const GET_INCIDENT_FAILURE = 'INCIDENTS :GET_INCIDENTS_FAILURE';
export const SELECT_INCIDENT_START = 'INCIDENTS :SELECT_INCIDENT_START';
export const SELECT_INCIDENT_SUCCESS = 'INCIDENTS :SELECT_INCIDENT_SUCCESS';
export const SELECT_INCIDENT_ERROR = 'INCIDENTS :SELECT_INCIDENT_ERROR';

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

export const getIncidentsSuccess = page => (dispatch, getState, { API }) => {
  dispatch(getIncidentsStart());
  API.getIncidents({ page })
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

export const getSelectedIncident = (  incidentId = null) => (
  dispatch,
  getState,
  { API }
) => {
  dispatch(selectIncidentStart(incidentId));
    API.getIncidentById(incidentId).then(incident => {
      const areaSelected = incidentToGeojson(incident);
      dispatch(selectIncidentSuccess({ ...incident, areaSelected }));
    })
  .catch (error => dispatch(selectIncidentError(error)));
};
