/**
 * Root Reducer for the application
 */
import { combineReducers } from 'redux';
import stakeholders from '../../dashboard/Stakeholders/reducer';
import showNotificationPanel from '../components/NotificationPanel/reducer';
import * as resourceReducers from '../../dashboard/Resources/reducers';

export default combineReducers({
  stakeholders,
  showNotificationPanel,
  ...resourceReducers,
});
