const API = {
    getAlerts: () => fetch('https://emis-alert.herokuapp.com/v1/alerts')
      .then(res => res.json())
      .then(res => res.data),
  };
  
  export default API;