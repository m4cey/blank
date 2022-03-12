const respawn = require('respawn');

const monitor = respawn(['node', 'server.js']);
monitor.start();
