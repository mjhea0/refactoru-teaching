var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

mongoose.connect('mongodb://localhost/mycompanyname');

var Applicant = mongoose.model('Applicant', {
  'name': String,
  'bio': String,
  'skills': String,
  'years': Number,
  'why': String
});

var applicant;

app.get('/', function(req, res) {
  res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
  Applicant.find({}, function(err, results) {
    res.render('applicants', {applicantInfo: results});
  });
});


// creates and applicant
app.post('/applicant', function(req, res){
  // Here is where you need to get the data
  // from the post body and store it in the database

  var userInput = req.body;

  applicant = new Applicant({
    name: userInput.name,
    bio: userInput.bio,
    skills: userInput.skills,
    years: userInput.years,
    why: userInput.why
  });
  applicant.save();
  res.redirect('/success');
});

app.get('/success', function(req, res) {
  res.render('success');
});

app.post('/delete', function(req, res) {
  Applicant.findByIdAndRemove(req.body.userID, function(err, results) {
    console.log(results);
    console.log('deleted!');
  });
});

app.get('/:id', function(req, res) {
  console.log(req.params.id);
  Applicant.findOne({_id: req.params.id}, function(err, results) {
    console.log(results);
    res.send(results);
  });
});


var server = app.listen(8441, function() {
  console.log('Express server listening on port ' + server.address().port);
});
