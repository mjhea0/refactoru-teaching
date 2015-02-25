var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

var indexController = require('./controllers/index.js');
var userController = require('./controllers/users.js');

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// passport config
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// mongoose
mongoose.connect('mongodb://localhost/refactoru_lingo');

app.get('/', indexController.index);
app.get('/login', userController.login);
app.get('/register', userController.register);
app.get('/logout', userController.logout);
app.post('/login', passport.authenticate('local'), userController.loginUser);
app.post('/register', userController.addUser);
// app.get('/translate', indexController.translate);

var server = app.listen(3390, function() {
	console.log('Express server listening on port ' + server.address().port);
});
