/**
 * Root epics for react observables
 */
import { combineEpics } from 'redux-observable';
import { getStakeholdersEpic, searchStakeholdersEpic } from './dashboard/Stakeholders/epics';

export default combineEpics(
  getStakeholdersEpic,
  searchStakeholdersEpic,
);
