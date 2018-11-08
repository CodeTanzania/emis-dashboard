/**
 * Root epics for react observables
 */
import { combineEpics } from 'redux-observable';
import {
  addIncidentTypeEpic,
  searchIncidentTypeEpic,
  updateIncidentTypeEpic,
} from '../../dashboard/Settings/epic';

export default combineEpics(
  addIncidentTypeEpic,
  searchIncidentTypeEpic,
  updateIncidentTypeEpic
);
