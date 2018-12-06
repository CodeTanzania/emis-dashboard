import axios from 'axios';

const API_BASE_URL =
  process.env.EMIS_API_ENDPOINT || 'https://emis-plan.herokuapp.com';
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
