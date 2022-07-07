// const app = require("json-server")
// const server = app.create()
// const router = app.router("./data/db.json")
// const middleware = app.defaults({ static: "./build" })

// const port = process.env.PORT || 8000

// server.use(middleware)
// server.use(router)

// server.listen(port, () =>
//     console.log(`Successfully started server on port: ${port}`)
// )

const jsonServer = require("json-server")
const app = jsonServer.create()
const path = require("path")
const express = require("express")
const middlewares = jsonServer.defaults()
const router = jsonServer.router("data/db.json")
const port = process.env.PORT || 8000

app.use("/db", middlewares, router)
app.use(express.static(path.join(__dirname, "build")))

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(port, () =>
    console.log(`Successfully started server on port: ${port}`)
)
