import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {
  GET_INCIDENTS_TYPE,
  ADD_INCIDENT_TYPE,
  storeIncidents,
  getIncidentstype,
  UPDATE_INCIDENT_TYPE,
  SEARCH_INCIDENT_TYPE,
} from './actions';
import API from '../../common/API';

const getIncidentsTypeEpic = action$ =>
  action$.pipe(
    ofType(GET_INCIDENTS_TYPE),
    switchMap(() => from(API.getIncidentType().then(data => data))),
    switchMap(data => of(storeIncidents(data)))
  );

const addIncidentType = action$ =>
  action$.pipe(
    ofType(ADD_INCIDENT_TYPE, UPDATE_INCIDENT_TYPE),
    switchMap(() => of(getIncidentstype()))
  );

const searchIncidentTypeEpic = action$ =>
  action$.pipe(
    ofType(SEARCH_INCIDENT_TYPE),
    switchMap(action => from(API.searchIncidentsType(action.payload.searchValue))),
    switchMap(data => of(storeIncidents(data)))
  );

export { getIncidentsTypeEpic, addIncidentType, searchIncidentTypeEpic };
