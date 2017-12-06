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
  res.render('about');
});

app.get('/contact', function(req, res){
  res.render('contact');
});
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});
app.post('/contact', function(req, res){
  console.log('TEST');
  res.send('POST Test');
  console.log('TEST');
  // var transporter = nodemailer.createTransport({
  //   service: 'Gmail',
  //   auth: {
  //     user: 'mopmophop@gmail.com',
  //     pass: 'samutamu'
  //   }
  // });
  // var mailOptions = {
  //   from: 'Sunali <mopmophop@gmail.com>',
  //   to: 'sunali@aol.com',
  //   subject: 'Website submission',
  //   text: 'You have a submission with following details...Name: '+req.body.name+ 'Email:' +req.body.email+ 'Message: '+res.body.message,
  //   html: '<p>You have a submission with following details...</p>Name: '+req.body.name+ 'Email:' +req.body.email+ 'Message: '+res.body.message
  // };
  // transporter.sendMail(mailOptions, function(error, info){
  //   if(error){
  //     console.log(error);
  //     res.redirect('/');
  //   } else {
  //     console.log('Message sent: '+info.response);
  //     res.redirect('/');
  //   }
  // });
});
app.listen(3000);
console.log('Server is running on port 3000');
module.exports = app;
