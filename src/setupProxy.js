const proxy = require('http-proxy-middleware');

const API_BASE_URL =
  process.env.EMIS_API_ENDPOINT || 'https://emis-plan.herokuapp.com';

function apiProxy(app) {
  app.use(
    proxy('/api', {
      target: `${API_BASE_URL}/v1/`,
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
}

module.exports = apiProxy;
