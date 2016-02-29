var express = require('express');
var request = require('request');
var app     = express();


app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 5000);
console.log('Magic happens on port 5000');
exports = module.exports = app;
