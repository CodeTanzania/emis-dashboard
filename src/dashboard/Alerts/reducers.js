/**
 * Store keys added by the reducers in this file
 *
 * alertsMap: Object
 * alerts: Object
 * }
 */

/* initial state Alerts Map state */
const defaultAlertsMapState = {
  center: [-6.179, 35.754],
  zoom: 7,
};

/* initial state Alerts state */
const defaultAlertsState = {};

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
    default:
      return state;
  }
}
