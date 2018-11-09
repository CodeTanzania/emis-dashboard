import axios from './axios';

/**
 * Get Plans from the API
 *
 * @function
 * @name getPlans
 *
 * @param {Object} params - URL params to be sent to the API
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlans(params) {
  return axios.get('/plans', {
    params,
  });
}

/**
 * Create a new plan to the API
 *
 * @function
 * @name postPlan
 *
 * @param {Object} plan - Plan object to be persisted
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlan(plan) {
  return axios.post('/plans', plan);
}

/**
 * Edit plan
 *
 * @function
 * @name putPlan
 *
 * @param {string} planId - Plan unique ID
 * @param {Object} plan - Updates for the plan
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function putPlan(planId, plan) {
  return axios.put(`/plans/${planId}`, plan);
}

/**
 * Delete existing plan
 *
 * @function
 * @name deletePlan
 *
 * @param {string} planId - Plan unique ID
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function delPlan(planId) {
  return axios.delete(`/plans/${planId}`);
}

/**
 * Get Plans Activities from the API
 *
 * @function
 * @name getPlanActivities
 *
 * @param {string} planId - Plan unique ID
 * @param {number} page=1 - Page to retrieve results from
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlanActivities(planId, page = 1) {
  return axios.get(`/activities`, {
    params: {
      page,
      limit: 100, // for testing purpose remove this after testing
      filter: {
        plan: planId,
      },
    },
  });
}

/**
 * Post Plan activity to the API
 *
 * @function
 * @name postPlanActivities
 *
 * @param {Object} activity - Plan activity object to be persisted to the API
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanActivity(activity) {
  return axios.post(`/activities`, JSON.stringify(activity));
}

/**
 * Get Standard operating procedures(SOP)  from the API
 *
 * @function
 * @name getPlanActivityProcedures
 *
 * @param {string} activityId - Activity Id
 * @param {number} page=1 - Page to retrieve results from
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlanActivityProcedures(activityId, page = 1) {
  return axios.get(`/procedures`, {
    params: {
      page,
      filter: {
        activity: activityId,
      },
    },
  });
}

/**
 * Post Standard Operating procedure(SOP) to the API
 *
 * @function
 * @name postPlanActivityProcedure
 *
 * @param {Object} procedure - Procedure object to be persisted to the API
 * @returns {undefined}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanActivityProcedure(procedure) {
  return axios.post(`/procedures`, JSON.stringify(procedure));
}

/**
 * Get Incident types from the API
 *
 * @function
 * @name getIncidentTypes
 *
 * @param {Object} params - params object
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getIncidentTypes(params = {}) {
  return axios.get(`/incidenttypes`, {
    params,
  });
}

/**
 * Get party roles as of disaster management from the API
 *
 * @function
 * @name getRoles
 *
 * @param {Object} params - params object
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getRoles(params = {}) {
  return axios.get(`/roles`, {
    params,
  });
}
