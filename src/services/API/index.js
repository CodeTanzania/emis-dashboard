const API = {
  getStakeholders: () => fetch('https://emis-asat.herokuapp.com/v1/parties')
    .then(res => res.json())
    .then(data => data),
  searchStakeholder: searchText => fetch(`https://emis-asat.herokuapp.com/v1/parties?q=${searchText}`)
    .then(res => res.json())
    .then(data => data),
};

export default API;
