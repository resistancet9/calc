var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  res.send('second change');
});

app.get('/health', function(req, res) {
  res.status(200).send('Working!');
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);