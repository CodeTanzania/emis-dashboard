/**
 * Root epics for react observables
 */
import { combineEpics } from 'redux-observable';
import {
  fetchStakeholdersEpic,
  searchStakeholdersEpic,
} from '../../dashboard/Stakeholders/epics';
import {getIncidentsTypeEpic} from '../../dashboard/Settings/epic'

export default combineEpics(fetchStakeholdersEpic, searchStakeholdersEpic, getIncidentsTypeEpic);
