import { incidentToGeojson } from './helpers'; /* const actions */

/* Actions for the incident */

/* fetch all incidents */
export const GET_INCIDENTS_START = 'INCIDENTS :GET_INCIDENTS_START';
export const GET_INCIDENTS_SUCCESS = 'INCIDENTS :GET_INCIDENTS_SUCCESS';
export const GET_INCIDENT_FAILURE = 'INCIDENTS :GET_INCIDENTS_FAILURE';

/* select specific incident   */
export const SELECT_INCIDENT_START = 'INCIDENTS :SELECT_INCIDENT_START';
export const SELECT_INCIDENT_SUCCESS = 'INCIDENTS :SELECT_INCIDENT_SUCCESS';
export const SELECT_INCIDENT_ERROR = 'INCIDENTS :SELECT_INCIDENT_ERROR';

/* fetch incident actions  */
export const GET_ACTIONS_START = 'GET_ACTIONS_START';
export const GET_ACTIONS_SUCCESS = 'GET_ACTIONS_SUCCESS';
export const GET_ACTIONS_ERROR = 'GET_ACTIONS_ERROR';

/* fetch incident action by id */
export const GET_INCIDENT_ACTION_ERROR = 'GET_INCIDENT_ACTION_ERROR';
export const GET_INCIDENT_ACTION_START = 'GET_INCIDENT_ACTION_START';
export const GET_INCIDENT_ACTION_SUCCESS = 'GET_INCIDENT_ACTION_SUCCESS';

/* post incident types */
export const POST_INCIDENT_START = 'POST_INCIDENT_START';
export const POST_INCIDENT_SUCCESS = 'POST_INCIDENT_SUCCESS';
export const POST_INCIDENT_ERROR = 'POST_INCIDENT_ERROR';

/* post incident action types */
export const CREATE_INCIDENT_ACTION_START = 'CREATE_INCIDENT_ACTION_START';
export const CREATE_INCIDENT_ACTION_SUCCESS = 'CREATE_INCIDENT_ACION_SUCCESS';
export const CREATE_INCIDENT_ACTION_ERROR = 'CREATE_INCIDENT_ACTION_ERROR';

/* filter incident types */
export const FILTER_INCIDENT_BY_DATE = 'FILTER_INCIDENT_BY_DATE';
export const SELECT_ACTIVE_INCIDENT = 'SELECT_ACTIVE_INCIDENT';

/* search incidents */
export const SEARCH_INCIDENT_START = 'SEARCH_INCIDENT_START';
export const SEARCH_INCIDENT_ERROR = 'SEARCH_INCIDENT_ERROR';
export const SHOW_MAP_POINTS = 'SHOW_MAP_POINTS';
export const SHOW_MAP_POINT = 'SHOW_MAP_POINT';
export const SHOW_POLYGONS = 'SHOW_POLYGONS';


/* fetch incidents tasks  */
export const GET_TASKS_START = 'GET_TASKS_START';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASKS_ERROR = 'GET_TASKS_ERROR';

/* fetch incident task  */
export const GET_TASK_START = 'GET_TASK_START';
export const GET_TASK_SUCCESS = 'GET_TASK_SUCCESS';
export const GET_TASK_ERROR = 'GET_TASK_ERROR';

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

export const createIncidentStart = () => ({
  type: POST_INCIDENT_START,
});

export const createIncidentFail = message => ({
  type: POST_INCIDENT_ERROR,
  payload: {
    message,
  },
});

export const createIncidentActionStart = () => ({
  type: CREATE_INCIDENT_ACTION_START,
});

export const createIncidentActionFail = message => ({
  type: CREATE_INCIDENT_ACTION_ERROR,
  payload: {
    message,
  },
});

export const filterIncidentByDate = selectedDate => ({
  type: FILTER_INCIDENT_BY_DATE,
  payload: { selectedDate },
});

export const searchIncidentStart = () => ({
  type: SEARCH_INCIDENT_START,
});

export const searchIncidentError = message => ({
  type: SEARCH_INCIDENT_ERROR,
  payload: { message },
});

export const showMapPoints = showPoints => ({
  type: SHOW_MAP_POINTS,
  payload: { data: showPoints },
});

export const showMapPoint = showPoint => ({
  type: SHOW_MAP_POINT,
  payload:{data:showPoint}
});

export const showMapPolygons = showPolygons => ({
  type: SHOW_POLYGONS,
  payload: {data: showMapPolygons}
})

export const getTasksStart = () => ({
  type: GET_TASKS_START,
});

export const getTasksSuccess = incidentTasks => ({
  type: GET_TASKS_SUCCESS,
  payload: { data: incidentTasks },
});

export const getTasksError = message => ({
  type: GET_TASKS_ERROR,
  payload: { message },
});

export const getIncidentTaskStart = () => ({
  type: GET_TASK_START,
});

export const getIncidentTaskSuccess = incidentTasks => ({
  type: GET_TASK_SUCCESS,
  payload: { data: incidentTasks },
});

export const getIncidentTaskError = message => ({
  type: GET_TASK_ERROR,
  payload: { message },
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
      dispatch(showMapPoints(true));
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
      dispatch(showMapPoints(false));
      dispatch(showMapPoint(true));
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

export const createIncidentAction = action => (dispatch, getState, { API }) => {
  dispatch(createIncidentAction());
  API.CreateIncidentAction(action)
    .then(() => dispatch(getIncidentActions()))
    .catch(error => dispatch(createIncidentActionFail(error)));
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

export const searchIncident = searchData => (dispatch, getState, { API }) => {
  dispatch(searchIncidentStart());
  API.searchIncidents(searchData)
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
    .catch(error => dispatch(searchIncidentError(error)));
};

export const fetchIncidentTasks = () => (dispatch, getState, { API }) => {
  dispatch(getTasksStart());
  API.getIncidentTasks()
    .then(tasks => {
      dispatch(getTasksSuccess(tasks));
    })
    .catch(error => dispatch(getTasksError(error)));
};

export const getIncidentTaskById = incidentId => (
  dispatch,
  getState,
  { API }
) => {
  dispatch(getIncidentTaskStart());
  API.getIncidentTasksById(incidentId)
    .then(tasks => {
      dispatch(getIncidentTaskSuccess(tasks));
    })
    .catch(error => dispatch(getIncidentTaskError(error)));
};
