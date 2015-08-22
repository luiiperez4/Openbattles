var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/codbo3', function(req, res, next) {
  res.render('codbo3', { title: 'Openbattles.com' });
});

module.exports = router;
