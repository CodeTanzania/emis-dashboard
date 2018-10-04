import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { TRIGGER_GET_INCIDENTS_TYPE, storeIncidents } from './actions';
import API from '../../common/API';

const getIncidentsTypeEpic = action$ => action$.pipe(
  ofType(TRIGGER_GET_INCIDENTS_TYPE),
  switchMap(() => from(API.getIncidentType()
    .then(data => data))),
  switchMap(data => of(storeIncidents(data))),
);

export {
    getIncidentsTypeEpic,
}