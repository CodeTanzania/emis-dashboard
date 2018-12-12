/**
 * Root Reducer for the application
 */
import { combineReducers } from 'redux';
import stakeholders from '../../dashboard/Stakeholders/reducer';
import incidentsType from '../../dashboard/Settings/reducer';
import {
  incidents,
  selectedIncident,
  activeNav,
  filter,
} from '../../dashboard/Incidents/reducer';

export default combineReducers({
  stakeholders,
  incidentsType,
  incidents,
  filter,
  selectedIncident,
  activeNav,
});
