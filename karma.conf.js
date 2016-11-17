module.exports = function(config) {
  var webpackConfig = require('./webpack.config');
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: './karma-shim.ts', watched: false }
    ],
    exclude: [
    ],
    preprocessors: {
      './karma-shim.ts': ['webpack']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    }
  })
};
