var express = require('express');
var request = require('request');
var app = express();

app.use(function(req, res, next) {
  console.log('request ' + req.url);
  // continue serving the request
  next();
})


app.use(express.static(__dirname))

var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})