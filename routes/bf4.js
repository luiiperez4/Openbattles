var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bf4', function(req, res, next) {
  res.render('bf4', { title: 'Openbattles.com' });
});

module.exports = router;
