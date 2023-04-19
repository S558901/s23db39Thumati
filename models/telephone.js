const mongoose = require("mongoose")
const telephoneSchema = mongoose.Schema({
telephone: String,
size: String,
cost: Number
})
module.exports = mongoose.model("telephone",
telephoneSchema)