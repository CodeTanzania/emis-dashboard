


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


/* initial state Alerts Map state */
const defaultAlertsMapState = {
        center: [-6.179, 35.754],
        zoom: 7
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
        default:
            return state;
    }
}