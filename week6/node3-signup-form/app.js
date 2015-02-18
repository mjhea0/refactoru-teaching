var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/formsubmit', function(req, res) {
  res.render('success');
});

var server = app.listen(8004, function() {
	console.log('Express server listening on port ' + server.address().port);
});