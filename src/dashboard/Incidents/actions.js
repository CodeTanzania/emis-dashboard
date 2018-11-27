import { incidentToGeojson } from '../../common/lib/mapUtil'; /* const actions */

/* Actions for the incident */ export const CREATE_INCIDENT_TYPE_SUCCESS =
  'INCIDENTS:CREATE_INCIDENT_TYPE';
export const GET_INCIDENTS_START = 'INCIDENTS :GET_INCIDENTS_START';
export const GET_INCIDENTS_SUCCESS = 'INCIDENTS :GET_INCIDENTS_SUCCESS';
export const GET_INCIDENT_FAILURE = 'INCIDENTS :GET_INCIDENTS_FAILURE';

/* Actions creater */

export const getIncidentsStart = () => ({
  type: GET_INCIDENTS_START,
});

export const getIncidentsError = message => ({
  type: GET_INCIDENT_FAILURE,
  payload: message,
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

// export const addIncidentType = incidentType => (
//   dispatch,
//   getState,
//   { API }
// ) => {
//   dispatch({ type: CREATE_INCIDENT_TYPE_SUCCESS });
//   API.createIncidentType(incidentType)
//     .then(() => {
//       dispatch(getIncidentsSuccess());
//     })
//     .catch(error =>
//       dispatch({ type: GET_INCIDENT_FAILURE, payload: { data: error } })
//     );
// };

// export const searchIncidentType = searchValue => (
//   dispatch,
//   getState,
//   { API }
// ) => {
//   // init search
//   dispatch({ type: GET_INCIDENTS_START });
//   API.searchIncidentsType(searchValue)
//     .then(result =>
//       dispatch({
//         type: GET_INCIDENTS_SUCCESS,
//         payload: { data: result },
//       })
//     )
//     .catch(error =>
//       dispatch({ type: GET_INCIDENT_FAILURE, payload: { data: error } })
//     );
// };
