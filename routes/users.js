var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/dashboard', function (req, res, next) {
    res.render('users/dashboard', { title: 'Dashboard' });
});

module.exports = router;
