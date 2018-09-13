const API_END_POINT = 'https://emis-asat.herokuapp.com/v1';
const API = {
  findStakeholders: () => {
    return fetch(`${API_END_POINT}/parties`).then(res => res.json());
  },
  searchStakeholder: searchText => {
    return fetch(`${API_END_POINT}/parties?q=${searchText}`)
      .then(res => res.json())
  },
  createStakeholder: data => {
    const url = `${API_END_POINT}/parties`;
    const config = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    };
    return fetch(url, config).then(res => res.json());
  },
  updateStakeholder: (stakeholderId, updates) => {
    const url = `${API_END_POINT}/parties/${stakeholderId}`;
    const config = {
      method: 'PATCH',
      body: JSON.stringify(updates),
      headers: {
        'content-type': 'application/json'
      }
    };
    return fetch(url, config).then(res => res.json());
  }
};

export default API;
