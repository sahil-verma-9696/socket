const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    fullname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
    msg: {
        type: Array,
    },
},{
    timestamps: true
});

const User = mongoose.model("Users", userSchema);

module.exports = { User };