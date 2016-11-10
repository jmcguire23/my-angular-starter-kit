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
var apiUrl = 'http://test-lighthouse-api.eu-gb.mybluemix.net/bluebank';
var apiGeo = 'http://test-lighthouse-api.eu-gb.mybluemix.net/geofence';
var apiAuth = 'https://cloudlevel.io/token'; //apiAuth for Bluebank

// Set app to use static filepaths
app.use('/app', express.static(path.resolve(curr_env + '/app')));
app.use('/lib', express.static(path.resolve(curr_env + '/lib')));
app.use('/styles', express.static(path.resolve(curr_env +'/styles')));


// route for api calls
app.get('/api', function(req, res, next) {
  return res;
});

// api/getaccounts
app.get('/api/getaccounts', function(req,res) {
  request(apiUrl + '/getaccounts').pipe(res);
});

// api/getpoapayments
app.get('/api/getpoapayments', function(req,res) {
  request(apiUrl + '/getpoapayments').pipe(res);
});

// api/updategeofence
app.post('/api/updategeofence', function(req,res) {
  request({
    url: apiGeo + '/specify', //URL to hit
    qs: {from: 'Lighthouse Angular App', time: +new Date()}, //Query string data
    method: 'POST',
    //Lets post the following key/values as form
    json: req.body
  }, function(error, response, body){
      if(error) {
          console.log(error);
      } else {
          console.log(response.statusCode, body);
      }
  });
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
