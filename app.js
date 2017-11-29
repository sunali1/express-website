var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var nodemailer = require('nodemailer');


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('index',{title: 'Welcome'});
});

app.get('/about', function(req, res){
  res.render('index');
});

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://mm_recruitment_user_readonly:rebelMutualWhistle@ds037551.mongolab.com:37551/mm-recruitment';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();
});

app.listen(3000);
console.log('Server is running on port 3000');

module.exports = app
