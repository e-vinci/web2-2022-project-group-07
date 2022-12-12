const TerserPlugin = require('terser-webpack-plugin');

const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');

const DEVELOPMENT_API_BASE_URL = 'http://localhost:3000';
const PRODUCTION_API_BASE_URL = 'http://web2-2022-project-group-07.io';
const DEVELOPMENT_PATH_PREFIX = '/';
const PRODUCTION_PATH_PREFIX = '/mymovies/';

const buildMode = process.argv[process.argv.indexOf('--mode') + 1];
const isProductionBuild = buildMode === 'production';
const API_BASE_URL = isProductionBuild ? PRODUCTION_API_BASE_URL : DEVELOPMENT_API_BASE_URL;


module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'bundle.min.js',
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
});
