import axios from 'axios';

const API_END_POINT = 'https://emis-asat.herokuapp.com/v1';
const INCIDENTS_API = 'https://emis-incident-type.herokuapp.com/v1';

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
  createStakeholder: data => {
    const url = `${API_END_POINT}/parties`;
    const config = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    };
    return fetch(url, config).then(res => res.json());
  },

  /**
   * It update stakeholder information
   * @param {String} stakeholder stakeholder Identifier to update
   * @param {Object} updates stakeholder update data
   */
  updateStakeholder: (stakeholderId, updates) => {
    const url = `${API_END_POINT}/parties/${stakeholderId}`;
    const config = {
      method: 'PATCH',
      body: JSON.stringify(updates),
      headers: {
        'content-type': 'application/json',
      },
    };
    return fetch(url, config).then(res => res.json());
  },
  getIncidentType: () =>
    fetch(`${INCIDENTS_API}/incidenttypes`)
      .then(res => res.json())
      .then(response => {
        const { data, total } = response;
        return { data, total };
      }),

  createIncidentType: data => {
    const url = `${INCIDENTS_API}/incidenttypes`;
    const config = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    };
    return fetch(url, config).then(res => res.json());
  },
  updateIncidentType: (incidentTypeId, updates) => {
    const url = `${INCIDENTS_API}/incidenttypes/${incidentTypeId}`;
    const config = {
      method: 'PATCH',
      body: JSON.stringify(updates),
      headers: {
        'content-type': 'application/json',
      },
    };
    return fetch(url, config).then(res => res.json());
  },

  searchIncidentsType: searchValue =>
    fetch(`${INCIDENTS_API}/incidenttypes?q=${searchValue}`)
      .then(res => res.json())
      .then(response => {
        const { data, total } = response;
        return { data, total };
      }),
};

export default API;
