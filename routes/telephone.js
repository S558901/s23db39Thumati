var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('telephone', { title: 'Search Results of telephone' });
});

module.exports = router;

var express = require('express');
const telephone_controlers= require('../controllers/telephone');
var router = express.Router();
/* GET telephone */
router.get('/', telephone_controlers.telephone_view_all_Page );
module.exports = router;