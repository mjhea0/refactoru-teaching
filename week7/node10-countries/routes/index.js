var express = require('express');
var router = express.Router();
var countries = require('../models/countries.json');


router.get('/', function(req, res) {
  res.render('index');
});

router.post('/countries', function(req, res) {
  res.send(countries);
});

router.post('/search', function(req, res) {
  var search = req.body.country;
  res.send(search);
});

module.exports = router;
