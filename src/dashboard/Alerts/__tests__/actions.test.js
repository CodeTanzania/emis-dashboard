import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as API from '../../../common/API';
import * as Actions from '../actions';

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

  describe('AlertsMap: Action Creators', () => {
    it(`should create an action of type ${Actions.STORE_MAP_POINTS}`, () => {
      const alertPoints = [];

      expect(Actions.storeMapPoints(alertPoints)).toEqual({
        type: Actions.STORE_MAP_POINTS,
        payload: {
          data: alertPoints,
        },
      });
    });
  });

  describe(`Thunks`, () => {
    it(`should dispatch an actions of type ${Actions.STORE_MAP_POINTS} and ${
      Actions.GET_ALERTS_SUCCESS
    } when fetching alerts is successfully`, () => {
      const store = mockStore({
        alerts: {
          data: [],
        },
        alertsMap: {
          points: [],
        },
      });

      // mock API calls
      API.getAlerts.mockResolvedValueOnce({
        data: {
          data: [],
          pages: 2,
          total: 200,
          page: 1,
        },
      });

      const expectedActions = [
        { type: Actions.GET_ALERTS_START },
        {
          type: Actions.GET_ALERTS_SUCCESS,
          payload: {
            data: [],
          },
          meta: {
            page: 1,
            total: 200,
          },
        },
        {
          type: Actions.STORE_MAP_POINTS,
          payload: {
            data: [],
          },
        },
      ];

      return store.dispatch(Actions.getAlerts()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
