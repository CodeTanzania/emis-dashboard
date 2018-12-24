/*
 *------------------------------------------------------------------------------
 * Alerts action types
 *------------------------------------------------------------------------------
 */

/*  fetch action types */
export const GET_ALERTS_START = 'GET_ALERTS_START';
export const GET_ALERTS_SUCCESS = 'GET_ALERTS_SUCCESS';
export const GET_ALERTS_ERROR = 'GET_ALERTS_ERROR';

/*
 *------------------------------------------------------------------------------
 * Alerts action creators
 *------------------------------------------------------------------------------
 */

/**
 * Action dispatched to fetch alerts from the API
 *
 * @function
 * @name getAlertsStart
 *
 * @returns {Object} - Redux action for fetching alerts
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getAlertsStart() {
  return {
    type: GET_ALERTS_START,
  };
}

/**
 * Action dispatched when fetching alerts from that API is successfully
 *
 * @function
 * @name getAlertsSuccess
 *
 * @param {Object[]} plans - Array of alerts from API
 * @param {number} page - page the results is from
 * @param {number} total - total number of alerts in the API
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getAlertsSuccess(alerts, page = 1, total = 0) {
  return {
    type: GET_ALERTS_SUCCESS,
    payload: {
      data: alerts,
    },
    meta: {
      page,
      total,
    },
  };
}

/**
 * Action dispatched when fetching alerts from that API fails
 *
 * @function
 * @name getAlertsError
 *
 * @param {Object} error - Error object when fetching alerts fails
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getAlertsError(error) {
  return {
    type: GET_ALERTS_ERROR,
    payload: {
      data: error,
    },
    error: true,
  };
}

/*
 * -----------------------------------------------------------------------------
 * Thunks
 * -----------------------------------------------------------------------------
 */

/**
 * A Thunk function which perform asynchronous fetching of alerts from the API
 *
 * @function
 * @name getPlans
 *
 * @param {Object} params - Params to pass to the API client
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getAlerts() {
  return (dispatch, getState, { API }) => {
    dispatch(getAlertsStart());

    return API.etAlerts()
      .then(({ data: res }) =>
        dispatch(getAlertsSuccess(res.data, res.page, res.total))
      )
      .catch(err => dispatch(getAlertsError(err)));
  };
}
