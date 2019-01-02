import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as API from '../../../common/API';
import * as Actions from '../actions';
import { alert, polygons, polygon } from '../../../common/data/alertTestData';

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

    it(`should create an action of type ${Actions.SET_SELECTED_ALERT}`, () => {
      expect(Actions.setSelectedAlert(alert)).toEqual({
        type: Actions.SET_SELECTED_ALERT,
        payload: {
          data: alert,
        },
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
    it(`should create an action of type ${Actions.SAVE_DRAWN_GEOMETRY}`, () => {
      const { geometry } = polygon;
      expect(Actions.saveDrawnGeometry(geometry)).toEqual({
        type: Actions.SAVE_DRAWN_GEOMETRY,
        payload: {
          data: geometry,
        },
      });
    });
    it(`should create an action of type ${
      Actions.SET_SHOW_SELECTED_GEOJSON
    }`, () => {
      expect(Actions.setShowSelectedGeojson(true)).toEqual({
        type: Actions.SET_SHOW_SELECTED_GEOJSON,
        payload: {
          data: true,
        },
      });
    });

    it(`should create an action of type ${
      Actions.SET_SHOWPOINTS_VALUE
    }`, () => {
      expect(Actions.setShowPiontsValue(true)).toEqual({
        type: Actions.SET_SHOWPOINTS_VALUE,
        payload: {
          data: true,
        },
      });
    });
    it(`should create an action of type ${
      Actions.SET_SELECTED_GEOJSON
    }`, () => {
      expect(Actions.setSelectedGeoJson(polygons)).toEqual({
        type: Actions.SET_SELECTED_GEOJSON,
        payload: {
          data: polygons,
        },
      });
    });
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
    it(`should dispatch action of type ${Actions.SAVE_DRAWN_GEOMETRY}`, () => {
      const { geometry } = polygon;
      const store = mockStore({
        alertsMap: {
          drawnGeometry: null,
        },
      });
      const expectedActions = [
        {
          type: Actions.SAVE_DRAWN_GEOMETRY,
          payload: {
            data: geometry,
          },
        },
      ];
      store.dispatch(Actions.saveDrawnGeometry(geometry));
      expect(store.getActions()).toEqual(expectedActions);
    });
    it(`should dispatch  actions of type ${Actions.SET_SELECTED_ALERT} and ${
      Actions.SET_SELECTED_GEOJSON
    } `, () => {
      const store = mockStore({
        alerts: {
          data: [alert],
          selected: null,
        },
        alertsMap: {
          points: [],
        },
      });

      const selectedAlertId = '5c188aecb470d100048dd5fe';

      const expectedActions = [
        {
          type: Actions.SET_SELECTED_ALERT,
          payload: {
            data: alert,
          },
        },
        {
          type: Actions.SET_SELECTED_GEOJSON,
          payload: {
            data: polygons,
          },
        },
      ];

      store.dispatch(Actions.getSelectedAlertFromState(selectedAlertId));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it(`should dispatch  actions of type ${Actions.SET_SELECTED_ALERT} and ${
      Actions.SET_SELECTED_GEOJSON
    } when selected alert id is null`, () => {
      const store = mockStore({
        alerts: {
          data: [alert],
          selected: null,
        },
        alertsMap: {
          points: [],
        },
      });

      const selectedAlertId = null;

      const expectedActions = [
        {
          type: Actions.SET_SELECTED_ALERT,
          payload: {
            data: null,
          },
        },
        {
          type: Actions.SET_SELECTED_GEOJSON,
          payload: {
            data: [],
          },
        },
      ];

      store.dispatch(Actions.getSelectedAlertFromState(selectedAlertId));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it(`should dispatch an action of type ${
      Actions.SET_SHOW_SELECTED_GEOJSON
    }`, () => {
      const store = mockStore({
        alertsMap: {
          showShapes: false,
        },
      });

      const expectedActions = [
        {
          type: Actions.SET_SHOW_SELECTED_GEOJSON,
          payload: {
            data: true,
          },
        },
      ];

      store.dispatch(Actions.showSeleteAlertShape(true));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it(`should dispatch an action of type ${
      Actions.SET_SHOWPOINTS_VALUE
    }`, () => {
      const store = mockStore({
        alertsMap: {
          showPoints: false,
        },
      });

      const expectedActions = [
        {
          type: Actions.SET_SHOWPOINTS_VALUE,
          payload: {
            data: true,
          },
        },
      ];

      store.dispatch(Actions.showAlertPoints(true));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it(`should dispatch  actions of type ${Actions.STORE_MAP_POINTS}, ${
      Actions.GET_ALERTS_SUCCESS
    } and  ${
      Actions.SET_SHOWPOINTS_VALUE
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
        {
          type: Actions.SET_SHOWPOINTS_VALUE,
          payload: {
            data: true,
          },
        },
      ];

      return store.dispatch(Actions.getAlerts()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
