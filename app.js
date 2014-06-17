'use strict';

var http = require('http');
var express = require('express');   
var app = express();
app.set('port', process.env.PORT || 8082);
app.use(express.static(__dirname + '/app/'));

app.get('/', function(req, res){
res.send(' This is a test ');
});
app.get('/status', function(req, res){
res.send('OK ');
});

var server = app.listen(8082, function() {
console.log('Listening on port %d', server.address().port);
console.log("Successfully loaded pearson My class");
});


