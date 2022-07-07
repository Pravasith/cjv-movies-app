const app = require("json-server")
const server = app.create()
const router = app.router("./data/db.json")
const middleware = app.defaults({ static: "./build" })

const port = process.env.PORT || 8000

server.use(middleware)
server.use(router)

server.listen(port, () =>
    console.log(`Successfully started server on port: ${port}`)
)
