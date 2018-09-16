const { injectBabelPlugin, compose } = require('react-app-rewired'); // eslint-disable-line

/**
 * Override webpack configurations for the application
 *
 * @param {Object} config
 * @param {Object} env
 */
module.exports = {
  webpack(config, env) {
    const newConfig = injectBabelPlugin(
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
      config
    );

    const rewires = compose(
      // Add CSS modules
      // eslint-disable-next-line
      require('react-app-rewire-css-modules-extensionless')({
        include: /.*\.module\.css$/, // add css modules only to css files with keyword module
      })
    );

    return rewires(newConfig, env);
  },
};
