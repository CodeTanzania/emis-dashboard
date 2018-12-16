/**
 * Root Reducer for the application
 */
import { combineReducers } from 'redux';
import * as plansReducers from '../../dashboard/Plans/reducers';
import * as resourceReducers from '../../dashboard/Resources/reducers';
import incidentsType from '../../dashboard/Settings/reducer';
import stakeholders from '../../dashboard/Stakeholders/reducer';
import * as notificationPanelReducer from '../components/NotificationPanel/reducer';

export default combineReducers({
  stakeholders,
  incidentsType,
  ...notificationPanelReducer,
  ...resourceReducers,
  ...plansReducers,
});
