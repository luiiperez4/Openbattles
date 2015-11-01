var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('codaw', { title: 'Openbattles.com' });
});

module.exports = router;
