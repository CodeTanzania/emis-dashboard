/**
 * Root Reducer for the application
 */
import { combineReducers } from 'redux';
import * as plansReducers from '../../dashboard/Plans/reducers';
import * as resourceReducers from '../../dashboard/Resources/reducers';
import * as incidentsTypeReducer from '../../dashboard/Settings/reducer';
import stakeholders from '../../dashboard/Stakeholders/reducer';
import * as incidentReducucer from '../../dashboard/Incidents/reducer';
import * as notificationPanelReducer from '../components/NotificationPanel/reducer';
import * as alertsReducers from '../../dashboard/Alerts/reducers';

export default combineReducers({
  stakeholders,
  ...incidentsTypeReducer,
  ...incidentReducucer,
  ...notificationPanelReducer,
  ...resourceReducers,
  ...plansReducers,
  ...alertsReducers,
});
