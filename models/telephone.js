const mongoose = require("mongoose")
const telephoneSchema = mongoose.Schema({
 telephone: {type: String, minlength: 1, maxlength:30},
 size: {type: String, minlength: 1, maxlength:30},
 cost: {type: Number, min: 10, maxlength:15000}
})    
module.exports = mongoose.model("telephone",telephoneSchema)