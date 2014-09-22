'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var http = require('http');

var app = express();
app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));
app.use(bodyparser.json());

// require('./routes/note-routes')(app);
// require('./routes/index')(app);

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port: %d', server.address().port);
});
