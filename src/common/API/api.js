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
 * Get Plans Activities from the API
 *
 * @function
 * @name getPlanActivities
 *
 * @param {string} planId - Plan Id
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
