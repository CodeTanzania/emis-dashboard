const API = {
  getAgencies: () => fetch('http://localhost:3000/test-resources/agencies.json')
    .then(res => res.json())
    .then(data => data),
};

export default API;
