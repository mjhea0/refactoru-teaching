var express = require('express'),
    bodyParser = require('body-parser'),
    _ = require('underscore');

var app = express();

var places = [
  {'place': 'seville',
  'next': 'canary'},
  {'place': 'canary',
  'next': 'capeverde'},
  {'place': 'capeverde',
  'next': 'straitsofmagellan' },
  {'place': 'straitsofmagellan',
  'next': 'guam'},
  {'place': 'guam',
  'next': 'phillipines'},
  {'place': 'phillipines',
  'next': 'seville'}
];

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/places/:place', function(req, res) {

  var city = req.params.place.toLowerCase();

  var next = _.find(places, function(obj){
    return obj.place === city;
  });

  res.render('place', {'current': next.place, 'next': next.next});

});

var server = app.listen(8520, function() {
	console.log('Express server listening on port ' + server.address().port);
});