/**
 * Epics  for alerts
 */

import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { TRIGGER_FETCH_ALERTS, storeAlerts } from './actions';
import API from '../../services/API';

const getAlertsEpic = action$ => action$.pipe(
  ofType(TRIGGER_FETCH_ALERTS),
  switchMap(action => from(API.getAlerts()
    .then(data => data))),
  switchMap(data => of(storeAlerts(data))),
);

export {
    getAlertsEpic,
}

