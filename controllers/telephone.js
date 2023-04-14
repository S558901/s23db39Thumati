var telephone = require('../models/telephone');
// List of all telephone

// List of all telephone
exports.telephone_list = async function(req, res) {
    try{
    thetelephone = await telephone.find();
    res.send(thetelephone);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    //List of all telephone
    exports.telephone_list = async function(req, res) {
    try{
    thetelephone = await telephone.find();
    res.send(thetelephone);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }
    
// for a specific telephone.
exports.telephone_detail = function(req, res) {
res.send('NOT IMPLEMENTED: telephone detail: ' + req.params.id);
};
// Handle telephone create on POST.
exports.telephone_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: telephone create POST');
};
// Handle telephone delete form on DELETE.
exports.telephone_delete = function(req, res) {
res.send('NOT IMPLEMENTED: telephone delete DELETE ' + req.params.id);
};
// Handle telephone update form on PUT.
exports.telephone_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: telephone update PUT' + req.params.id);
};