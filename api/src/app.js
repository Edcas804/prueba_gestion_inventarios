const express = require('express')
const cors = require('cors')
const config = require('./config')
const routerApi = require("./routes");
const { boomErrorHandler} = require("./middlewares/error.handler");
const notFound= require("./middlewares/notFound.handler");

const createApp = () => {
    const app = express()
    const whiteList = config.api.whiteList;
    const options = {
        origin: (origin, callback) => {
            if (whiteList.split(' ').includes(origin) || !origin) {
                callback(null, true)
            } else {
                console.log(`Error origin ${origin}`)
                callback(new Error(`Not allowed from ${origin}`))
            }
        }
    }
    //app.use(cors(options))
    app.use(cors())
    app.use(express.json())
    routerApi(app)
    app.use(boomErrorHandler)
    app.use(notFound)
    return app
}

module.exports = createApp