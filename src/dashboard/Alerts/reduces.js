


/**
 * Store keys added by the reducers in this file
 *
 * allAlerts: Array
 * selectedAlert: Object
 * alertFilter: Object
 * mapData: {
 *  center: Array
 *  zoom: number
 * }
 */


/* initial state */
const defaultAlertsState = {
    allAlerts: [],
    selectedAlert: null,
    alertFilter: {},
    mapData: {
        center: [-6.179, 35.754],
        zoom: 7
    }
}

/*
 *------------------------------------------------------------------------------
 * Alerts Reducers
 *------------------------------------------------------------------------------
 */

/**
* Alerts reducer
* Is the field in the store which hold the loaded alerts, selected alert from the
* API and data for the Alerts map.
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