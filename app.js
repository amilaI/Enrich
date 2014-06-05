'use strict';

var http = require('http');
var express = require('express');   
var app = express();
app.set('port', process.env.PORT || 8001);
app.use(express.static(__dirname + '/app/'));

app.get('/', function(req, res){
res.send(' This is a test ');
});

var server = app.listen(8081, function() {
console.log('Listening on port %d', server.address().port);
console.log("Successfully loaded pearson My class");
});