import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import {
  GET_INCIDENTS_TYPE,
  ADD_INCIDENT_TYPE,
  storeIncidents,
  fetchIncidentsTypeFailure,
  UPDATE_INCIDENT_TYPE,
  SEARCH_INCIDENT_TYPE,
  getIncidentstype,
} from './actions';
import API from '../../common/API';

export const getIncidentsTypeEpic = action$ =>
  action$.pipe(
    ofType(GET_INCIDENTS_TYPE),
    switchMap(() => from(API.getIncidentType().then(data => data))),
    switchMap(data => of(storeIncidents(data))),
    catchError(error => fetchIncidentsTypeFailure(error.message))
  );

export const addIncidentTypeEpic = action$ =>
  action$.pipe(
    ofType(ADD_INCIDENT_TYPE),
    switchMap(data =>
      from(API.createIncidentType(data.payload.incidentType))
    ),
    switchMap(() => of(getIncidentstype()))
  );

export const updateIncidentTypeEpic = action$ =>
  action$.pipe(
    ofType(UPDATE_INCIDENT_TYPE),
    switchMap(data =>
      from(
        API.updateIncidentType(data.payload.incidentTypeId, data.payload.update)
      )
    ),
    switchMap(() => of(getIncidentstype()))
  );

export const searchIncidentTypeEpic = action$ =>
  action$.pipe(
    ofType(SEARCH_INCIDENT_TYPE),
    switchMap(action =>
      from(API.searchIncidentsType(action.payload.searchValue))
    ),
    switchMap(data => of(storeIncidents(data))),
    catchError(error => fetchIncidentsTypeFailure(error.message))
  );
