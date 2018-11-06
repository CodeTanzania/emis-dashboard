import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import {
  FETCH_INCIDENTS_TYPE_START,
  CREATE_INCIDENT_TYPE_SUCCESS,
  fetchIncidentsTypeSuccess,
  fetchIncidentsTypeFailure,
  UPDATE_INCIDENT_TYPE,
  SEARCH_INCIDENT_TYPE,
  fetchIncidentstype,
} from './actions';
import API from '../../common/API';

export const getIncidentsTypeEpic = action$ =>
  action$.pipe(
    ofType(FETCH_INCIDENTS_TYPE_START),
    switchMap(() => from(API.getIncidentType().then(data => data))),
    switchMap(data => of(fetchIncidentsTypeSuccess(data))),
    catchError(error => fetchIncidentsTypeFailure(error.message))
  );

export const addIncidentTypeEpic = action$ =>
  action$.pipe(
    ofType(CREATE_INCIDENT_TYPE_SUCCESS),
    switchMap(data => from(API.createIncidentType(data.payload.incidentType))),
    switchMap(() => of(fetchIncidentstype()))
  );

export const updateIncidentTypeEpic = action$ =>
  action$.pipe(
    ofType(UPDATE_INCIDENT_TYPE),
    switchMap(data =>
      from(
        API.updateIncidentType(data.payload.incidentTypeId, data.payload.update)
      )
    ),
    switchMap(() => of(fetchIncidentstype()))
  );

export const searchIncidentTypeEpic = action$ =>
  action$.pipe(
    ofType(SEARCH_INCIDENT_TYPE),
    switchMap(action =>
      from(API.searchIncidentsType(action.payload.searchValue))
    ),
    switchMap(data => of(fetchIncidentsTypeSuccess(data))),
    catchError(error => fetchIncidentsTypeFailure(error.message))
  );
