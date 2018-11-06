const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'https://emis-stakeholders-api-v1.herokuapp.com/v1/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
};
