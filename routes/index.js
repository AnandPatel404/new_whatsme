var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/404', function(req, res, next) {
  res.render('error/404', { title: 'Error 404' });
});

router.get('/500', function(req, res, next) {
  res.render('error/500', { title: 'Error 500' });
});

router.get('/email', function(req, res, next) {
  res.render('email/otp', { title: 'Error 500' });
});

module.exports = router;
