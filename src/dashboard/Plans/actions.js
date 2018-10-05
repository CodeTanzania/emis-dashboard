/*
 *------------------------------------------------------------------------------
 * Plan action types
 *------------------------------------------------------------------------------
 */

/* fetch action types */
export const PLANS_GET_START = 'PLANS_GET_START';
export const PLANS_GET_SUCCESS = 'PLANS_GET_SUCCESS';
export const PLANS_GET_ERROR = 'PLANS_GET_ERROR';
export const PLAN_ACTIVITIES_GET_START = 'PLAN_ACTIVITIES_GET_START';
export const PLAN_ACTIVITIES_GET_SUCCESS = 'PLAN_ACTIVITIES_GET_SUCCESS';
export const PLAN_ACTIVITIES_GET_ERROR = 'PLAN_ACTIVITIES_GET_ERROR';

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
 * Action dispatched to fetch plans from the API
 *
 * @function
 * @name fetchPlans
 *
 * @returns {Object} - Redux action for fetching plans
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlans() {
  return {
    type: PLANS_GET_START,
    meta: {
      page: 1,
    },
  };
}

/**
 * Action dispatched when fetching plans from that API is successfully
 *
 * @function
 * @name getPlansSuccess
 *
 * @param {Object[]} plans - Array of plans from API
 * @param {number} page - page the results is from
 * @param {number} total - total number of plans in the API
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlansSuccess(plans, page = 1, total = 0) {
  return {
    type: PLANS_GET_SUCCESS,
    payload: {
      data: plans,
    },
    meta: {
      page,
      total,
    },
  };
}

/**
 * Action dispatched when fetching plans from that API fails
 *
 * @function
 * @name getPlansError
 *
 * @param {Object} error - Error object when fetching plans fails
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlansError(error) {
  return {
    type: PLANS_GET_ERROR,
    payload: {
      data: error,
    },
    error: true,
  };
}

/**
 * Action to fetch plan actions from API
 *
 * @function
 * @name fetchActions
 *
 * @param {Object} planId - Redux action for fetching plan actions
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function fetchPlanActivities(planId) {
  return {
    type: PLAN_ACTIVITIES_GET_START,
    payload: {
      data: planId,
    },
  };
}
