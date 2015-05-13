// authentication

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    Account = require('./models/account');

passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

module.exports = passport;

