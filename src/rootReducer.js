/**
 * Root Reducer for the application
 */

import { combineReducers } from 'redux';
import { alerts } from './dashboard/alerts/reducers';

export default combineReducers({ alerts });
