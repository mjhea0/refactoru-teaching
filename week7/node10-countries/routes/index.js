var express = require('express');
var router = express.Router();
var countries = require('../models/countries.json');


router.get('/', function(req, res) {
  res.render('index');
});

router.get('/countries', function(req, res) {
  res.send(countries);
});

router.post('/search', function(req, res) {
  var searchTerm = req.body.country;
  for (var i = 0; i < countries.length; i++) {
    if(countries[i].name.toLowerCase() === searchTerm.toLowerCase() ){
      res.send(countries[i].name);
    }
    break;
  }
});

module.exports = router;
