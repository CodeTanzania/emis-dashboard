/* eslint no-console: "off" */
import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import API from '../../common/API';
import {
  fetchStakeholdersFailure,
  fetchStakeholdersSuccess,
  FETCH_STAKEHOLDERS,
  SEARCH_STAKEHOLDERS,
  TOGGLE_STAKEHOLDER_FILTER,
} from './actions';

/**
 * It takes stakeholders UI filters,
 * extract only selected filters and format them ready to be utilized
 * by the API
 * @param {Object[]} filters filters as used in the UI
 * @param {string} filters[].group - Filter group name
 * @param {Object[]} filters.data - Filters in a specific group
 */
function extractStakeholderFilters(filters) {
  const selectedFilters = filters.map(filterGroup => {
    // iterate filter group
    const selected = filterGroup.data.filter(item => item.selected); // selected filters
    return {
      group: filterGroup.group,
      selected: [...selected.map(item => item.name)], // normalize selected filters
    };
  });
  // return only filters with selected values
  return selectedFilters.filter(filter => filter.selected.length);
}

/**
 * It fetch stakeholders from the API
 *
 * @param {Observable<Action>} action$ - Action observable
 * @param {StateOverable<State>} state$ - Redux store state
 */
export const fetchStakeholdersEpic = (action$, state$) =>
  action$.pipe(
    // subscribe to both fetch and toggle stakeholder filter
    ofType(FETCH_STAKEHOLDERS, TOGGLE_STAKEHOLDER_FILTER),
    // we use switchMap here to have more control with execution of the inner observable
    // on receiving new source then we cancel the existing inner observable to subscribe to the new.
    switchMap(() => {
      const selectedFilters = extractStakeholderFilters(
        state$.value.stakeholders.filters
      );
      console.log(selectedFilters);
      return from(API.findStakeholders()); // use Rx from operator to convert promise into observable
    }),
    map(results => fetchStakeholdersSuccess(results)), // map the resulting array to an action of type FETCH_STAKEHOLDERS_SUCCESS
    catchError(error => fetchStakeholdersFailure(error.message))
  );

/**
 * Search stakeholder based on the search query text
 * @param {Observable<Action>} action$ action observable
 */
export const searchStakeholdersEpic = action$ =>
  action$.pipe(
    ofType(SEARCH_STAKEHOLDERS), // Init stakeholder search
    switchMap(action => from(API.searchStakeholder(action.searchText))), // search stakeholder
    map(results => fetchStakeholdersSuccess(results)), // map the resulting array to an action of type FETCH_STAKEHOLDERS_SUCCESS
    catchError(error => fetchStakeholdersFailure(error.message))
  );
