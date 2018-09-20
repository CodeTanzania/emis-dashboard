const API_END_POINT = 'https://emis-asat.herokuapp.com/v1';
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

  getIncidents: () => 
    fetch('https://emis-incident-type.herokuapp.com/v1/incidenttypes')
      .then(res => res.json())
      .then(response => response.data)
};

export default API;
