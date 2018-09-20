import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { TRIGGER_GET_INCIDENTS, storeIncidents } from './actions';
import API from '../../common/API';

const getIncidentsEpic = action$ => action$.pipe(
  ofType(TRIGGER_GET_INCIDENTS),
  switchMap(() => from(API.getIncidents()
    .then(data => data))),
  switchMap(data => of(storeIncidents(data))),
);

export {
    getIncidentsEpic,
}