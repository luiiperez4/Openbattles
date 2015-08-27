var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/rocket', function(req, res, next) {
  res.render('rocket', { title: 'Openbattles.com' });
});

module.exports = router;
