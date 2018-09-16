/**
 * Root Reducer for the application
 */
import { combineReducers } from 'redux';
import stakeholders from '../../dashboard/Stakeholders/reducer';

export default combineReducers({ stakeholders });
