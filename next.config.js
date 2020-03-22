const withPlugins = require('next-compose-plugins');
const images = require('next-images');

// next.js configuration
const nextConfig = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    
    return config
  }
};

module.exports = withPlugins([
  images,
], nextConfig);