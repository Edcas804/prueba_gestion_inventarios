const config = require('./config')
const createApp = require('./app')
const app = createApp()
const port = config.api.port || 5000

app.listen(port, () => {
    console.log(`api is running on http://localhost:${port}`)
})