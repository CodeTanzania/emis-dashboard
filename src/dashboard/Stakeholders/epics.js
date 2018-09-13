
import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import {
  FETCH_STAKEHOLDERS,
  SEARCH_STAKEHOLDERS,
  fetchStakeholdersSuccess,
  fetchStakeholdersFailure,
} from './actions';
import API from 'API';


export const fetchStakeholdersEpic = action$ => action$.pipe(
  ofType(FETCH_STAKEHOLDERS),
  // use Rx from operator to convert promise into observable
  switchMap(() => from(API.findStakeholders())),
  map(results => fetchStakeholdersSuccess(results)), // map the resulting array to an action of type FETCH_STAKEHOLDERS_SUCCESS
  catchError(error => fetchStakeholdersFailure(error.message))
);

export const searchStakeholdersEpic = action$ => action$.pipe(
  ofType(SEARCH_STAKEHOLDERS), // Init stakeholder search
  switchMap(action => from(API.searchStakeholder(action.searchText))), // search stakeholder 
  map(results => fetchStakeholdersSuccess(results)), // map the resulting array to an action of type FETCH_STAKEHOLDERS_SUCCESS
  catchError(error => fetchStakeholdersFailure(error.message))
);
