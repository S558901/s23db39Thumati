var express = require('express');
const telephone_controlers= require('../controllers/telephone');
var router = express.Router();

/* GET users listing. 
class telephone{
    constructor(telephone_type, telephone_name, telephone_cost){
        this.telephone_type=telephone_type;
        this.telephone_name=telephone_name;
        this.telephone_cost=telephone_cost;
    }
}

/* GET home page. 
router.get('/', function(req, res, next) {
    let s1= new telephone('Knee-high','telephone',6000);
    let s2= new telephone('Earth shoe','Adidas',4000);
    let s3= new telephone('Flip-flops','Reebok',5000);
  res.render('telephone', { title: 'Search Results telephone',telephone: [s1,s2,s3] });
});*/
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
router.get('/', telephone_controlers.telephone_view_all_Page );
router.get('/detail', secured,telephone_controlers.telephone_view_one_Page);
router.get('/create', secured,telephone_controlers.telephone_create_Page);
//router.get('/update', telephone_controlers.telephone_update_Page);
router.get('/delete', secured,telephone_controlers.telephone_delete_Page);
module.exports = router;

/* GET update costume page */
    
router.get('/update', secured,telephone_controlers.telephone_update_Page);