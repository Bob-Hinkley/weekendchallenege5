var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var favorite = require('./routes/favorite');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/favorite', favorite); //pass in the route 'favorite.js'

//requests send to index.html
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Server listening on port', server.address().port);
});
