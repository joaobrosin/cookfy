const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const request = require('request');

server.use(express.static('public'));
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', function (req, res) {
    request({
        url: 'https://randomuser.me/api/'
    }, function (error, response, body) {
        const result = JSON.parse(body).results[0];
        return res.render('index', { result });
    });
});

server.listen(5000, function () {
    console.log('Server is running');
});
