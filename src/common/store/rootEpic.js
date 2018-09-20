/**
 * Root epics for react observables
 */
import { combineEpics } from 'redux-observable';
import {
  fetchStakeholdersEpic,
  searchStakeholdersEpic,
} from '../../dashboard/Stakeholders/epics';
import { getIncidentsEpic } from '../../dashboard/incidents/epics';

export default combineEpics(fetchStakeholdersEpic, searchStakeholdersEpic, getIncidentsEpic);
