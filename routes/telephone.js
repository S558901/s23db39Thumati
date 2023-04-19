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

// GET request for one telephone.
router.get('/telephone/:id', telephone_controlers.telephone_detail);

/* GET detail telephone page */
router.get('/detail', telephone_controlers.telephone_view_one_Page);

/* GET create telephone page */
router.get('/create', telephone_controlers.telephone_create_Page);

/* GET create update page */
router.get('/update', telephone_controlers.telephone_update_Page);

// * GET delete telephone page */
router.get('/delete', telephone_controlers.telephone_delete_Page);