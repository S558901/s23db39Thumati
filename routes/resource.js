var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var telephone_controller = require('../controllers/telephone');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// telephone ROUTES ///
// POST request for creating a telephone.
router.post('/telephone', telephone_controller.telephone_create_post);
// DELETE request to delete telephone.
router.delete('/telephone/:id', telephone_controller.telephone_delete);
// PUT request to update telephone.
router.put('/telephone/:id', telephone_controller.telephone_update_put);
// GET request for one telephone.
router.get('/telephone/:id', telephone_controller.telephone_detail);
// GET request for list of all telephone items.
router.get('/telephone', telephone_controller.telephone_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"telephone", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};