const { injectBabelPlugin } = require('react-app-rewired'); // eslint-disable line import/no-extraneous-dependencies

/**
 * Override webpack configurations for the application
 *
 * @param {Object} config
 * @param {Object} env
 */
module.exports = function override(config, env) {
  const newConfig = injectBabelPlugin(['import',
    { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
  ], config);

  return newConfig;
};
