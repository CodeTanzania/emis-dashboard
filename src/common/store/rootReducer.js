/**
 * Root Reducer for the application
 */
import { combineReducers } from 'redux';
import stakeholders from '../../dashboard/Stakeholders/reducer';
import incidentsType from '../../dashboard/Settings/reducer';

export default combineReducers({ stakeholders, incidentsType });
