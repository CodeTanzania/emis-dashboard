const proxy = require('http-proxy-middleware');

const API_BASE_URL =
  process.env.EMIS_API_ENDPOINT || 'https://emis-plan.herokuapp.com';
const RESOURCE_API_URL = 'https://emis-resource.herokuapp.com';

function apiProxy(app) {
  app.use(
    proxy('/api/resources', {
      target: `${RESOURCE_API_URL}/v1/`,
      changeOrigin: true,
      pathRewrite: { '^/api/resources': '' },
    })
  );

  app.use(
    proxy('/api', {
      target: `${API_BASE_URL}/v1/`,
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
}

module.exports = apiProxy;
