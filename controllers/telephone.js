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
exports.telephone_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await telephone.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle telephone create on POST.
exports.telephone_create_post = async function(req, res) {
    console.log(req.body)
    let document = new telephone();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"telephone_type":"goat", "cost":12, "size":"large"}
    document.telephone = req.body.telephone;
    document.size = req.body.size;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle telephone delete form on DELETE.
exports.telephone_delete = function(req, res) {
res.send('NOT IMPLEMENTED: telephone delete DELETE ' + req.params.id);
};
//  Handle telephone update form on PUT.
exports.telephone_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await telephone.findById( req.params.id)
    // Do updates of properties
    if(req.body.telephone_type)
    toUpdate.telephone_type = req.body.telephone_type;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    if(req.body.size) toUpdate.size = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
// VIEWS
// Handle a show all view
exports.telephone_view_all_Page = async function(req, res) {
    try{
    thetelephone = await telephone.find();
    res.render('telephone', { title: 'telephone Search Results', results: thetelephone });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // / Handle telephone create on POST.
    exports.telephone_create_post = async function(req, res) {
    console.log(req.body)
    let document = new telephone();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"telephone_type":"goat", "cost":12, "size":"large"}
    document.telephone_type = req.body.telephone_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };