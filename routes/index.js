var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'herestory' });
});

router.get('/test', function(req, res) {
  res.render('mainmenu', { title: 'Main Menu'});
});

router.get('/test2', function(req, res) {
  res.render('audio', { title: 'Success' });
});

module.exports = router;