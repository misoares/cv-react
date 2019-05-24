const withTypescript = require('@zeit/next-typescript')
const withReactSvg = require('next-react-svg')
const withOptimizedImages = require('next-optimized-images');
const path = require('path');
const withPlugins = require('next-compose-plugins');
const withOffline = require('next-offline')

const nextConfig = {
  workboxOpts: {
    swDest: 'service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}

 
module.exports = withOffline(withTypescript(
  withOptimizedImages(
  withReactSvg({
    include: path.resolve(__dirname, './static/images'),
    webpack(config, options) {
      return config
    },
    handleImages: ['jpeg','png'],
    ...nextConfig
  }))))