const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['mapbox-gl']);

const nextConfig = {};
module.exports = withPlugins([withTM], nextConfig);
