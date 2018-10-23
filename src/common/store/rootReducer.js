/**
 * Root Reducer for the application
 */
import { combineReducers } from 'redux';
import stakeholders from '../../dashboard/Stakeholders/reducer';
import * as plansReducers from '../../dashboard/Plans/reducers';

export default combineReducers({ stakeholders, ...plansReducers });
