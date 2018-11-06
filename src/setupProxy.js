const proxy = require('http-proxy-middleware');

function apiProxy(app) {
  app.use(
    proxy('/api', {
      target: 'https://emis-stakeholders-api-v1.herokuapp.com/v1/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
}

module.exports = apiProxy;
