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

router.get('/home', function(req, res) {
  res.render('home', { title: 'Home' });
});

router.get('/lv1', function(req, res) {
  res.render('lv1', { title: 'Home' });
});

router.get('/lv2', function(req, res) {
  res.render('lv2', { title: 'Home' });
});

router.get('/lv3', function(req, res) {
  res.render('lv3', { title: 'Home' });
});

router.get('/lv4', function(req, res) {
  res.render('lv4', { title: 'Home' });
});

router.get('/lv5', function(req, res) {
  res.render('lv5', { title: 'Home' });
});

router.get('/lv6', function(req, res) {
  res.render('lv6', { title: 'Home' });
});

router.get('/lv7', function(req, res) {
  res.render('lv7', { title: 'Home' });
});

router.get('/lv8', function(req, res) {
  res.render('lv8', { title: 'Home' });
});

router.get('/lv9', function(req, res) {
  res.render('lv9', { title: 'Home' });
});

router.get('/lv10', function(req, res) {
  res.render('lv10', { title: 'Home' });
});

router.get('/lv11', function(req, res) {
  res.render('lv11', { title: 'Home' });
});

router.get('/forest1', function(req, res) {
  res.render('forest1', { title: 'Home' });
});

router.get('/forest2', function(req, res) {
  res.render('forest2', { title: 'Home' });
});

router.get('/forest3', function(req, res) {
  res.render('forest3', { title: 'Home' });
});

router.get('/forest4', function(req, res) {
  res.render('forest4', { title: 'Home' });
});

router.get('/forest5', function(req, res) {
  res.render('forest5', { title: 'Home' });
});

router.get('/forest6', function(req, res) {
  res.render('forest6', { title: 'Home' });
});

router.get('/forest7', function(req, res) {
  res.render('forest7', { title: 'Home' });
});

router.get('/forest8', function(req, res) {
  res.render('forest8', { title: 'Home' });
});

router.get('/forest9', function(req, res) {
  res.render('forest9', { title: 'Home' });
});

router.get('/forest10', function(req, res) {
  res.render('forest10', { title: 'Home' });
});

router.get('/forest11', function(req, res) {
  res.render('forest11', { title: 'Home' });
});

router.get('/gg1', function(req, res) {
  res.render('gg1', { title: 'Home' });
});

router.get('/gg2', function(req, res) {
  res.render('gg2', { title: 'Home' });
});

router.get('/gg3', function(req, res) {
  res.render('gg3', { title: 'Home' });
});

router.get('/gg4', function(req, res) {
  res.render('gg4', { title: 'Home' });
});

router.get('/gg5', function(req, res) {
  res.render('gg5', { title: 'Home' });
});

router.get('/gg6', function(req, res) {
  res.render('gg6', { title: 'Home' });
});

router.get('/gg7', function(req, res) {
  res.render('gg7', { title: 'Home' });
});

router.get('/gg8', function(req, res) {
  res.render('gg8', { title: 'Home' });
});

router.get('/gg9', function(req, res) {
  res.render('gg9', { title: 'Home' });
});

router.get('/gg10', function(req, res) {
  res.render('gg10', { title: 'Home' });
});

router.get('/gg11', function(req, res) {
  res.render('gg11', { title: 'Home' });
});

module.exports = router;