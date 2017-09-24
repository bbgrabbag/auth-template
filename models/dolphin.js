const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dolphinSchema = new Schema({
    name: String,
    type: String,
    age: Number
});

module.exports = mongoose.model("dolphin", dolphinSchema);