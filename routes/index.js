var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'herestory' });
});

router.get('/categories', function(req, res) {
  res.render('categories', { title: 'Categories' });
});

router.get('/choose', function(req, res) {
  res.render('choose', { title: 'Choose' });
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'Login' });
});

router.get('/audio', function(req, res) {
  res.render('audio', { title: 'Audio' });
});

module.exports = router;