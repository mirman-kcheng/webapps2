//console.log("Hello from Node!");
var express = require('express');  //returns fcn; has fcn def for express
var port = 3000
var app = express(); //express is a constructor fcn; returns object, web server that we use

app.get('/', function (req, res) { //app.get(primary route, callback function (require, receive); teaching node server how to respond, http request
  res.send('Hello from Node!');
});

app.get('/greet/:name', function(req, res) { //:name means it can change, called 'request parameter' lives inside request in params
var name = req.params.name;
  res.send("<h1> Hi, " + name + "!</h1>");
});

app.use('/static', express.static('public'));

app.listen(port, function () {
  console.log('Example app listening on port' + port.toString());
});
