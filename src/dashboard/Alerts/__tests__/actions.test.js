import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as API from '../../../common/API';
import * as Actions from '../actions';
import { Action } from 'rxjs/internal/scheduler/Action';

jest.mock('../../../common/API');

const middlewares = [thunk.withExtraArgument({ API })];
const mockStore = configureMockStore(middlewares);

describe('Alerts: Module', () => {
  describe('Alerts: Actions Creators', () => {
    it(`should create an action of type ${Actions.GET_ALERTS_START}`, () => {
      expect(Actions.getAlertsStart()).toEqual({
        type: Actions.GET_ALERTS_START,
      });
    });
  });

  it(`should create an action of type ${Actions.GET_ALERTS_SUCCESS}`, () => {
    const alerts = [];

    expect(Actions.getAlertsSuccess(alerts)).toEqual({
      type: Actions.GET_ALERTS_SUCCESS,
      payload: {
        data: alerts,
      },
      meta: {
        page: 1,
        total: 0,
      },
    });

    expect(Actions.getAlertsSuccess(alerts, 2, 40)).toEqual({
      type: Actions.GET_ALERTS_SUCCESS,
      payload: {
        data: alerts,
      },
      meta: {
        page: 2,
        total: 40,
      },
    });
  });

  it(`should create an action of type ${Actions.GET_ALERTS_ERROR}`, () => {
    const error = new Error();

    expect(Actions.getAlertsError(error)).toEqual({
      type: Actions.GET_ALERTS_ERROR,
      payload: {
        data: error,
      },
      error: true,
    });
  });
});
