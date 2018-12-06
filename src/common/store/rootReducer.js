/**
 * Root Reducer for the application
 */
import { combineReducers } from 'redux';
import stakeholders from '../../dashboard/Stakeholders/reducer';
import incidentsType from '../../dashboard/Settings/reducer';

import * as notificationPanelReducer from '../components/NotificationPanel/reducer';
import * as resourceReducers from '../../dashboard/Resources/reducers';

export default combineReducers({
  stakeholders,
  incidentsType,
  ...notificationPanelReducer,
  ...resourceReducers,
});
