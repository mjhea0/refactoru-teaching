var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();
var BeGlobal = require('node-beglobal');
var config = require('../../config');


router.get('/translate', ensureAuthenticated, function(req, res){
  res.render('translate', { user : req.user });
});

router.post('/translate', ensureAuthenticated, function(req, res){
  beglobal.translations.translate(req.body, function(err, results) {
    if (!err) {
      res.send(results);
    } else {
      res.send(err);
    }
  });
});

router.get('/quiz', ensureAuthenticated, function(req, res){
  res.render('quiz', { user : req.user });
});

router.get('/progress', ensureAuthenticated, function(req, res){
  res.render('progress', { user : req.user });
});


var beglobal = new BeGlobal.BeglobalAPI({
  api_token: config.apiToken
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}


module.exports = router;
