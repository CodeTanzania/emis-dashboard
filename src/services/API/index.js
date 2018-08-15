const API = {
  getStakeholders: () => fetch('http://localhost:3000/test-resources/stakeholders.json')
    .then(res => res.json())
    .then(data => data),
  searchStakeholder: searchText => fetch('http://localhost:3000/test-resources/search-stakeholders.json')
    .then(res => res.json())
    .then(data => data),
};

export default API;
