/**
 * Root epics for react observables
 */

import { combineEpics } from 'redux-observable';
import { getAlertsEpic } from './dashboard/alerts/epics';

export default combineEpics(
    getAlertsEpic
);