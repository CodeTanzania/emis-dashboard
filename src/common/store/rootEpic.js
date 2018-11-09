/**
 * Root epics for react observables
 */
import { combineEpics } from 'redux-observable';
import {
  updateIncidentTypeEpic,
} from '../../dashboard/Settings/epic';

export default combineEpics( updateIncidentTypeEpic);
