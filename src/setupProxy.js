const proxy = require('http-proxy-middleware');

function apiProxy(app) {
  app.use(
    proxy('/api', {
      target:
        process.env.EMIS_API_ENDPOINT ||
        'https://emis-stakeholders.herokuapp.com/v1/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
}

module.exports = apiProxy;
