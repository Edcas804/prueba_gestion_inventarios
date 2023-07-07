const express = require('express');
const { createProductSchema, getProductSchema } = require('../schemas/product.schema');
const router = express.Router();
const productController = require('../controllers/product.controller')

router
    .get( '/', productController.get)
    .get( '/:id', getProductSchema, productController.getById)
    .get('/page/:page', productController.getByPage)
    .post('/', createProductSchema, productController.store)
    .post( '/:id', productController.update)
    .delete( '/:id', productController._delete)

module.exports = router;
