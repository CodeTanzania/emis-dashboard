const API_END_POINT = 'https://emis-asat.herokuapp.com/v1';
const INCIDENTS_API = 'https://emis-incident-type.herokuapp.com/v1'

const API = {
  findStakeholders: () =>
    fetch(`${API_END_POINT}/parties`).then(res => res.json()),

  searchStakeholder: searchText =>
    fetch(`${API_END_POINT}/parties?q=${searchText}`).then(res => res.json()),

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
  getIncidentType: () => {
  return fetch(`${INCIDENTS_API}/incidenttypes`)
    .then(res => res.json())
    .then(response => response.data)
  },
  createIncidentType: data => {
    const url = `${INCIDENTS_API}/incidenttypes`;
    const config = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    };
    console.log('create data');
    return fetch(url, config).then(res => res.json());
  },
  updateIncidentType: (incidentTypeId, updates) => {
    const url = `${INCIDENTS_API}/incidenttypes/:${incidentTypeId}`;
    const config = {
      method: 'PATCH',
      body: JSON.stringify(updates),
      headers: {
        'content-type': 'application/json',
      },
    };
    console.log('create update')
    return fetch(url, config).then(res => res.json());
  },
};


export default API;
