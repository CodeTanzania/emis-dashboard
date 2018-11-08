import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import {
  CREATE_INCIDENT_TYPE_SUCCESS,
  fetchIncidentsTypeSuccess,
  fetchIncidentsTypeFailure,
  UPDATE_INCIDENT_TYPE,
  SEARCH_INCIDENT_TYPE,
} from './actions';
import API from '../../common/API';

export const addIncidentTypeEpic = action$ =>
  action$.pipe(
    ofType(CREATE_INCIDENT_TYPE_SUCCESS),
    switchMap(data => from(API.createIncidentType(data.payload.incidentType))),
    switchMap(() => of(fetchIncidentsTypeSuccess()))
  );

export const updateIncidentTypeEpic = action$ =>
  action$.pipe(
    ofType(UPDATE_INCIDENT_TYPE),
    switchMap(data =>
      from(
        API.updateIncidentType(data.payload.incidentTypeId, data.payload.update)
      )
    ),
    switchMap(() => of(fetchIncidentsTypeSuccess()))
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
