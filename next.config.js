const withPlugins = require('next-compose-plugins');
const images = require('next-images');
const sass = require('@zeit/next-sass');
const withTM = require('next-transpile-modules')(['react-leaflet']);

// next.js configuration
const nextConfig = {
  useFileSystemPublicRoutes: false,
  distDir: 'build',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    
    return config
  }
};

module.exports = withPlugins([

  [sass, {
    cssModules: true,
    cssLoaderOptions: {
      localIdentName: '[local]___[hash:base64:5]',
    },
  }],

  images,

  withTM
], nextConfig);