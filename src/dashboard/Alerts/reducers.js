import {
  GET_ALERTS_START,
  GET_ALERTS_SUCCESS,
  GET_ALERTS_ERROR,
  GET_ALERT_START,
  GET_ALERT_SUCCESS,
  GET_ALERT_ERROR,
  STORE_MAP_POINTS,
  SET_SELECTED_ALERT,
  SET_SELECTED_GEOJSON,
  SET_SHOW_SELECTED_GEOJSON,
  SET_SHOWPOINTS_VALUE,
  SAVE_DRAWN_GEOMETRY,
} from './actions';

/**
 * Store keys added by the reducers in this file
 *
 * alertsMap: Object
 * alerts: Object
 * }
 */

/* initial Alerts Map state */
const defaultAlertsMapState = {
  center: [-6.179, 35.754],
  zoom: 7,
  points: [],
  shapes: [],
  drawnGeometry: null,
  showPoints: false,
  showShapes: false,
};

/* initial Alerts state */
const defaultAlertsState = {
  data: [],
  page: 1,
  total: 0,
  selected: null,
  loading: false,
  loadingSelected: false,
  filters: {},
  error: null,
};

/*
 *------------------------------------------------------------------------------
 * AlertsMap  Reducers
 *------------------------------------------------------------------------------
 */

/**
 * AlertsMap reducer
 * Is the field in the store which holds data for the Alerts map.
 *
 * @function
 * @name alertsMap
 *
 * @param {Object} state={} - Initial state
 * @param {Object} action - Redux action object
 * @param {string} action.type - Action type
 * @param {Object} action.payload - Action payload
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function alertsMap(state = defaultAlertsMapState, action) {
  switch (action.type) {
    case STORE_MAP_POINTS:
      return Object.assign({}, state, {
        points: action.payload.data,
      });
    case SET_SELECTED_GEOJSON:
      return Object.assign({}, state, {
        shapes: action.payload.data,
      });
    case SET_SHOW_SELECTED_GEOJSON:
      return Object.assign({}, state, {
        showShapes: action.payload.data,
      });
    case SET_SHOWPOINTS_VALUE:
      return Object.assign({}, state, {
        showPoints: action.payload.data,
      });
    case SAVE_DRAWN_GEOMETRY:
      return Object.assign({}, state, {
        drawnGeometry: action.payload.data,
      });
    default:
      return state;
  }
}

/*
 *------------------------------------------------------------------------------
 * Alerts  Reducers
 *------------------------------------------------------------------------------
 */

/**
 * alerts reducer
 * Is the field in the store which holds data for the Alerts map.
 *
 * @function
 * @name alerts
 *
 * @param {Object} state={} - Initial state
 * @param {Object} action - Redux action object
 * @param {string} action.type - Action type
 * @param {Object} action.payload - Action payload
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function alerts(state = defaultAlertsState, action) {
  switch (action.type) {
    case GET_ALERTS_START:
      return Object.assign({}, state, {
        loading: true,
      });
    case GET_ALERTS_SUCCESS:
      return Object.assign({}, state, {
        data: [...action.payload.data],
        page: action.meta.page,
        total: action.meta.total,
        loading: false,
      });
    case GET_ALERTS_ERROR:
      return Object.assign({}, state, {
        error: action.payload.data,
        loadingSelected: false,
      });
    case GET_ALERT_START:
      return Object.assign({}, state, {
        loadingSelected: true,
      });
    case GET_ALERT_SUCCESS:
      return Object.assign({}, state, {
        selected: action.payload.data,
        loadingSelected: false,
      });
    case GET_ALERT_ERROR:
      return Object.assign({}, state, {
        error: action.payload.data,
        loadingSelected: false,
      });
    case SET_SELECTED_ALERT:
      return Object.assign({}, state, {
        selected: action.payload.data,
      });
    default:
      return state;
  }
}
