import groupBy from 'lodash/groupBy';
import isEmpty from 'lodash/isEmpty';
import merge from 'lodash/merge';

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

/* form handling action types */
export const OPEN_PLAN_FORM = 'OPEN_PLAN_FORM';
export const CLOSE_PLAN_FORM = 'CLOSE_PLAN_FORM';

/*
 *------------------------------------------------------------------------------
 * Plan activity action types
 *------------------------------------------------------------------------------
 */

/* get/fetch actions types */
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

/* handling filtering plans */
export const UPDATE_PLAN_FILTERS = 'UPDATE_PLAN_FILTERS';
export const RESET_PLAN_FILTERS = 'RESET_PLAN_FILTERS';

/* form handling action types */
export const OPEN_PLAN_ACTIVITY_FORM = 'OPEN_PLAN_ACTIVITY_FORM';
export const CLOSE_PLAN_ACTIVITY_FORM = 'CLOSE_PLAN_ACTIVITY_FORM';

/*
 *------------------------------------------------------------------------------
 * Plan activity Procedures action types
 *------------------------------------------------------------------------------
 */

/* get/fetch actions types */
export const GET_PLAN_ACTIVITY_PROCEDURES_START =
  'GET_PLAN_ACTIVITY_PROCEDURES_START';
export const GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS =
  'GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS';
export const GET_PLAN_ACTIVITY_PROCEDURES_ERROR =
  'GET_PLAN_ACTIVITY_PROCEDURES_ERROR';

/* post action types */
export const POST_PLAN_ACTIVITY_PROCEDURES_START =
  'POST_PLAN_ACTIVITY_PROCEDURES_START';
export const POST_PLAN_ACTIVITY_PROCEDURES_SUCCESS =
  'POST_PLAN_ACTIVITY_PROCEDURES_SUCCESS';
export const POST_PLAN_ACTIVITY_PROCEDURES_ERROR =
  'POST_PLAN_ACTIVITY_PROCEDURES_ERROR';

export const POST_PLAN_ACTIVITY_PROCEDURE_START =
  'POST_PLAN_ACTIVITY_PROCEDURE_START';
export const POST_PLAN_ACTIVITY_PROCEDURE_SUCCESS =
  'POST_PLAN_ACTIVITY_PROCEDURE_SUCCESS';
export const POST_PLAN_ACTIVITY_PROCEDURE_ERROR =
  'POST_PLAN_ACTIVITY_PROCEDURE_ERROR';

/* put action types */
export const PUT_PLAN_ACTIVITY_PROCEDURES_START =
  'PUT_PLAN_ACTIVITY_PROCEDURES_START';
export const PUT_PLAN_ACTIVITY_PROCEDURES_SUCCESS =
  'PUT_PLAN_ACTIVITY_PROCEDURES_SUCCESS';
export const PUT_PLAN_ACTIVITY_PROCEDURES_ERROR =
  'PUT_PLAN_ACTIVITY_PROCEDURES_ERROR';
export const PUT_PLAN_ACTIVITY_PROCEDURE_START =
  'PUT_PLAN_ACTIVITY_PROCEDURE_START';
export const PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS =
  'PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS';
export const PUT_PLAN_ACTIVITY_PROCEDURE_ERROR =
  'PUT_PLAN_ACTIVITY_PROCEDURE_ERROR';

/* select action types */
export const SELECT_PLAN_ACTIVITY_PROCEDURE = 'SELECT_PLAN_ACTIVITY_PROCEDURE';

/* form handling action types */
export const OPEN_PLAN_ACTIVITY_PROCEDURE_FORM =
  'OPEN_PLAN_ACTIVITY_PROCEDURE_FORM';
export const CLOSE_PLAN_ACTIVITY_PROCEDURE_FORM =
  'CLOSE_PLAN_ACTIVITY_PROCEDURE_FORM';

