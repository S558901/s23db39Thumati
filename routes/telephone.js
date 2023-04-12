var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('telephone', { title: 'Search Results of telephone' });
});

module.exports = router;