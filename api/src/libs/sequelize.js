const { Sequelize } = require('sequelize');

const setupModels = require('../db/models');
const config = require('../config')

const USER = encodeURIComponent(config.db.user);
const PASSWORD = encodeURIComponent(config.db.password);
const URI = `postgres://${USER}:${PASSWORD}@${config.db.host}:${config.db.port}/${config.db.database}`;
console.log(URI)

const options = {
    dialect: 'postgres',
    logging: false,
};
const sequelize = new Sequelize(URI, options);

setupModels(sequelize);

module.exports = sequelize;