/*
 *------------------------------------------------------------------------------
 * Plan action creators
 *------------------------------------------------------------------------------
 */

/**
 * Action dispatched when a plan is selected
 *
 * @function
 * @name selectPlan
 *
 * @param {Object} plan - Selected plan object
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function selectPlan(plan) {
  return {
    type: SELECT_PLAN,
    payload: { data: plan },
  };
}

/**
 * Action dispatched when plan filters changes
 *
 * @function
 * @name updatePlanFilters
 *
 * @param {Object} filters - Filters applied when fetching plans
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function updatePlanFilters(filters) {
  return {
    type: UPDATE_PLAN_FILTERS,
    payload: {
      data: filters,
    },
  };
}

/**
 * Reset plan filters
 *
 * @function
 * @name resetPlanFilters
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function resetPlanFilters() {
  return {
    type: RESET_PLAN_FILTERS,
    payload: {
      data: { incidentTypes: null },
    },
  };
}

/**
 * Action dispatched when plan form is opened
 *
 * @function
 * @name openPlanForm
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function openPlanForm() {
  return {
    type: OPEN_PLAN_FORM,
  };
}

/**
 * Action dispatched when plan form is closed
 *
 * @function
 * @name closePlanForm
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function closePlanForm() {
  return {
    type: CLOSE_PLAN_FORM,
  };
}

/**
 * Action dispatched to fetch plans from the API
 *
 * @function
 * @name fetchPlansStart
 *
 * @returns {Object} - Redux action for fetching plans
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlansStart() {
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
 * @name postPlanStart
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanStart() {
  return {
    type: POST_PLAN_START,
  };
}

/**
 * Action dispatched when posting plan to the API is successful
 *
 * @function
 * @name postPlanSuccess
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanSuccess() {
  return {
    type: POST_PLAN_SUCCESS,
  };
}

/**
 * Action dispatched when posting plan to the API fails
 *
 * @function
 * @name postPlanError
 *
 * @param {Error} error - Error object when posting plans fails
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanError(error) {
  return {
    type: POST_PLAN_ERROR,
    payload: {
      data: error,
    },
    error: true,
  };
}

/**
 * Action dispatched when updating plan to the API starts
 *
 * @function
 * @name putPlanStart
 *
 * @returns {Object} - Redux Action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function putPlanStart() {
  return {
    type: PUT_PLAN_START,
  };
}

/**
 * Action dispatched when updating plan to the API is successfully
 *
 * @function
 * @name putPlanSuccess
 *
 * @returns {Object} - Redux Action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function putPlanSuccess() {
  return {
    type: PUT_PLAN_SUCCESS,
  };
}

/**
 * Action dispatched when updating plan to the API fails
 *
 * @function
 * @name putPlanError
 *
 * @param {Error} error - Error Instance
 * @returns {Object} - Redux Action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function putPlanError(error) {
  return {
    type: PUT_PLAN_ERROR,
    payload: { data: error },
    error: true,
  };
}

/**
 * Action dispatched when plan activity is selected
 *
 * @param {Object} activity
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function selectPlanActivity(activity) {
  return {
    type: SELECT_PLAN_ACTIVITY,
    payload: {
      data: activity,
    },
  };
}

/**
 * Action dispatched when plan activity is opened
 *
 * @function
 * @name openPlanActivityForm
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function openPlanActivityForm() {
  return {
    type: OPEN_PLAN_ACTIVITY_FORM,
  };
}

/**
 * Action dispatched when plan activity is closed
 *
 * @function
 * @name openPlanActivityForm
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function closePlanActivityForm() {
  return {
    type: CLOSE_PLAN_ACTIVITY_FORM,
  };
}

/**
 * Action dispatched when fetching plan activities from API
 *
 * @function
 * @name getPlanActivitiesStart
 *
 * @param {Object} planId - Redux action for fetching plan actions
 * @param {number} page - Page to fetch plan activities from.
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlanActivitiesStart() {
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

/**
 * Action dispatched when posting plan activity to the API
 *
 * @function
 * @name postPlanActivityStart
 *
 * @return {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanActivityStart() {
  return {
    type: POST_PLAN_ACTIVITY_START,
  };
}

/**
 * Action dispatched when posting plan activity to the API is successfully
 *
 * @function
 * @name postPlanActivitySuccess
 *
 * @return {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanActivitySuccess() {
  return {
    type: POST_PLAN_ACTIVITY_SUCCESS,
  };
}

/**
 * Action dispatched when posting plan activity to the API fails
 *
 * @function
 * @name postPlanActivityError
 *
 * @param {Error} error - Error instance
 * @return {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanActivityError(error) {
  return {
    type: POST_PLAN_ACTIVITY_ERROR,
    payload: {
      data: error,
    },
    error: true,
  };
}

/**
 * Action dispatched when updating plan activity to the API starts
 *
 * @function
 * @name putPlanActivityStart
 *
 * @returns {Object} - Redux Action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function putPlanActivityStart() {
  return {
    type: PUT_PLAN_ACTIVITY_START,
  };
}

/**
 * Action dispatched when updating plan activity to the API is successfully
 *
 * @function
 * @name putPlanActivitySuccess
 *
 * @returns {Object} - Redux Action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function putPlanActivitySuccess() {
  return {
    type: PUT_PLAN_ACTIVITY_SUCCESS,
  };
}

/**
 * Action dispatched when updating plan activity to the API fails
 *
 * @function
 * @name putPlanActivityError
 *
 * @param {Error} error - Error Instance
 * @returns {Object} - Redux Action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function putPlanActivityError(error) {
  return {
    type: PUT_PLAN_ACTIVITY_ERROR,
    payload: {
      data: error,
    },
    error: true,
  };
}

/**
 * Action dispatched when plan activity procedure is selected
 *
 * @function
 * @name selectPlanActivityProcedure
 *
 * @param {Object} procedure - Selected procedure
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function selectPlanActivityProcedure(procedure) {
  return {
    type: SELECT_PLAN_ACTIVITY_PROCEDURE,
    payload: { data: procedure },
  };
}

/**
 * Action dispatched when plan activity procedure(SOP) form is opened
 *
 * @function
 * @name openPlanActivityProcedureForm
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function openPlanActivityProcedureForm() {
  return {
    type: OPEN_PLAN_ACTIVITY_PROCEDURE_FORM,
  };
}

/**
 * Action dispatched when plan activity procedure(SOP) form is closed
 *
 * @function
 * @name openPlanActivityProcedureForm
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function closePlanActivityProcedureForm() {
  return {
    type: CLOSE_PLAN_ACTIVITY_PROCEDURE_FORM,
  };
}

/**
 * Action dispatched when fetching plan activity procedures from API
 *
 * @function
 * @name getPlanActivityProceduresStart
 *
 * @param {Object} planId - Redux action for fetching plan actions
 * @param {number} page - Page to fetch plan activities from.
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlanActivityProceduresStart() {
  return {
    type: GET_PLAN_ACTIVITY_PROCEDURES_START,
  };
}

/**
 * Action dispatched when fetching plan activity Procedures from API is successful
 *
 * @function
 * @name getPlanActivityProceduresSuccess
 *
 * @param {Object[]} activities - list of activities from the server
 * @param {number} page - current activities page number
 * @param {number} total - total number of activities in a plan
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlanActivityProceduresSuccess(procedures, page, total) {
  return {
    type: GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS,
    payload: {
      data: procedures,
    },
    meta: {
      page,
      total,
    },
  };
}

/**
 * Action dispatched when fetching plan activity procedures from API fails
 *
 * @function
 * @name getPlanActivityProceduresError
 *
 * @param {Error} error - Error instance
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlanActivityProceduresError(error) {
  return {
    type: GET_PLAN_ACTIVITY_PROCEDURES_ERROR,
    payload: {
      data: error,
    },
    error: true,
  };
}

/**
 * Action dispatched when posting plan activity procedure to the API starts
 *
 * @function
 * @name postPlanActivityProcedureStart
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanActivityProcedureStart() {
  return {
    type: POST_PLAN_ACTIVITY_PROCEDURE_START,
  };
}

/**
 * Action dispatched when posting plan activity procedure to the API is successfully
 *
 * @function
 * @name postPlanActivityProcedureSuccess
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanActivityProcedureSuccess() {
  return {
    type: POST_PLAN_ACTIVITY_PROCEDURE_SUCCESS,
  };
}

/**
 * Action dispatched when posting plan activity procedure to the API fails
 *
 * @function
 * @name postPlanActivityProcedureError
 *
 * @param {Object} error - Error instance
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanActivityProcedureError(error) {
  return {
    type: POST_PLAN_ACTIVITY_PROCEDURE_ERROR,
    payload: {
      data: error,
    },
    error: true,
  };
}

/**
 * Action dispatched when updating plan activity procedure to the API starts
 *
 * @function
 * @name putPlanActivityProcedureStart
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function putPlanActivityProcedureStart() {
  return {
    type: PUT_PLAN_ACTIVITY_PROCEDURE_START,
  };
}

/**
 * Action dispatched when updating plan activity procedure in the API is successfully
 *
 * @function
 * @name putPlanActivityProcedureSuccess
 *
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function putPlanActivityProcedureSuccess() {
  return {
    type: PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS,
  };
}

/**
 * Action dispatched when updating plan activity procedure in the API fails
 *
 * @function
 * @name putPlanActivityProcedureError
 *
 * @param {Error} error - Error Instance
 * @returns {Object} - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function putPlanActivityProcedureError(error) {
  return {
    type: PUT_PLAN_ACTIVITY_PROCEDURE_ERROR,
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
 * A Thunk function which perform asynchronous fetching of plans from the API
 *
 * @function
 * @name getPlans
 *
 * @param {Object} params - Params to pass to the API client
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlans(params) {
  return (dispatch, getState, API) => {
    const { filters } = getState().plans;

    let allParams = params;
    if (!isEmpty(filters.incidentTypes)) {
      allParams = merge({}, params, {
        filter: { incidentType: { $in: filters.incidentTypes } },
      });
    }

    dispatch(getPlansStart());

    return API.getPlans(allParams)
      .then(response => {
        dispatch(
          getPlansSuccess(
            response.data.data,
            response.data.page,
            response.data.total
          )
        );
      })
      .catch(error => {
        dispatch(getPlansError(error));
      });
  };
}

export function postPlan(plan) {
  return (dispatch, getState, API) => {
    dispatch(postPlanStart());
    return API.postPlan(plan)
      .then(() => {
        dispatch(postPlanSuccess());
        dispatch(getPlans());
      })
      .catch(error => {
        dispatch(postPlanError(error));
      });
  };
}

/**
 * A thunk function which performs asynchronous updating of plan
 * to the API
 *
 * @function
 * @name putPlan
 *
 * @param {Object} plan - Updated plan object
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function putPlan(plan) {
  return (dispatch, getState, API) => {
    dispatch(putPlanStart());

    return API.putPlan(plan)
      .then(() => {
        dispatch(putPlanSuccess());
        dispatch(getPlans());
      })
      .catch(error => {
        dispatch(putPlanError(error));
      });
  };
}

/**
 * A thunk function which perform asynchronous fetching of plan activities from API
 *
 * @function
 * @name getPlanActivities
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlanActivities() {
  return (dispatch, getState, API) => {
    dispatch(getPlanActivitiesStart());

    const planId = getState().selectedPlan._id; //eslint-disable-line

    return API.getPlanActivities(planId)
      .then(response => {
        const data = groupBy(response.data.data, 'phase');
        dispatch(
          getPlanActivitiesSuccess(
            data,
            response.data.page,
            response.data.total
          )
        );
      })
      .catch(error => {
        dispatch(getPlanActivitiesError(error));
      });
  };
}

/**
 * A thunk function which perform asynchronous posting of plan activities to the API
 *
 * @function
 * @name postPlanActivity
 *
 * @param {Object} activity - Activity object to from the activity form
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanActivity(activity) {
  return (dispatch, getState, API) => {
    dispatch(postPlanActivityStart());

    const plan = getState().selectedPlan._id; //eslint-disable-line
    const incidentType = getState().selectedPlan.incidentType._id; // eslint-disable-line

    const data = Object.assign({}, activity, { plan, incidentType });

    return API.postPlanActivity(data)
      .then(() => {
        dispatch(postPlanActivitySuccess());
        dispatch(getPlanActivities());
      })
      .catch(error => {
        dispatch(postPlanActivityError(error));
      });
  };
}

/**
 * A thunk function which performs asynchronous updating of plan activity
 * to the API
 *
 * @function
 * @name putPlanActivity
 *
 * @param {Object} activity - Updated activity object
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function putPlanActivity(activity) {
  return (dispatch, getState, API) => {
    dispatch(putPlanActivityStart());

    return API.putPlanActivity(activity)
      .then(() => {
        dispatch(putPlanActivitySuccess());
        dispatch(getPlanActivities());
      })
      .catch(error => {
        dispatch(putPlanActivityError(error));
      });
  };
}

/**
 * A thunk function which perform asynchronous fetching of plan activity
 * procedures from API
 *
 * @function
 * @name getPlanActivityProcedures
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlanActivityProcedures() {
  return (dispatch, getState, API) => {
    dispatch(getPlanActivityProceduresStart());

    const activityId = getState().selectedPlanActivity._id; //eslint-disable-line

    return API.getPlanActivityProcedures(activityId)
      .then(response => {
        dispatch(
          getPlanActivityProceduresSuccess(
            response.data.data,
            response.data.page,
            response.data.total
          )
        );
      })
      .catch(error => {
        dispatch(getPlanActivityProceduresError(error));
      });
  };
}

/**
 * A thunk function which perform asynchronous posting of plan activity
 * procedures from API
 *
 * @function
 * @name postPlanActivityProcedure
 *
 * @param {Object} procedure - Procedure data from procedure(SOP) form
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanActivityProcedure(procedure) {
  return (dispatch, getState, API) => {
    dispatch(postPlanActivityProcedureStart());

    const activity = getState().selectedPlanActivity._id; // eslint-disable-line
    const plan = getState().selectedPlanActivity.plan._id; // eslint-disable-line
    const incidentType = getState().selectedPlanActivity.incidentType._id; // eslint-disable-line
    const data = Object.assign({}, { activity, plan, incidentType }, procedure);

    return API.postPlanActivityProcedure(data)
      .then(() => {
        dispatch(postPlanActivityProcedureSuccess());
        dispatch(getPlanActivityProcedures());
      })
      .catch(error => {
        dispatch(postPlanActivityProcedureError(error));
      });
  };
}

/**
 * A thunk function which performs asynchronous updating of plan activity
 * procedure to the API
 *
 * @function
 * @name putPlanActivityProcedure
 *
 * @param {Object} procedure - Updated procedure object
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function putPlanActivityProcedure(procedure) {
  return (dispatch, getState, API) => {
    dispatch(putPlanActivityProcedureStart());

    return API.putPlanActivityProcedure(procedure)
      .then(() => {
        dispatch(putPlanActivityProcedureSuccess());
        dispatch(getPlanActivityProcedures());
      })
      .catch(error => {
        dispatch(putPlanActivityProcedureError(error));
      });
  };
}
