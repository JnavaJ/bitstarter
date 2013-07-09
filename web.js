var fs = require('fs');
var file = "index.html";
var rawWeb = fs.readFileSync(file);
var web = rawWeb.buf.toString();

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(web);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
