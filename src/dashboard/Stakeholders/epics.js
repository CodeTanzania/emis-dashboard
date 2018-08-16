
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { GET_STAKEHOLDERS, storeStakeHolders } from './actions';
import API from '../../services/API';

export const getStakeholdersEpic = action$ => action$.pipe(
  ofType(GET_STAKEHOLDERS),
  switchMap(action => from(API.getStakeholders()
    .then(res => res.data)
    .then(data => data))),
    switchMap(data => of(storeStakeHolders(data)))
  );
