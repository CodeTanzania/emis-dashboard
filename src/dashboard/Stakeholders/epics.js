import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import API from '../../common/API';
import {
  fetchStakeholdersFailure,
  fetchStakeholdersSuccess,
  FETCH_STAKEHOLDERS,
  SEARCH_STAKEHOLDERS,
} from './actions';

export const fetchStakeholdersEpic = action$ =>
  action$.pipe(
    ofType(FETCH_STAKEHOLDERS),
    // use Rx from operator to convert promise into observable
    switchMap(() => from(API.findStakeholders())),
    map(results => fetchStakeholdersSuccess(results)), // map the resulting array to an action of type FETCH_STAKEHOLDERS_SUCCESS
    catchError(error => fetchStakeholdersFailure(error.message))
  );

export const searchStakeholdersEpic = action$ =>
  action$.pipe(
    ofType(SEARCH_STAKEHOLDERS), // Init stakeholder search
    switchMap(action => from(API.searchStakeholder(action.searchText))), // search stakeholder
    map(results => fetchStakeholdersSuccess(results)), // map the resulting array to an action of type FETCH_STAKEHOLDERS_SUCCESS
    catchError(error => fetchStakeholdersFailure(error.message))
  );
