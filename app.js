var express = require('express');
var bodyParser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

connection.init();
routes.configure(app);

var server = app.listen(3000, '0.0.0.0', function() {
  console.log('Server is running on port 3000');
});
