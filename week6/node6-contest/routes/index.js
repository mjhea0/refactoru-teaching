var express = require('express');
var router = express.Router();

var allVideos = [
  {
    "submitterName": "Michael",
    "videoID": "qAe6v_6SMA8",
    "videoTitle": "Discover Flask, Part 30 - Continuous Integration ",
    "videoDescription": "Let's setup Continuous Integration with Travis-CI.",
    "votes": 10
  },
  {
    "submitterName": "Michael",
    "videoID": "FD0p-opdyoE",
    "videoTitle": "Discover Flask, Part 13 - Heroku PostgreSQL Setup ",
    "videoDescription": "Today we'll re-cap the steps we took in the last video to setup PostgreSQL on Heroku and then finalize the setup by setting the schema and adding data.",
    "votes": 11
  }
];

// *** helper functions *** //

function addVideo(video) {
  allVideos.push(video);
  return allVideos;
}

function getRandomVideo() {
  return Math.floor(Math.random() * allVideos.length);
}

function getVideoByYoutubeID(youtubeid) {
  for (var i = 0; i < allVideos.length; i++) {
      if(allVideos[i].videoID === youtubeid) {
        return allVideos[i];
      }
   }
}


// *** routes *** //

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/add', function(req, res, next) {
  res.render('add', {full: (allVideos.length > 7)});
});

router.get('/videos', function(req, res, next) {
  if (allVideos.length > 0) {
    // get two random videos
    var randomIndexOne = getRandomVideo();
    var randomIndexTwo = randomIndexOne;
    while(randomIndexTwo === randomIndexOne){
      randomIndexTwo = getRandomVideo();
    }
    var videoOne = allVideos[randomIndexOne];
    var videoTwo = allVideos[randomIndexTwo];
    res.render('videos', {first: videoOne, second: videoTwo});
  } else {
    res.render('videos', {error: true});
  }
});

router.get('/vote/:id', function(req, res, next) {
  var videoID = req.params.id;
  getVideoByYoutubeID(videoID).votes++;
  res.redirect('/videos');
});

router.post('/submit', function(req, res, next) {
  var videoInfo = req.body;
  addVideo(videoInfo);
  res.redirect('/');
});


module.exports = router;