/**
 * Root Reducer for the application
 */
import { combineReducers } from 'redux';
import * as plansReducers from '../../dashboard/Plans/reducers';
import * as resourceReducers from '../../dashboard/Resources/reducers';
import { incidentsType, activeMenu } from '../../dashboard/Settings/reducer';
import stakeholders from '../../dashboard/Stakeholders/reducer';
import * as notificationPanelReducer from '../components/NotificationPanel/reducer';
import * as alertsReducers from '../../dashboard/Alerts/reducers';

export default combineReducers({
  stakeholders,
  incidentsType,
  activeMenu,
  ...notificationPanelReducer,
  ...resourceReducers,
  ...plansReducers,
  ...alertsReducers,
});
