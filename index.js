var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.set('num', 1);
var num = app.get('num');

console.log(num); //1

app.use(function (req, res, next) {
    console.log('Record timestamp');
    next();
});

app.use(bodyParser.json());

app.post('/', function (req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result_powery = 0;
    var result_x_powertwo = 0;
    var result_y_powertwo = 0;
    var result_cmtoinch = 0;
    var object = {
        "x": x,
        //"y": y,
        "result_sqrt": Math.sqrt(x)
        // "result_powery": Math.pow(x, y),
        // "result_x_powertwo": Math.pow(x, 2),
        // "result_y_powertwo": Math.pow(y, 2),
        //"result_cmtoinch": x * 0.393701
    }
    res.json(object);
});

app.get('/help', function (req, res, next) {
    res.send('Help me');
});

app.listen(3000, function () {
    console.log('Starting node 3000')
});