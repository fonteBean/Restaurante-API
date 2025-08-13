const knexConfig = require('../knexfile');
const kenx = require('knex');

const nodeEnv = process.env.NODE_ENV || 'development';
const config = knexConfig[nodeEnv];

const db= knex(config);

module.exports = db;