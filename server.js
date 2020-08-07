const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function (req, res) {
    return res.render('index')
})

server.listen(5000, function () {
    console.log('Server is running')
})