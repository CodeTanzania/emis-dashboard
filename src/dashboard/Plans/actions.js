/*
 *------------------------------------------------------------------------------
 * Plan action types
 *------------------------------------------------------------------------------
 */

/* fetch action types */
export const FETCH_PLANS = 'FETCH_PLANS';
export const FETCH_PLAN_ACTIONS = 'FETCH_PLAN_ACTIONS';
export const FETCH_PLAN_ACTION_TASKS = 'FETCH_PLAN_ACTION_TASKS';

/* select action types */
export const SELECT_PLAN = 'SELECT_PLAN';
export const SELECT_ACTION = 'SELECT_ACTION';
export const SELECT_TASK = 'SELECT_TASK';

/* add action types */
export const ADD_PLAN = 'ADD_PLAN';
export const ADD_ACTION = 'ADD_ACTION';
export const ADD_ACTION_TASK = 'ADD_ACTION_TASK';

/* update action types */
export const UPDATE_PLAN = 'UPDATE_PLAN';
export const UPDATE_ACTION = 'UPDATE_ACTION';
export const UPDATE_TASK = 'UPDATE_TASK';

/* archive action types */
export const ARCHIVE_PLAN = 'ARCHIVE_PLAN';
export const ARCHIVE_ACTION = 'ARCHIVE_ACTION';

/*
 *------------------------------------------------------------------------------
 * Plan action creators
 *------------------------------------------------------------------------------
 */

/**
 * Action to fetch plan from API
 *
 * @function
 * @name fetchPlans
 *
 * @returns {Object} - Redux action for fetching plans
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function fetchPlans() {
  return {
    type: FETCH_PLANS,
  };
}

/**
 * Action to fetch plan actions from API
 *
 * @function
 * @name fetchActions
 *
 * @returns {Object} -
 * @param {Object} planId - Redux action for fetching plan actions
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function fetchPlanActions(planId) {
  return {
    type: FETCH_PLAN_ACTIONS,
    payload: {
      planId,
    },
  };
}
