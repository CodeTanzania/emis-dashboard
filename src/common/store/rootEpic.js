/**
 * Root epics for react observables
 */
import { combineEpics } from 'redux-observable';
import {
  getIncidentsTypeEpic,
  addIncidentTypeEpic,
  searchIncidentTypeEpic,
  updateIncidentTypeEpic,
} from '../../dashboard/Settings/epic';

export default combineEpics(
  addIncidentTypeEpic,
  getIncidentsTypeEpic,
  searchIncidentTypeEpic,
  updateIncidentTypeEpic
);
