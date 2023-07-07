const express = require('express');
const productRouter = require('./product.router')
const config = require('../config')
const notFound = require("../middlewares/notFound.handler");
function routerApi(app) {
    const router = express.Router();

    app.use(`/${config.api.pathPrefix}`, router);
    app.get(`/${config.api.pathPrefix}/`, (req, res) => {
        res.json({success: true, message: 'Api is running'})
    })
    /**
     * App Routes
     */
    router.use('/product', productRouter);

}

module.exports = routerApi;
