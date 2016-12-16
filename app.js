/* This takes care of the server side calls
*
*
*/

var express = require('express');
var app = express();
var fs = require("fs");
var Engine = require('tingodb')();
var database = new Engine.Db(__dirname + '/db',{});

//the leaderboard database
var leaderboards = database.collection('leaderboards');

//set up the repo limit
var RateLimit = require('express-rate-limit');
//use this is on heroku
app.enable('trust proxy');

//set the limit amount
//Note: May need to change this and make a separate one for each API call
var apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  delayMs: 0, // disable delaying - full speed until the max limit is reached
  message: "Too many requests from this IP. Limit each IP to 100 requests per windowsMs"
});

//  apply to all requests
app.use('/api/', apiLimiter);


//make sure the url's for all requests are under the 'api/' path
app.get('/list', apiLimiter, function (req, res) {
  res.send('api/list');
});

app.post('/add', apiLimiter, function (req, res) {

  console.log(req.body);
  //TODO: check if sent reponame already exists

  // Insert this into the database
  // firstleaderboard.insert({
  //  "name" : req.body
  // });
  //send a confirmation back
  // res.end( JSON.stringify(data));
  res.send('api/add');
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost", host, port)

});
