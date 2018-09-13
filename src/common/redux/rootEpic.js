/**
 * Root epics for react observables
 */
import { combineEpics } from 'redux-observable';
import {
  fetchStakeholdersEpic,
  searchStakeholdersEpic
} from '../../dashboard/Stakeholders/epics';

export default combineEpics(
  fetchStakeholdersEpic,
  searchStakeholdersEpic
);
