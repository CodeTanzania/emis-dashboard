import * as Actions from '../actions';
import { alertsMap, alerts } from '../reducers';

describe('Alerts:reducers', () => {
  describe('alertsMap', () => {
    let previousState = null;

    beforeEach(() => {
      /* create initial state for Alerts map */
      previousState = {
        center: [-6.179, 35.754],
        zoom: 7,
        points: [],
      };
    });

    it('should return default state when no initial alertsMap state is provided', () => {
      expect(alertsMap(undefined, {})).toEqual(previousState);
    });

    it('should return previous state when given invalid action type', () => {
      expect(
        alertsMap(previousState, {
          type: null,
        })
      ).toEqual(previousState);
    });
  });

  describe('alerts', () => {
    let previousState = null;

    beforeEach(() => {
      /* create initial state for Alerts */
      previousState = {
        data: [],
        page: 1,
        total: 0,
        selected: null,
        loading: false,
        filters: {},
        error: null,
      };
    });

    it('should return default state when no initial alert state is provided', () => {
      expect(alerts(undefined, {})).toEqual(previousState);
    });

    it('should return previous state when given invalid action type', () => {
      expect(
        alerts(previousState, {
          type: null,
        })
      ).toEqual(previousState);
    });

    it(`should handle ${Actions.GET_ALERTS_START}`, () => {
      const nextState = {
        ...previousState,
        loading: true,
      };
      expect(alerts(previousState, { type: Actions.GET_ALERTS_START })).toEqual(
        nextState
      );
    });

    it(`should handle ${Actions.GET_ALERTS_SUCCESS}`, () => {
      const action = {
        type: Actions.GET_ALERTS_SUCCESS,
        payload: {
          data: [],
        },
        meta: {
          page: 2,
          total: 200,
        },
      };

      const nextState = {
        ...previousState,
        data: [...action.payload.data],
        page: action.meta.page,
        total: action.meta.total,
      };

      expect(alerts(previousState, action)).toEqual(nextState);
    });

    it(`should handle ${Actions.GET_ALERTS_ERROR}`, () => {
      const error = {
        status: 404,
        code: 404,
        name: 'Error',
        message: 'Not Found',
        developerMessage: 'Not Found',
        userMessage: 'Not Found',
        error: 'Error',
        error_description: 'Not Found',
      };

      const action = {
        type: Actions.GET_ALERTS_ERROR,
        payload: { data: error },
        error: true,
      };

      const expectedState = {
        ...previousState,
        error: action.payload.data,
      };

      expect(alerts(previousState, action)).toEqual(expectedState);
    });
  });
});
