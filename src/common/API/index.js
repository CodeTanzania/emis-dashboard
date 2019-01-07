import axios from 'axios';

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || 'https://emis-plan.herokuapp.com';

/**
 * Initialize axios library
 *
 * Add headers to HTTP requests that sent to the server
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const Axios = axios.create({
  baseURL: `${API_BASE_URL}/v1`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

/**
 * Find stakeholders
 */
export const findStakeholders = ({ filters = [], page, q } = {}) => {
  const params = { page: page || 1 };
  filters.forEach(filter => {
    params[`filter[${filter.group}][$in]`] = JSON.stringify(filter.selected);
  });
  if (q) {
    params.q = q;
  }
  return Axios.get('/parties', {
    params,
  }).then(response => response.data);
};
/**
 * Retrieve stakeholder with the id provided
 * @param id {string} - Stakeholder Id
 */
export const findStakeholderById = id =>
  Axios.get(`/parties/${id}`).then(response => response.data);
/**
 * Retrieve stakeholder schema
 */
export const loadStakeholdersSchema = () =>
  Axios.get('/parties/schema').then(response => response.data);
/**
 * Retrieve stakeholder predefined roles
 */
export const getStakeholderPredRoles = () =>
  Axios.get('/roles').then(response => response.data);

/**
 * Search stakeholder using query string
 * @param {string} searchText - Search query string
 */
export const searchStakeholder = searchText => {
  const config = {
    params: {
      q: searchText,
    },
  };
  return Axios.get('/parties', config).then(response => response.data);
};

/**
 * Create new stakeholder
 * @param {Object} data stakeholder data to create
 */
export const createStakeholder = data =>
  Axios.post('/parties', data).then(res => res.data);

export const getIncidentType = () =>
  Axios.get('/incidenttypes').then(res => res.data);

export const createIncidentType = data =>
  Axios.post('/incidenttypes', data).then(res => res.data);

export const updateIncidentType = (incidentTypeId, updates) =>
  Axios.patch(`/incidenttypes/${incidentTypeId}`, updates).then(
    res => res.data
  );

export const searchIncidentsType = searchValue =>
  Axios.get(`/incidenttypes?q=${searchValue}`).then(res => res.data);
/**
 * It update stakeholder information
 * @param {String} stakeholder stakeholder Identifier to update
 * @param {Object} updates stakeholder update data
 */
export const updateStakeholder = (stakeholderId, updates) =>
  Axios.patch(`/parties/${stakeholderId}`, updates).then(res => res.data);

/**
 * Create and send new notification
 * @param {Object} data - notification data
 */
export const sendNotification = data =>
  Axios.post('/notifications', data).then(res => res.data);

/**
 * Retrieve resource stocks
 * @param {Object} params - Query parameters
 */
export const getResourceStocks = (query = {}) => {
  const params = {};
  if (query.item) {
    // set item filter
    params['filter[item]'] = query.item;
  }
  if (query.owner) {
    // set stock owner filter
    params['filter[owner]'] = query.owner;
  }
  if (query.q) {
    // stock search text which focus on stock name
    params.q = query.q;
  }
  return Axios.get('/stocks', { params }).then(response => response.data);
};

/**
 * Create resource item
 * @param {Object} data - item data
 */
export const createResourceItem = data =>
  Axios.post('/items', data).then(res => res.data);

/**
 * Retrieve resource items
 * @param {Object} params Query params
 */
export const findResourceItems = params =>
  Axios.get('/items', { params }).then(response => response.data);

/**
 * Retrieve resource item schema
 */
export const loadResourceItemSchema = () =>
  Axios.get('/items/schema').then(response => response.data);

/**
 *
 * @param {Object} data - Resource adjustment data
 */
export const createResourceStockAdjustment = data =>
  Axios.post('/adjustments', data).then(res => res.data);

/**
 * Retrieve resource adjustment schema
 */
export const loadResourceAdjustmentSchema = () =>
  Axios.get('/adjustments/schema').then(response => response.data);

