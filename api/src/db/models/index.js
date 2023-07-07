const {Product, ProductSchema} = require('./product.model')

function setupModels(sequelize) {
    Product.init(ProductSchema, Product.config(sequelize, {schema: 'test'}))
}

module.exports = setupModels
