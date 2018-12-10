import axios from 'axios';

const API_END_POINT = 'https://emis-asat.herokuapp.com/v1';
const INCIDENTS_TYPE_API = 'https://emis-plan.herokuapp.com/v1';
const INCIDENTS_API = 'https://emis-incident.herokuapp.com/v1/';
const INCIDENT_ACTIONS_API = 'https://emis-incident.herokuapp.com/v1';

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

  /**
   * Find incidents-type
   */
  getIncidentType: ({ page }) => {
    const params = { page: page || 1 };
    const url = Axios.get(`${INCIDENTS_TYPE_API}/incidenttypes`, {
      params,
    }).then(response => response.data);
    return url;
  },

  createIncidentType: data => {
    const url = `${INCIDENTS_TYPE_API}/incidenttypes`;
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
    const url = `${INCIDENTS_TYPE_API}/incidenttypes/${incidentTypeId}`;
    const config = {
      method: 'PATCH',
      body: JSON.stringify(updates),
      headers: {
        'content-type': 'application/json',
      },
    };
    return fetch(url, config).then(res => res.json());
  },
  /**
   * Search incidentType using query string
   * @param {string} searchValue - Search query string
   */
  searchIncidentsType: searchValue => {
    const config = {
      params: {
        q: searchValue,
      },
    };
    return Axios.get(`${INCIDENTS_TYPE_API}/incidenttypes`, config).then(
      response => response.data
    );
  },

  /* API for Incidents */

  getIncidents: () => {
    const params = { limit: 100 };
    const url = Axios.get(`${INCIDENTS_API}/incidents`, {
      params,
    }).then(response => response.data);
    return url;
  },

  /* Api for recording new incident */
  createIncident: data => {
    const url = `${INCIDENTS_API}/incidents`;
    const config = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    };
    return fetch(url, config).then(res => res.json());
  },

  /* Api for displaying incident by Id */
  getIncidentById: incidentId => {
    const url = Axios.get(`${INCIDENTS_API}/incidents/${incidentId}`).then(
      res => res.data
    );
    return url;
  },

  getIncidentsActions: () => {
    const params = { limit:100 };
    const url = Axios.get(`${INCIDENT_ACTIONS_API}/actions`, {
      params,
    }).then(response => response.data);
    return url;
  },

  getIncidentActionById: incidentId =>
    Axios.get(`${INCIDENT_ACTIONS_API}/actions/${incidentId}`).then(
      res => res.data
    ),
};

export default API;
