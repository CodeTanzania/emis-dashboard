/**
 * Root Reducer for the application
 */
import { combineReducers } from 'redux';
import stakeholders from '../../dashboard/Stakeholders/reducer';
import incidents from '../../dashboard/incidents/reducers';

export default combineReducers({ stakeholders, incidents });