/**
 * Get Plan schema from the API
 *
 * @function
 * @name getPlanSchema
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlanSchema() {
  return Axios.get('/plans/schema');
}

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
  return Axios.get('/plans', {
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
  return Axios.post('/plans', plan);
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
export function putPlan(plan) {
  return Axios.put(`/plans/${plan._id}`, plan); // eslint-disable-line
}

/**
 * Delete existing plan
 *
 * @function
 * @name deletePlan
 *
 * @param {string} plan - Plan to be deleted
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function delPlan(plan) {
  return Axios.delete(`/plans/${plan._id}`); //eslint-disable-line
}

/**
 * Get Plan activity schema from the API
 *
 * @function
 * @name getPlanActivitySchema
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlanActivitySchema() {
  return Axios.get('/activities/schema');
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
  return Axios.get(`/activities`, {
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
 * Get Plan Activities per phase from the API
 *
 * @function
 * @name getPlanPhaseActivities
 *
 * @param {string} planId - Plan unique ID
 * @param {string} phase - phase name
 * @param {number} page - page to retrieve results from
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlanPhaseActivities(planId, phase, page = 1) {
  return Axios.get(`/activities`, {
    params: {
      page,
      filter: {
        plan: planId,
        phase,
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
  return Axios.post(`/activities`, JSON.stringify(activity));
}

/**
 * Update Plan Activity in the API
 *
 * @function
 * @name putPlanActivity
 *
 * @param {Object} activity - activity update object
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function putPlanActivity(activity) {
  return Axios.put(`/activities/${activity._id}`, JSON.stringify(activity)); //eslint-disable-line
}

/**
 * Get Plan Activity Procedure schema from the API
 *
 * @function
 * @name getPlanActivityProcedureSchema
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getPlanActivityProcedureSchema() {
  return Axios.get('/procedures/schema');
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
  return Axios.get(`/procedures`, {
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
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function postPlanActivityProcedure(procedure) {
  return Axios.post(`/procedures`, JSON.stringify(procedure));
}

/**
 * Update Standard Operating procedure(SOP) in the API
 *
 * @function
 * @name putPlanActivityProcedure
 *
 * @param {Object} procedure - procedure update object
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function putPlanActivityProcedure(procedure) {
  return Axios.put(`/procedures/${procedure._id}`, JSON.stringify(procedure)); //eslint-disable-line
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
  return Axios.get(`/incidenttypes`, {
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
  return Axios.get(`/roles`, {
    params,
  });
}

/**
 * Get resource items from the API
 *
 * @function
 * @name getResourceItems
 *
 * @param {Object} params - params object
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getResourceItems(params = {}) {
  return Axios.get(`/items`, {
    params,
  });
}

/**
 * Get Stakeholders from the API
 *
 * @name function
 * @name getResourceItems
 *
 * @param {Object} params - params object
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getStakeholders(params = {}) {
  return Axios.get(`/parties`, { params });
}

/**
 * Get Geographical features from API
 *
 * @function
 * @name getFeatures
 *
 * @param {Object} params - params object
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getFeatures(params = {}) {
  return Axios.get(`/features`, { params });
}

/**
 * Get list of questionnaires available from the API
 *
 * @function
 * @name getQuestionnaires
 *
 * @param {Object} params
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getQuestionnaires(params = {}) {
  return Axios.get(`/questionnaires`, { params });
}

/**
 * Get  parallel the setup configs for plan from the API
 * This function will be called during application initialization only
 *
 * @function setup
 * @name setupPlan
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function setupPlan() {
  return axios
    .all([
      getPlanSchema(),
      getPlanActivitySchema(),
      getPlanActivityProcedureSchema(),
      getPlans(),
    ])
    .then(
      axios.spread((planSchema, activitySchema, procedureSchema, plans) => ({
        planSchema: planSchema.data,
        activitySchema: activitySchema.data,
        procedureSchema: procedureSchema.data,
        plans: plans.data,
      }))
    );
}
