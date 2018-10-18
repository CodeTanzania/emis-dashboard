/*
 *------------------------------------------------------------------------------
 * Plan Reducers
 *------------------------------------------------------------------------------
 */

/**
 * Plans reducer
 *
 * @function
 * @name plans
 *
 * @param {Object} state - Initial state
 * @param {Object} action - Redux action object
 * @param {string} action.type - Action type
 * @param {Object} action.payload - Action payload
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function plans(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

/**
 * Selected plan reducer
 *
 * @function
 * @name selectedPlan
 *
 * @param {Object} state - Initial state
 * @param {Object} action - Redux action object
 * @param {string} action.type - Action type
 * @param {Object} action.payload - Action payload(data)
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function selectedPlan(state = null, action) {
  switch (action.type) {
    default:
      return state;
  }
}
