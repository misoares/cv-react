const withTypescript = require('@zeit/next-typescript')
const withReactSvg = require('next-react-svg')
const withOptimizedImages = require('next-optimized-images');
const path = require('path');
const withPlugins = require('next-compose-plugins');

 
module.exports = withTypescript(
  withOptimizedImages(
  withReactSvg({
    include: path.resolve(__dirname, './static/images'),
    webpack(config, options) {
      return config
    },
    handleImages: ['jpeg','png']
  })))