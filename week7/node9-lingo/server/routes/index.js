var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();
var BeGlobal = require('node-beglobal');
var config = require('../../config');


//initialize the BeGlobal API
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: config.apiToken
});


router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
          return res.render("register", {info: "Sorry. That username already exists. Try again."});
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});


router.get('/login', function(req, res) {
  res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.get('/logout', ensureAuthenticated, function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});

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

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}


module.exports = router;
