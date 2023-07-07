'use strict';
const { ProductSchema, TABLE_NAME: ProductTable } = require('./../models/product.model');
const config = require('./../../config')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //await queryInterface.createTable(`${config.db.schema}.${ProductTable}`, ProductSchema);
    await queryInterface.createTable(`${ProductTable}`, ProductSchema);
  },

  async down (queryInterface, Sequelize) {
    //await queryInterface.dropTable(`${config.db.schema}.${ProductTable}`);
    await queryInterface.dropTable(`${ProductTable}`);
  }
};
