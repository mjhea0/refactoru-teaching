var express = require('express'),
    router = express.Router();


router.get('/', function (req, res) {
  res.render('index', { user : req.user });
});

router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});


module.exports = router;
