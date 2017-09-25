const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dolphinSchema = new Schema({
    name: String,
    type: String,
    age: Number,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});

module.exports = mongoose.model("dolphin", dolphinSchema);