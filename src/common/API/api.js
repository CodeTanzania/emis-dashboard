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
 * Get Plans from the API
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
  return axios.get(`/plans/${planId}/activities`, {
    params: {
      page,
    },
  });
}
