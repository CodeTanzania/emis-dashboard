/*
 *------------------------------------------------------------------------------
 * Plan action types
 *------------------------------------------------------------------------------
 */

/* fetch action types */
export const GET_PLANS_START = 'GET_PLANS_START';
export const GET_PLANS_SUCCESS = 'GET_PLANS_SUCCESS';
export const GET_PLANS_ERROR = 'GET_PLANS_ERROR';

/* add action types */
export const POST_PLAN_START = 'POST_PLAN_START';
export const POST_PLAN_SUCCESS = 'POST_PLAN_SUCCESS';
export const POST_PLAN_ERROR = 'POST_PLAN_ERROR';

/* edit action types */
export const PUT_PLAN_START = 'PUT_PLAN_START';
export const PUT_PLAN_SUCCESS = 'PUT_PLAN_SUCCESS';
export const PUT_PLAN_ERROR = 'PUT_PLAN_ERROR';

/* delete action types */
export const DELETE_PLAN_START = 'DELETE_PLAN_START';
export const DELETE_PLAN_SUCCESS = 'DELETE_PLAN_SUCCESS';
export const DELETE_PLAN_ERROR = 'DELETE_PLAN_ERROR';

/* select action types */
export const SELECT_PLAN = 'SELECT_PLAN';

/*
 *------------------------------------------------------------------------------
 * Plan activity action types
 *------------------------------------------------------------------------------
 */
/* get/fetch actions type */
export const GET_PLAN_ACTIVITIES_START = 'GET_PLAN_ACTIVITIES_START';
export const GET_PLAN_ACTIVITIES_SUCCESS = 'GET_PLAN_ACTIVITIES_SUCCESS';
export const GET_PLAN_ACTIVITIES_ERROR = 'GET_PLAN_ACTIVITIES_ERROR';

/* post action types */
export const POST_PLAN_ACTIVITY_START = 'POST_PLAN_ACTIVITY_START';
export const POST_PLAN_ACTIVITY_SUCCESS = 'POST_PLAN_ACTIVITY_SUCCESS';
export const POST_PLAN_ACTIVITY_ERROR = 'POST_PLAN_ACTIVITY_ERROR';

/* edit action types */
export const PUT_PLAN_ACTIVITY_START = 'PUT_PLAN_ACTIVITY_START';
export const PUT_PLAN_ACTIVITY_SUCCESS = 'PUT_PLAN_ACTIVITY_SUCCESS';
export const PUT_PLAN_ACTIVITY_ERROR = 'PUT_PLAN_ACTIVITY_ERROR';

/* select action types */
export const SELECT_PLAN_ACTIVITY = 'SELECT_PLAN_ACTIVITY';

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
    type: GET_PLANS_START,
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
    type: GET_PLANS_SUCCESS,
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
    type: GET_PLANS_ERROR,
    payload: {
      data: error,
    },
    error: true,
  };
}

/**
 * Action dispatched when posting plan to the API
 *
 * @function
 * @name postPlan
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlan() {
  return {
    type: POST_PLAN_START,
  };
}

/**
 * Action dispatched when posting plan to the API is successful
 *
 * @param {Object[]} plans - updated list of plans from the API after post action
 * @param {number} page=1 - current plan page
 * @param {number} total=0 - total number of plans in the API
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanSuccess(plans, page = 1, total = 0) {
  return {
    type: POST_PLAN_SUCCESS,
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
 * Action dispatched when posting plan to the API fails
 *
 * @param {Error} error - Error object when posting plans fails
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanError(error) {
  return {
    type: POST_PLAN_SUCCESS,
    payload: {
      data: error,
    },
    error: true,
  };
}

/**
 * Action dispatched when fetching plan activities from API
 *
 * @function
 * @name fetchActions
 *
 * @param {Object} planId - Redux action for fetching plan actions
 * @param {number} page - Page to fetch plan activities from.
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlanActivities() {
  return {
    type: GET_PLAN_ACTIVITIES_START,
  };
}

/**
 * Action dispatched when fetching plan activities from API is successful
 *
 * @function
 * @name getPlanActivitiesSuccess
 *
 * @param {Object[]} activities - list of activities from the server
 * @param {number} page - current activities page number
 * @param {number} total - total number of activities in a plan
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlanActivitiesSuccess(activities, page = 1, total = 0) {
  return {
    type: GET_PLAN_ACTIVITIES_SUCCESS,
    payload: {
      data: activities,
    },
    meta: {
      page,
      total,
    },
  };
}

/**
 * Action dispatched when fetching plan activities from API fails
 *
 * @function
 * @name getPlanActivitiesError
 *
 * @param {Error} error - Error instance
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlanActivitiesError(error) {
  return {
    type: GET_PLAN_ACTIVITIES_ERROR,
    payload: {
      data: error,
    },
    error: true,
  };
}
