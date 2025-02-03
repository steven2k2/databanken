const os = require('os');
const { name, version, description } = require('../../package.json');

module.exports = {
      appName: name,
      version,
      description,
      environment: process.env.NODE_ENV || 'development',
      hostname: os.hostname(),
      uptime: () => `${process.uptime().toFixed(2)} seconds`
};