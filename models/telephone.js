const mongoose = require("mongoose")
const telephoneSchema = mongoose.Schema({
telephone_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("telephone",
telephoneSchema)