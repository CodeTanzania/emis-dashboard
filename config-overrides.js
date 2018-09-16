const path = require('path');
const { injectBabelPlugin, compose } = require('react-app-rewired'); // eslint-disable line import/no-extraneous-dependencies

/**
 * Override webpack configurations for the application
 *
 * @param {Object} config
 * @param {Object} env
 */
module.exports = {
  webpack: function (config, env) {
    const newConfig = injectBabelPlugin(['import',
      { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
    ], config);

    const rewires = compose(
      // Add CSS modules 
      require('react-app-rewire-css-modules-extensionless')({
        include: /.*\.module\.css$/ // add css modules only to css files with keword module
      })
    );

    // Add src shared components to the webpack modules to make
    // import from these folder possible without writing relative path
    const modules = [
      __dirname,
      path.resolve(__dirname, 'src', 'common'),
      path.resolve(__dirname, 'src', 'common', 'components'),
      ...newConfig.resolve.modules
    ];
    newConfig.resolve.modules = modules;


    return rewires(newConfig, env);
  }
};
