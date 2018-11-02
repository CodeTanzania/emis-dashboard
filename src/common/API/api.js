import axios from './axios';

/**
 * Get Plans from the API
 *
 * @function
 * @name getPlans
 *
 * @param {number} page=1 - Page to retrieve results from
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlans(page = 1) {
  return axios.get('/plans', {
    params: {
      page,
    },
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
      filter: {
        plan: planId,
      },
    },
  });
}

/**
 * Get Standard operating procedures(SOP)  from the API
 *
 * @function
 * @name getPlanActivityProcedures
 *
 * @param {string} activityId - Activity Id
 * @param {number} page=1 - Page to retrieve results from
 *
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
