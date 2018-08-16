/**
 * Root Reducer for the application
 */
import { combineReducers } from 'redux';
import { filters, contacts } from './dashboard/Stakeholders/reducer';

export default combineReducers({ filters, contacts });
