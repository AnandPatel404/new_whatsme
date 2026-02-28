var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/dashboard', function (req, res, next) {
    res.render('users/dashboard', { title: 'Dashboard' });
});

router.get('/add-whatsapp', function (req, res, next) {
    res.render('users/whatsapp/add-whatsapp', { title: 'Add Whatsapp' });
});

router.get('/edit-whatsapp', function (req, res, next) {
    res.render('users/whatsapp/edit-whatsapp', { title: 'Edit Whatsapp' });
});


router.get('/all-whatsapp', function (req, res, next) {
    res.render('users/whatsapp/all-whatsapp', { title: 'All Whatsapp' });
});


module.exports = router;
