var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();


var userController = {
  login: function(req, res) {
    res.render('login', { user: req.user });
  },
  register: function(req, res) {
    res.render('register', {});
  },
  addUser: function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) {
        console.log(err);
        res.render("register", {info: "Sorry. That username/email already exists. Try again."});
      }
      passport.authenticate('local')(req, res, function () {
        console.log(res);
        res.redirect('/');
      });
    });
  },
  loginUser: function(req, res) {
    res.redirect('/');
  },
  logout: function(req, res) {
    passport.authenticate('local')(req, res, function () {
      req.logout();
      res.redirect('/');
    });
  },

};


module.exports = userController;


// router.get('/ping', function(req, res){
//     res.status(status).send("pong!", 200);
// });
