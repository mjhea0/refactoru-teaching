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
        res.redirect('/');
      });
    });
  },

};

module.exports = userController;




// router.post('/register', function(req, res) {
//     Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
//         if (err) {
//             return res.render('register', { account : account });
//         }

//         passport.authenticate('local')(req, res, function () {
//             res.redirect('/');
//         });
//     });
// });

// router.get('/login', function(req, res) {
//     res.render('login', { user : req.user });
// });

// router.post('/login', passport.authenticate('local'), function(req, res) {
//     res.redirect('/');
// });

// router.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/');
// });

// router.get('/ping', function(req, res){
//     res.status(status).send("pong!", 200);
// });

// module.exports = router;