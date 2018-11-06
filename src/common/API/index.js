import axios from 'axios';

/**
 * Initialize axios library
 *
 * Add headers to HTTP requests that sent to the server
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const Axios = axios.create({
  baseURL: '/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const API = {
  /**
   * Find stakeholders
   */
  findStakeholders: ({ filters = [], page } = {}) => {
    const params = { page: page || 1 };
    filters.forEach(filter => {
      params[`filter[${filter.group}][$in]`] = JSON.stringify(filter.selected);
    });
    return Axios.get('/parties', {
      params,
    }).then(response => response.data);
  },
  /**
   * Retrieve stakeholder schema
   */
  loadStakeholdersSchema: () =>
    Axios.get('/parties/schema').then(response => response.data),
  /**
   * Retrieve stakeholder predefined roles
   */
  getStakeholderPredRoles: () =>
    Axios.get('/roles').then(response => response.data),

  /**
   * Search stakeholder using query string
   * @param {string} searchText - Search query string
   */
  searchStakeholder: searchText => {
    const config = {
      params: {
        q: searchText,
      },
    };
    return Axios.get('/parties', config).then(response => response.data);
  },

  /**
   * Create new stakeholder
   * @param {Object} data stakeholder data to create
   */
  createStakeholder: data => Axios.post('/parties', data).then(res => res.data),

  /**
   * It update stakeholder information
   * @param {String} stakeholder stakeholder Identifier to update
   * @param {Object} updates stakeholder update data
   */
  updateStakeholder: (stakeholderId, updates) =>
    Axios.patch(`/parties/${stakeholderId}`, updates).then(res => res.data),
};

export default API;
