// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var request = require('request');
var path = require('path');
var passport = require('passport');
var http = require('http');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');
var env = process.env;

console.log(env.NAME);

if (env.NAME === 'dev') {
  console.log('Serve Dev Client');
  var curr_env = 'client';
} else {
  var curr_env = 'dist';
}

// create a new express server
// var app = require('../client/app');
var app = express();
var apiUrl = '';

// Set app to use static filepaths
app.use('/app', express.static(path.resolve(curr_env + '/app')));
app.use('/lib', express.static(path.resolve(curr_env + '/lib')));
app.use('/styles', express.static(path.resolve(curr_env +'/styles')));


// route for api calls
app.get('/api', function(req, res, next) {
  return res;
});


// For Angular SPA send index.html to render application
app.all('/*', function(req, res, next) {
    res.sendFile(path.resolve(curr_env + '/index.html'));
});

// Listen on port 3000
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});


module.exports = app;
