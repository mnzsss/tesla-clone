const withPlugins = require('next-compose-plugins');

const images = require('next-images');

module.exports = withPlugins([
  [images, { esModule: true }],
], {future: { webpack5: true }})
