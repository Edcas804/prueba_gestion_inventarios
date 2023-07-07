require("dotenv").config()

module.exports = {
    api: {
        port: process.env.PORT,
        pathPrefix: process.env.PATH_PREFIX,
        whiteList: process.env.WHITE_LIST,
    },

    db: {
        host: process.env.PG_HOST,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
        schema: process.env.PG_SCHEMA,
        port: process.env.PG_PORT
    }
}